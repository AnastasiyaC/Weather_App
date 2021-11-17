import React from 'react';
import './App.scss';
import Header from "./components/common/header/Header";
import Main from "./components/main/Main";
import BackgroundRandomImage from "./components/common/backgroundRandomImage/BackgroundRandomImage";
import Buttons from "./components/buttons/Buttons";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="app">
        <BackgroundRandomImage/>
        <div className="app__wrapper">
            <Header>
                <Buttons/>
                <Search/>
            </Header>
            <Main/>
        </div>
    </div>
  )
}

export default App;
