import { useEffect, useState } from "react";

function Shopping() {
  const [shopSearch, setShopSearch] = useState([]);
  const [search, setSearch] = useState([]);
  async function fetchData() {
    const data = await fetch("https://fakestoreapi.com/products");
    const res = await data.json();
    setSearch(res);
    setShopSearch(res);
  }
  console.log(shopSearch, search);
  function handleSearch(e) {
    console.log(e.target.value);
    setShopSearch(
      shopSearch.filter((data) =>
        data.title.toLowerCase().includes(e.target.value)
      )
    );
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Shoping List</h1>
      <div>
        <input type="text" name="" id="" onChange={handleSearch} />
      </div>
      <div>
        {shopSearch.map((data, i) => (
          <div>{data.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Shopping;
