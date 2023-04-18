export type MessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

type SubscriberType = (messages: MessageType[]) => void;

let subscribers = [] as SubscriberType[];
let ws: WebSocket | null = null;

const cleanUp = () => {
  ws?.removeEventListener("close", closeChannel);
  ws?.removeEventListener("message", handleMessage);
  ws?.close();
};

const closeChannel = () => {
  console.log("close web socket");
  setTimeout(createChannel, 3000);
};

const handleMessage = (e: MessageEvent) => {
  const messages = JSON.parse(e.data);
  subscribers.forEach((s) => s(messages));
};

const createChannel = () => {
  //cleanUp();
  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
//  ws.addEventListener("close", closeChannel);
  ws.addEventListener("message", handleMessage);
};

export const ChatAPI = {
  start() {
    createChannel();
  },
  stop() {
    subscribers = [];
  //  cleanUp();
  },
  subscribe(cb: SubscriberType) {
    subscribers.push(cb);
    return () => {
      subscribers = subscribers.filter((s) => s !== cb);
    };
  },
  unsubscribe(cb: SubscriberType) {
    subscribers = subscribers.filter((s) => s !== cb);
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
};
