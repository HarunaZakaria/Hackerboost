export default function Form() {
  return (
    <div>
      <form className="form">
        <div>
          <label>
            Firs Name :
            <input type="text" placeholder="Enter First Name" />
          </label>
        </div>
        <div>
          <label>
            Last Name :
            <input type="text" placeholder="Enter Last Name" />
          </label>
        </div>
        <div>
          <label>
            Email :
            <input type="email" placeholder="Enter Email" />
          </label>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
