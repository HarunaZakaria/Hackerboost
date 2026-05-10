export default function Output({ bill, tip }) {
  return (
    <>
      <h3>
        You pay Ghc{bill + tip} (Ghc{bill} Ghc{tip} tip)
      </h3>
    </>
  );
}
