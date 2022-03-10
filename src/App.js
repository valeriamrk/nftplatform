import "./App.css";
import {
  Collections,
  TopNftPage,
  Logo,
  PageBasicLayout,
  CreatePage,
} from "./components/presentational";
import { MainPage, Hero } from "./components/presentational";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Hero />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/stats" element={<TopNftPage />} />
          <Route path="/create" element={<CreatePage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
