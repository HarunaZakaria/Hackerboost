import { useState } from "react";

export default function AccordionItem({ number, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="item">
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && (
        <div className="content-box">
          <p>{text}</p>
        </div>
      ) }
    </div>
  );
}
