import '../style/index.scss';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;