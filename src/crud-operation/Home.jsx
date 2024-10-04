import { useState } from "react";
import Form from "./Form";
import { useDeleteApiMutation, useGetApiQuery } from "./apiSlice";

function Home() {
  // const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getApi();
  //     setData(data);
  //   }
  //   fetchData();
  // }, []);
  const { data, isLoading } = useGetApiQuery();
  const [deleteApi] = useDeleteApiMutation();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  function handleAdd() {
    setShow(true);
  }
  function handleDelete(id) {
    console.log(id);
    deleteApi(id);
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div>
            Name : {item.name} | UserName: {item.username}
            <button onClick={handleAdd}>Add</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
          <div>Email: {item.email}</div>
        </div>
      ))}
      <div>{show && <Form />}</div>
      <div></div>
    </div>
  );
}

export default Home;
