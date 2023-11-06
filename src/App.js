import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Root from "./screen/Root";
import Results from "./screen/Results";

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
