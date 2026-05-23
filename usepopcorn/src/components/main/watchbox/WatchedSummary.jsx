export default function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((m) => m.imdbRating));
  const avgUserRating = average(watched.map((m) => m.userRating));
  const avgRuntime = average(watched.map((m) => m.runtime));
  return (
    <>
      <p>Watch Summary</p>
    </>
  );
}
