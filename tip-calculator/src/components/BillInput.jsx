export default function BillInput({ bill, onSetBill }) {
  return (
    <>
      <label htmlFor="bill">How much was the bill</label>
      <input
        type="text"
        placeholder="Your bill"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </>
  );
}
