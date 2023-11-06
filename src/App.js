import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Root from "./Root";
import Results from "./Results";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Root} />
        <Route path="/results" Component={Results} />
      </Routes>
    </HashRouter>
  );
}

export default App;
