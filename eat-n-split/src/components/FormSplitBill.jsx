export default function FormSplitBill() {
  return (
    <>
      <form className="form-split-bill">
        <h2>Split the bill with X</h2>
        <label>Bill value</label>
        <input type="text" />

        <label>Your expense</label>
        <input type="text" />

        <label>X expense</label>
        <input type="text" disabled />

        <label>Who is paying the bill</label>
        <select>
          <option value="user">You</option>
          <option value="friend">X</option>
        </select>

        <button>Split bill</button>
      </form>
    </>
  );
}
