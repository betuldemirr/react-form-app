import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import Users from "./pages/Users";
import '@ant-design/v5-patch-for-react-19';
import Docs from "./pages/Docs";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/users" element={<Users />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  );
};

export default App;
