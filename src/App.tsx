import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import Users from "./pages/Users";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
