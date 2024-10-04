export async function getApi() {
  const data = await fetch("http://localhost:5000/users");
  const res = await data.json();
  return res;
}
export async function getSingleData(id) {
  const data = await fetch(`http://localhost:5000/users/${id}`);
  const res = await data.json();
  return res;
}
export async function postApi(formData) {
  const data = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const res = await data.json();
  return res;
}
export async function deleteApi(id) {
  const data = await fetch(`http://localhost:5000/users/${id}`, {
    method: "DELETE",
  });
  const res = await data.json();
  console.log(res);
  return res;
}
export async function putApi(id, putData) {
  const data = await fetch(`http://localhost:5000/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(putData),
  });
  const res = await data.json();
  return res;
}
