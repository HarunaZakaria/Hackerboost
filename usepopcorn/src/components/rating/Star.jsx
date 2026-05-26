import EmptyStarSVG from "./EmptyStarSVG";
import FullStarSVG from "./FullStarSVG";

export default function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };

  return (
    <>
      <span
        style={starStyle}
        role="button"
        onClick={onRate}
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
      >
        {full ? <FullStarSVG color={color} /> : <EmptyStarSVG color={color}/>}
      </span>
    </>
  );
}
