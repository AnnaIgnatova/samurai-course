import styles from "./style.module.css";
import iconUrl from "./../../assets/network-icon.png";
import { NavLink } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Space } from "antd";

export interface HeaderData {
  isAuth: boolean;
  imgUrl?: string | null;
  handleLogout: (e: React.MouseEvent) => void;
}

export const Header: React.FC<HeaderData> = ({
  isAuth,
  imgUrl,
  handleLogout,
}) => {
  return (
    <header className={styles.header}>
      <img src={iconUrl} alt="network icon" />
      {isAuth ? (
        <Space size={16} wrap>
          {imgUrl ? (
            <Avatar src={imgUrl} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
          <Button type="primary" onClick={handleLogout}>
            Log out
          </Button>
        </Space>
      ) : (
        <NavLink to="/login">
          <Button type="primary" onClick={handleLogout}>
            Login
          </Button>
        </NavLink>
      )}
    </header>
  );
};
