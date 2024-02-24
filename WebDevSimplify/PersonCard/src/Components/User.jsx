import React, { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res.statusText);
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        if (err?.name === "AbortError") return;
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>User List:</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error != null ? (
        <h2 style={{ color: "red" }}>Error!</h2>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default User;
