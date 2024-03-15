import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Post = () => {
  const post = useLoaderData();
  return <div>{post.title}</div>;
};

const loader = ({ request: { signal } }) => {
  return axios
    .get(`http://localhost:3000/${postId}`, { signal })
    .then((res) => res.data);
};

export const postRoute = {
  loader,
  element: <Post />,
};
