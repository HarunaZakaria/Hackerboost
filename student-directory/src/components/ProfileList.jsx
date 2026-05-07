import ProfileCard from "./ProfileCard";
import students from "../data";

export default function ProfileList() {
  return (
    <>
      {students.map((student) => (
        <div key={student.id}>
          <ProfileCard
            student={student}
          />
        </div>
      ))}
    </>
  );
}
