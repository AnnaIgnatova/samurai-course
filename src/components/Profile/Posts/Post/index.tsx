import React from "react";
import { Avatar, List } from "antd";
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  LikeFilled,
  StarFilled,
  ShareAltOutlined,
} from "@ant-design/icons";
import { ProfileUserData } from "../../../../interfaces/profile";
import { IconText } from "./IconText";

export interface PostProps {
  id: number;
  likes: number;
  shares: number;
  comments: number;
  pinned: boolean;
  postDate: string;
  text: string;
  profileData: ProfileUserData;
  removeLike: (id: number) => void;
  likePost: (id: number) => void;
  pinPost: (id: number) => void;
}

export const Post: React.FC<PostProps> = (props) => {
  const {
    text,
    likes,
    profileData,
    comments,
    shares,
    pinned,
    likePost,
    removeLike,
    pinPost,
    id,
  } = props;
  const [isLiked, setLiked] = React.useState<boolean>(false);

  const handleLikePost = () => {
    if (isLiked) removeLike(id);
    else likePost(id);
    setLiked(!isLiked);
  };

  return (
    <List.Item
      actions={[
        <IconText
          icon={pinned ? StarOutlined : StarFilled}
          key="list-vertical-star-o"
          handleClick={() => pinPost(id)}
        />,
        <IconText
          icon={isLiked ? LikeOutlined : LikeFilled}
          key="list-vertical-like-o"
          handleClick={handleLikePost}
          text={String(likes)}
        />,
        <IconText
          icon={MessageOutlined}
          text={String(comments)}
          key="list-vertical-message"
        />,
        <IconText
          icon={ShareAltOutlined}
          key="list-vertical-share-o"
          text={String(shares)}
        />,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={profileData.photos?.large} size="large" />}
        title={<span>{profileData.fullName}</span>}
        description={new Date(new Date().toJSON()).toLocaleString("en-GB", {
          day: "numeric",
          month: "long",
        })}
      />
      {text}
    </List.Item>
  );
};
