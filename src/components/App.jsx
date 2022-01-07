import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Season from "../pages/season/Season";
import Pics from "../pages/pics/Pics";
import YoutubeClass from "../pages/youtube-class/YoutubeClass";
import Counter from "../pages/counter/Counter";
import Songs from "../pages/songs/Songs";
import Calligraphy from "../pages/calligraphy/Calligraphy";

import "../styles/main.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/season" element={<Season />} />
                <Route path="/pics" element={<Pics />} />
                <Route path="/youtube-class" element={<YoutubeClass />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/songs" element={<Songs />} />
                <Route path="/calligraphy" element={<Calligraphy />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
