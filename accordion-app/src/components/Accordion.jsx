import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((element, i) => (
        <AccordionItem
          number={i}
          title={element.title}
          key={element.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {element.text}
        </AccordionItem>
      ))}
    </div>
  );
}
