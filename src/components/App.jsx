import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "../pages/home/Home";
import Season from "../pages/season/Season";
import Pics from "../pages/pics/Pics";
import YoutubeClass from "../pages/youtube-class/YoutubeClass";
import Widgets from "../pages/widgets/Widgets";
import YoutubeHooks from "../pages/youtube-hooks/YoutubeHooks";
import Counter from "../pages/counter/Counter";
import Songs from "../pages/songs/Songs";
import Blog from "../pages/blog/Blog";
import Calligraphy from "../pages/calligraphy/Calligraphy";

import "../styles/main.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/season" element={<Season />} />
                <Route path="/pics" element={<Pics />} />
                <Route path="/youtube-class" element={<YoutubeClass />} />
                <Route path="/widgets" element={<Widgets />} />
                <Route path="/widgets/wiki" element={<Widgets />} />
                <Route path="/widgets/dropdown" element={<Widgets />} />
                <Route path="/widgets/translate" element={<Widgets />} />
                <Route path="/youtube-hooks" element={<YoutubeHooks />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/songs" element={<Songs />} />
                <Route path="/blog" element={<Blog />} />
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
