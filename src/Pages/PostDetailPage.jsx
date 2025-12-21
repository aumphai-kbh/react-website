import React from "react";

import { useParams } from "react-router";

const PostDetailPage = () => {
  const { postId } = useParams();

  return <div>PostDetailPage {postId}</div>;
};

export default PostDetailPage;
