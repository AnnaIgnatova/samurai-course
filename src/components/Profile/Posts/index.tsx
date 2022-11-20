import { Post } from "./Post";
import styles from "./style.module.css";

export const Posts: React.FC = () => {
  return (
    <div className={styles["posts-container"]}>
      <div className={styles["create-post"]}>
        <textarea placeholder="type something"></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message="post 1" likes={1} />
        <Post message="post 2" likes={3} />
        <Post message="post 3" likes={2} />
        <Post message="post 4" likes={5} />
        <Post message="post 5" likes={1} />
      </div>
    </div>
  );
};
