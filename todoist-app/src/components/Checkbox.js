import React from "react";
import { firebase } from "../firebase";

export const Checkbox = ({ id, taskDesc }) => {
  const archivedTask = () => {
    firebase.firestore().collection("tasks").doc(id).update({ archived: true });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archivedTask()}
      onKeyDown={() => archivedTask()}
      aria-label={`Mark ${taskDesc} as done?`}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox" />
    </div>
  );
};
