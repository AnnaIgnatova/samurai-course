import homeIcon from "../../../assets/navbar/profile.svg";
import usersIcon from "../../../assets/navbar/users.svg";
import dialogsIcon from "../../../assets/navbar/messages.svg";
import newsIcon from "../../../assets/navbar/news.svg";
import settingsIcon from "../../../assets/navbar/settings.svg";
import musicIcon from "../../../assets/navbar/music.svg";

export const navbarRoutes = [
  {
    name: "Profile",
    imgUrl: homeIcon,
    path: "/profile",
  },
  {
    name: "Users",
    imgUrl: usersIcon,
    path: "/users",
  },
  {
    name: "Dialogs",
    imgUrl: dialogsIcon,
    path: "/dialogs",
  },
  {
    name: "News",
    imgUrl: newsIcon,
    path: "/news",
  },
  {
    name: "Music",
    imgUrl: musicIcon,
    path: "/music",
  },
  {
    name: "Settings",
    imgUrl: settingsIcon,
    path: "/settings",
  },
];
