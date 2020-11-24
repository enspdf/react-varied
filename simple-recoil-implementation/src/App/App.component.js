import React from "react";
import { useRecoilValue } from "recoil";
import Header from "../Header/Header.component";
import MainContent from "../MainContent/MainContent.component";
import { darkModeState } from "../shared/globalState";
import "./App.style.scss";

const App = () => {
  const isDarkModeEnabled = useRecoilValue(darkModeState);

  return (
    <div className={`App ${isDarkModeEnabled ? "App--dark-mode" : ""}`}>
      <Header />
      <MainContent />
    </div>
  );
};

export default App;
