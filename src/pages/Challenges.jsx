import { useState } from "react";

const guitars = [
  { name: "Ibanez", id: 1 },
  { name: "Taylor", id: 2 },
  { name: "Gibson", id: 3 },
  { name: "Strandberg", id: 4 },
];

export default function Challenges() {
  const [guitar, setGuitar] = useState("Gibson");

  const handleChange = (e) => {
    setGuitar(e.target.value);
  };

  return (
    <>
      <h1>Challenges</h1>
      <br />
      <form>
        <label htmlFor="guitars">Pick your favorite guitar: </label>
        <select
          name="guitars"
          id="guitars"
          value={guitar}
          onChange={handleChange}
        >
          {guitars.map((guitar) => (
            <option key={guitar.id} value={guitar.name}>
              {guitar.name}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}
