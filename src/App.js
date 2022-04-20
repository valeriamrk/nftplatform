import "./App.css";
import {
  Collections,
  TopNftPage,
  ResourcesPage,
  CreatePage,
  OpenCard,
} from "./components/presentational";
import { MainPage, Hero } from "./components/presentational";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { useDispatch, useSelector } from "react-redux";
import { defaultThemeToggler } from "./store/allDataSlice";

function App() {
  // const [theme, setTheme] = useState("light")

  const defaultTheme = useSelector(
    (state) => state.allData.defaultTheme
  );

  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };
  const dispatch = useDispatch();
  const themeToggler = () => {
    dispatch(defaultThemeToggler())
  };

  return (
    <ThemeProvider theme={defaultTheme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage themeToggler={themeToggler}/>}>
          <Route index element={<Hero />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/stats" element={<TopNftPage />} />
          <Route path="/create" element={<CreatePage/>} />
          <Route path="/resources" element={<ResourcesPage/>} />
          <Route path="/opencard/:id" element={<OpenCard/>} />
        </Route>
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
