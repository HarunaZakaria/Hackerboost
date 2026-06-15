import React from "react";
import { CardProps } from "../types";

function Notification({ type = "info", children }: CardProps) {
  return <div className={`notification notification-${type}`}>{children}</div>;
}

export default Notification;
