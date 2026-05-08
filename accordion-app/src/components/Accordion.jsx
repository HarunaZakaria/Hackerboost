import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  return (
    <>
      {data.map((element, i) => (
        <AccordionItem
          number={i}
          title={element.title}
          text={element.text}
          key={element.title}
        />
      ))}
    </>
  );
}
