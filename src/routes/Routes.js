import '../style/index.scss';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from '../pages/login/Login';
import Profil from '../pages/Profil/Profil';
import PrivateRoute from './PrivateRoutes';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profil />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;