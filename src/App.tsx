import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Header />
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
