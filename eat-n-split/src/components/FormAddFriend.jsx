export default function FormAddFriend() {
  return (
    <>
      <form className="form-add-friend">
        <label>Friend Name</label>
        <input type="text" placeholder="Friend name" />
        <label> Image Url</label>
        <input type="text" />
        <button>Add</button>
      </form>
    </>
  );
}
