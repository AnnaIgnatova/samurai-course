export type MessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

type StatusType = "pending" | "ready";
type SubscriberType = "messages-received" | "status-changed";

type MessageReceivedSubscriberType = (messages: MessageType[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;

let subscribers = {
  "messages-received": [] as MessageReceivedSubscriberType[],
  "status-changed": [] as StatusChangedSubscriberType[],
};

let ws: WebSocket | null = null;

const cleanUp = () => {
  ws?.removeEventListener("close", closeChannel);
  ws?.removeEventListener("message", handleMessage);
  ws?.removeEventListener("open", openHandler);
};

const closeChannel = () => {
  console.log("close web socket");
  setTimeout(createChannel, 3000);
};

const openHandler = () => {
  notifyAboutStatus("ready");
};

const notifyAboutStatus = (status: StatusType) => {
  subscribers["status-changed"].forEach((s) => s(status));
};

const handleMessage = (e: MessageEvent) => {
  const messages = JSON.parse(e.data);
  subscribers["messages-received"].forEach((s) => s(messages));
};

const createChannel = () => {
  cleanUp();
  ws?.close();
  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  notifyAboutStatus("pending");
  ws.addEventListener("close", closeChannel);
  ws.addEventListener("message", handleMessage);
  ws.addEventListener("open", openHandler);
};

export const ChatAPI = {
  start() {
    createChannel();
  },
  stop() {
    subscribers["messages-received"] = [];
    subscribers["status-changed"] = [];
    cleanUp();
    ws?.close();
  },
  subscribe(
    eventName: SubscriberType,
    cb: MessageReceivedSubscriberType | StatusChangedSubscriberType
  ) {
    // @ts-ignore
    subscribers[eventName].push(cb);
  },
  unsubscribe(
    eventName: SubscriberType,
    cb: MessageReceivedSubscriberType | StatusChangedSubscriberType
  ) {
    // @ts-ignore
    console.log(subscribers);
    subscribers = subscribers[eventName].filter((s) => s !== cb);
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
};
