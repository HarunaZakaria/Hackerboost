import { useState } from "react";

export default function AccordionItem({
  number,
  title,
  onOpen,
  curOpen,
  children,
}) {
  const isOpen = number === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : number);
  }
  return (
    <div className="item">
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon" onClick={handleToggle}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && (
        <div className="content-box">
          {children}
        </div>
      )}
    </div>
  );
}
