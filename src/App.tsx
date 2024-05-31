import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";
import Serials from "./pages/Serials/Serials";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Footer from "./components/Footer /Footer";
import styles from './App.module.css'

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header setQuery={setQuery} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films query={query} />} />
          <Route path="/series" element={<Serials />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
