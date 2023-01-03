import { Post } from "./Post";
import styles from "./style.module.css";

export const Posts: React.FC = () => {
  const postsData = [
    {
      id: 1,
      text: "post 1",
      likes: 1,
    },
    {
      id: 2,
      text: "post 2",
      likes: 3,
    },
    {
      id: 3,
      text: "post 3",
      likes: 2,
    },
    {
      id: 4,
      text: "post 4",
      likes: 5,
    },
    {
      id: 5,
      text: "post 5",
      likes: 1,
    },
  ];
  return (
    <div className={styles["posts-container"]}>
      <div className={styles["create-post"]}>
        <textarea placeholder="type something"></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message={postsData[0].text} likes={postsData[0].likes} />
        <Post message={postsData[1].text} likes={postsData[1].likes} />
        <Post message={postsData[2].text} likes={postsData[2].likes} />
        <Post message={postsData[3].text} likes={postsData[3].likes} />
        <Post message={postsData[4].text} likes={postsData[4].likes} />
      </div>
    </div>
  );
};
