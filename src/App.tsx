import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateUser />} />
      </Routes>
    </Router>
  );
};

export default App;
