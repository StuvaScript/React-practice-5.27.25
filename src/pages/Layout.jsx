import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
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
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

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

      <Outlet />
    </>
  );
}
