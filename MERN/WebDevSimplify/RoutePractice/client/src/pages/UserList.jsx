import React from "react";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import { getUsers } from "../api/users";

const UserList = () => {
  const users = useLoaderData();

  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <div className="card-header">{user.name}</div>
            <div className="card-body">
              <div>{user.company.name}</div>
              <div>{user.website}</div>
              <div>{user.email}</div>
            </div>
            <div className="card-footer">
              <Link className="btn" to={`user/${user.id}`}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const loader = ({ request: { signal } }) => {
    return axios
      .get("http://localhost:3000/users", { signal })
      .then((res) => res.data);

//   return getUsers({ signal });
};

export const userListRoute = {
  loader,
  element: <UserList />,
};
