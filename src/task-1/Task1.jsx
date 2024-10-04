import { useState, useEffect } from "react";

/**
 * Build a Star Wars planet search!
 * You'll need to display a text field on the screen and fetch results as the user types.
 * There should not be a submit button, just searching automatically as the text changes.
 *
 * We'll start with a simple function that fetches data from the Star Wars API.
 * You have creative freedom to take it from there.
 *
 * You should focus on best practices for React data fetching and rendering.
 * Beyond that, you are encouraged to show off any experience you are proud of!
 * Love CSS? Make it beautiful!
 * Want to make a configurable search experience? Go for it!
 * It's totally up to you!
 */

/**
 * Fetches known planets from the Star Wars universe.
 * @param {number} fromPage Page to start at. Will fetch all following pages.
 * @returns {Promise<Array<{
 *   name: string;
 *   diameter: string;
 *   rotation_period: string;
 *   orbital_period: string;
 *   gravity: string;
 *   population: string;
 *   climate: string;
 *   terrain: string;
 *   surface_water: string;
 *   residents: Array<string>
 *   films: Array<string>
 *   url: string;
 *   created: string;
 *   edited: string
 * }>}>} Promise that resolves with an array of planets in the Star Wars universe.
 */

export default function Task1() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchStarWarsPlanets(fromPage = 1) {
    setIsLoading(true);
    const response = await fetch(
      `https://swapi.dev/api/planets?page=${fromPage}`
    );
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    setIsLoading(false);
    const data = await response.json();

    if (data.next) {
      const next = await fetchStarWarsPlanets(fromPage + 1);
      return [...data.results, ...next];
    } else {
      return data.results;
    }
  }

  useEffect(() => {
    setData(fetchStarWarsPlanets());
  }, []);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  function handlechange(e) {
    setSearch(
      data.filter((item) => item.name.toLowerCase().includes(e.target.value))
    );
  }
  return (
    <div className="App">
      <input type="text" onChange={handlechange} />
      {search.map((res, i) => (
        <div key={i}>
          {res.name ? <p>{res.name}</p> : <p>serached item is there</p>}
        </div>
      ))}
    </div>
  );
}
