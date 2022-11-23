import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    }).catch(error => {
      setError(error)
    });
  }, []);
  if (error) return `Error: ${error.message}`;
  function updatePost(){
    axios.put(`${baseURL}`,{
      title: 'Hello User ! this is your post',
      body: 'To create and delete post easy using create and delete button !',
    })
    .then((response) => {
      setData(response.data)
    });
  }
  function deletePost(){
    axios.delete(`${baseURL}`)
      .then(() => {
        alert('post deleted !');
       setData('');
    });
  }
  return (
    <div className="App">
      <h1>Hello Users</h1>
      <p>{data.title}</p>
      <p>{data.body}</p>
      <button onClick={updatePost}>Cretate Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}
