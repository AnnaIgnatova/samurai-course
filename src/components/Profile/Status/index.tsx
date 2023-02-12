import React, { useState } from "react";
import { useParams } from "react-router";
import styles from "./style.module.css";

export interface StatusData {
  text: string;
  updateStatus: any;
}

export const Status: React.FC<StatusData> = ({ text, updateStatus }) => {
  const { id } = useParams();
  const [statusText, setStatusText] = useState<string>(text || "empty status");
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleStatusMode = () => {
    id === "27789" && setEditMode(!editMode);
  };

  const changeStatusText = (e: any) => {
    setStatusText(e.target.value);
  };

  const handleUpdateStatus = () => {
    if (id === "27789") {
      handleStatusMode();
      updateStatus(statusText);
    }
  };

  return (
    <div>
      {!editMode && <span onDoubleClick={handleStatusMode}>{statusText}</span>}
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
