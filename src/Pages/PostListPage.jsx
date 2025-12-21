import React from "react";
import { Link } from "react-router";

const PostListPage = () => {
  return (
    <div class="post-links">
      <Link to={"/posts/1"}>Post 1</Link>
      <Link to={"/posts/2"}>Post 2</Link>
      <Link to={"/posts/3"}>Post 3</Link>
      <Link to={"/posts/4"}>Post 4</Link>
      <Link to={"/posts/5"}>Post 5</Link>
      <Link to={"/posts/6"}>Post 6</Link>
      <Link to={"/posts/7"}>Post 7</Link>
      <Link to={"/posts/8"}>Post 8</Link>
      <Link to={"/posts/9"}>Post 9</Link>
      <Link to={"/posts/10"}>Post 10</Link>
      <Link to={"/posts/11"}>Post 11</Link>
    </div>
  );
};

export default PostListPage;
