import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { updateStatusDataThunk } from "../../../redux/reducers/ProfileReducer";
import styles from "./style.module.css";

export interface StatusData {
  text?: string | null;
}

export const Status: React.FC<StatusData> = ({ text }) => {
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const [statusText, setStatusText] = useState<string>(text || "");
  const [editMode, setEditMode] = useState<boolean>(false);

  React.useEffect(() => {
    if (text !== statusText) setStatusText(text || "");
  }, [text]);

  const handleStatusMode = () => {
    id === "27789" && setEditMode(!editMode);
  };

  const changeStatusText = (e: ChangeEvent<HTMLInputElement>) => {
    setStatusText(e.target.value);
  };

  const handleUpdateStatus = () => {
    if (id === "27789") {
      handleStatusMode();
      dispatch(updateStatusDataThunk(statusText));
    }
  };

  return (
    <div className={styles["status-container"]}>
      {!editMode && <span onDoubleClick={handleStatusMode}>{text}</span>}
      {editMode && (
        <input
          autoFocus
          type="text"
          onChange={changeStatusText}
          onBlur={handleUpdateStatus}
          value={statusText}
        />
      )}
    </div>
  );
};
