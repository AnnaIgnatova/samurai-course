import "./index.css";
import { createRoot } from "react-dom/client";
import { MainApp } from "./MainApp";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(<MainApp />);
