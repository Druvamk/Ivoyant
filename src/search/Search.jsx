import { useEffect, useState } from "react";

function Search() {
  const [posts, setPosts] = useState([]);
  const [filte, setFilte] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const res = await data.json();
      setPosts(res);
      setFilte(res);
    }
    fetchData();
  }, []);
  function handleChange(e) {
    setFilte(
      posts.filter((items) => items.name.toLowerCase().includes(e.target.value))
    );
  }
  return (
    <div>
      <input type="text" onChange={handleChange} />
      {filte.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;
