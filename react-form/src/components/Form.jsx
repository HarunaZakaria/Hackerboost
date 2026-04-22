import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  //handle first name change function
  function handleFirstNameChange(event) {
    setPerson({
      ...person,
      firstName: event.target.value,
    });
  }
  //handle last name change function
  function handleLastNameChange(event) {
    setPerson({
      ...person,
      lastName: event.target.value,
    });
  }
  //handle email change function
  function handleEmailChange(event) {
    setPerson({
      ...person,
      email: event.target.value,
    });
  }
  return (
    <div>
      <form className="form">
        <div>
          <label>
            Firs Name :
            <input
              type="text"
              placeholder="Enter First Name"
              value={person.firstName}
              onChange={handleFirstNameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name :
            <input
              type="text"
              placeholder="Enter Last Name"
              value={person.lastName}
              onChange={handleLastNameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email :
            <input
              type="email"
              placeholder="Enter Email"
              value={person.email}
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <div>
        <p>
          {person.firstName} {person.lastName}
        </p>
        <p>{person.email}</p>
      </div>
    </div>
  );
}
