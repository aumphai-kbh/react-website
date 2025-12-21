import React from "react";

import { Routes, Route } from "react-router";

import MainLayout from "./Pages/MainLayout";
// Windows
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import NotFound from "./Pages/NotFound";
import PostListPage from "./Pages/PostListPage";
import PostDetailPage from "./Pages/PostDetailPage";

const App = () => {
  // Logic Parts
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Export parts
export default App;
