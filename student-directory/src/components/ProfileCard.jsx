import { useState } from "react";

export default function ProfileCard({ student, onToggle }) {
  const { name, track, bio, skillLevel, isActive } = student;
  return (
    <div className="student">
      <h2>{name}</h2>
      <h3>{track}</h3>
      <p>{bio}</p>
      <p>{skillLevel}</p>
      <button onClick={() => onToggle(student.id)}>
        {isActive ? "Activate" : "Deactivate"}
      </button>
    </div>
  );
}
