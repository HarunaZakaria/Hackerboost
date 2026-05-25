export default function Movie({ movie }) {
  const { title, year, poster } = movie;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}
