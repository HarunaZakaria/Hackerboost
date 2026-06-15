import React from "react";
import { CardProps } from "../types";
function Card({ children, className = "" }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>;
}

export default Card;
