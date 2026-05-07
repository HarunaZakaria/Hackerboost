import { useState } from "react";

export default function ProfileCard({ student }) {
  return (
    <>
      <h2>{student.name}</h2>
      <p>{student.track}</p>
      <p>{student.bio}</p>
      <p>{student.level}</p>
      <button>{student.isActive ? "Active" : "Inactive"}</button>
    </>
  );
}
