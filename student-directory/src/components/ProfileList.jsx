import ProfileCard from "./ProfileCard";

export default function ProfileList({ students, onToggle }) {
  return (
    <>
      {students.map((student) => (
        <div key={student.id} className="students">
          <ProfileCard student={student} onToggle={onToggle}/>
        </div>
      ))}
    </>
  );
}
