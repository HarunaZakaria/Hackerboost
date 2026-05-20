export default function Button({ children, onHandleClick }) {
  return (
    <>
      <button onClick={onHandleClick}>{children}</button>
    </>
  );
}
