import React from "react";
import { Routes, Route } from "react-router-dom";

import Todo from "./pages/Todo";
import Creators from "./pages/Creators";
import PageNotFound from "./pages/404";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Todo/>} />
      <Route path="/creators" element={<Creators/>} />
      <Route path="/creators/:idCreator" element={<Creators/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}
