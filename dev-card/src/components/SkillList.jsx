import Skill from "./Skill";

export default function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React " emoji="💪" color="#61DAFB" />
      <Skill skill="HTML/CSS " emoji="👍" color="#E34F26" />
      <Skill skill="JavaScript" emoji="✨" color="#F7DF1E" />
      <Skill skill="Node.js " emoji="🚀" color="#339933" />
    </div>
  );
}
