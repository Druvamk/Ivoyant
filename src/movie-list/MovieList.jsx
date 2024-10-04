import { useEffect } from "react";
import { useState } from "react";

function MovieList() {
  const movies = [
    { title: "abhi", genre: "Action", releaseYear: 2020 },
    { title: "appu", genre: "Comedy", releaseYear: 2019 },
    { title: "mourya", genre: "Comedy", releaseYear: 2019 },
    { title: "ram", genre: "thriller", releaseYear: 2021 },
    { title: "milana", genre: "Action", releaseYear: 2001 },
    { title: "nagaraja", genre: "Comedy", releaseYear: 2001 },
    { title: "prakka", genre: "Action", releaseYear: 2001 },
    { title: "dasa", genre: "Action", releaseYear: 2001 },
  ];
  const [filterGenre, setFilterGenre] = useState("");
  function handleChangeGenre(e) {
    console.log(e.target.value);
    setFilterGenre(e.target.value);
  }
  const filterGenere1 = movies.filter(
    (movie) => movie.genre === filterGenre && movie
  );
  console.log(filterGenere1);
  // const sortingByReleasingYear = movies.sort(
  //   (a, b) => b.releaseYear - a.releaseYear
  // );
  const fullySorted = filterGenere1.sort(
    (a, b) => a.releaseYear - b.releaseYear
  );
  return (
    <div>
      <select onChange={handleChangeGenre}>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="thriller">thriller</option>
      </select>
      <div>
        {fullySorted.map((m, i) => (
          <p key={i}>
            {m.genre} |{m.title} | {m.releaseYear}
          </p>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
