import { useState } from "react";

export default function Quote() {
  // async function getQuoteFromAPI() {
  //   const res = await fetch("https://zenquotes.io/api/random");
  //   const data = await res.json();
  // }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  //handle first name input
  function handleFirstNameInput(e) {
    setFirstName(e.target.value);
  }
  //handle last name input
  function handleLastNameInput(e) {
    setLastName(e.target.value);
  }

  return (
    <div>
      <form>
        <h1>Welcome TO Fun Form</h1>
        <div>
          <div>
            <label>
              FirstName:
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameInput}
              />
            </label>
          </div>
          <div>
            <label>
              LastName:
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameInput}
              />
            </label>
          </div>

          <div>
            <h2>{fullName}</h2>
          </div>
        </div>
      </form>
    </div>
  );
}
