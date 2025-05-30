import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const sortOptionsArray = [
  { option: "name-ascending", id: 1 },
  { option: "name-descending", id: 2 },
  { option: "price", id: 3 },
  { option: "year", id: 4 },
];

const guitars = [
  { name: "Ibanez", id: 1, price: 800, year: 1980 },
  { name: "Taylor", id: 2, price: 2500, year: 2005 },
  { name: "Gibson", id: 3, price: 1200, year: 1963 },
  { name: "Strandberg", id: 4, price: 3000, year: 2016 },
];

const sortDictionary = {
  "name-ascending": (a, b) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1,
  "name-descending": (a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1,
  price: (a, b) => a.price - b.price,
  year: (a, b) => a.year - b.year,
};

const sorting = (sortOption) => {
  const newGuitarArray = [...guitars];
  const sortingAlgorithm = sortDictionary[sortOption];

  return newGuitarArray.sort(sortingAlgorithm);
};

export default function Challenges() {
  const { activeUser } = useOutletContext();
  const [sortOption, setSortOption] = useState("name-ascending");

  const handleChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedGuitars = sorting(sortOption);

  return (
    <>
      <h1>{`Challenges for ${activeUser}`}</h1>
      <br />
      <label htmlFor="guitars">Sort your favorite guitars: </label>
      <select
        name="guitars"
        id="guitars"
        value={sortOption}
        onChange={handleChange}
      >
        {sortOptionsArray.map((sortOptions) => (
          <option key={sortOptions.id} value={sortOptions.option}>
            {sortOptions.option}
          </option>
        ))}
      </select>
      <br />
      <br />
      <ul>
        {sortedGuitars.map((guitar) => (
          <li key={guitar.id} value={guitar.name}>
            {`${guitar.name} | $${guitar.price} | ${guitar.year}`}
          </li>
        ))}
      </ul>
    </>
  );
}
