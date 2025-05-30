import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/", id: 1 },
  { name: "Blogs", path: "/blogs", id: 2 },
  { name: "Contact", path: "/contact", id: 3 },
  { name: "Challenges", path: "/challenges", id: 4 },
];

export default function Header({ activeUser }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(inputs));
  };
  return (
    <>
      <h1>{`Howdy ${activeUser}`}</h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your name:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="age">Enter your age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
