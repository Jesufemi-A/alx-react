import React from "react";
import "./Notifications.css";
import closeIcon from './close-icon.png';
import { getLatestNotification } from "./utils";

function buttonClose() {
  console.log("Close button has been clicked");
}

export default function Notifications() {
  return (
    <div className="Notifications">
      <button style={{}} aria-label="Close"  onClick={buttonClose}>
        <img src={closeIcon} alt="close icon" />
      </button>
      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification }}
        ></li>
      </ul>
    </div>
  );
}
