import EmptyStarSVG from "./EmptyStarSVG";
import FullStarSVG from "./FullStarSVG";

export default function Star({ onRate, full, onHoverIn, onHoverOut }) {
  const starStyle = {
    width: "48px",
    height: "48px",
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
        {full ? <FullStarSVG /> : <EmptyStarSVG />}
      </span>
    </>
  );
}
