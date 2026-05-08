import ProfileCard from "./ProfileCard";

export default function ProfileList({ students, onToggle }) {
  return (
    <>
      <div className="students">
        {students.map((student) => (
          <div key={student.id}>
            <ProfileCard student={student} onToggle={onToggle} />
          </div>
        ))}
      </div>
    </>
  );
}
