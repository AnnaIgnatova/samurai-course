import React, { FocusEventHandler, useState } from "react";
import styles from "./style.module.css";

export const Status = () => {
  const [statusText, setStatusText] = useState<string>("default");
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleStatusMode = () => {
    setEditMode(!editMode);
  };

  const changeStatusText = (e: any) => {
    setStatusText(e.target.value);
  };
  
  return (
    <div>
      {!editMode && <span onDoubleClick={handleStatusMode}>{statusText}</span>}
      {editMode && (
        <input
          autoFocus
          type="text"
          onChange={changeStatusText}
          onBlur={handleStatusMode}
          value={statusText}
        />
      )}
    </div>
  );
};
