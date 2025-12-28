import React from "react";

import { Routes, Route } from "react-router";

import MainLayout from "./Pages/MainLayout";
// Windows
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import NotFound from "./Pages/NotFound";
import PostListPage from "./Pages/PostListPage";
import PostDetailPage from "./Pages/PostDetailPage";
import UserListPage from "./Pages/UserListPage";
import UserDetailPage from "./Pages/UserDetailPage";
import PostNewPage from "./Pages/PostNewPage";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  // Logic Parts
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
        <Route path="/posts/new" element={<PostNewPage />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/users/:userId" element={<UserDetailPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Export parts
export default App;
