import React from "react";
import UserListPage from "./Components/UserListPage";
import { Routes, Route } from "react-router";
import UserDetailPage from "./Components/UserDetailPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<h1>ລາຍການຊື່</h1>} />
      <Route path="/userlistpage" element={<UserListPage />} />
      <Route path="/userdetailpage" element={<UserDetailPage />} />
    </Routes>
  );
};

export default App;
