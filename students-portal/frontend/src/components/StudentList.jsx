export default function StudentList({ students, deleteStudentHandler }) {
  return (
    <div>
      {students.map((student) => (
        <div key={student._id}>
          <h3>{student.name}</h3>
          <p>{student.email}</p>
          <p>{student.course}</p>
          <button onClick={() => deleteStudentHandler(student._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
