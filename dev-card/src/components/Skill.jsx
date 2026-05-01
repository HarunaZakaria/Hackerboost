export default function Skill(props) {
  return (
    <div>
      <p style={{ background: props.color }} className="skill">
        {props.skill} {props.emoji}
      </p>
    </div>
  );
}
