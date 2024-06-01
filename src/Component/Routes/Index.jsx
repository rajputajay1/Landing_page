import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pay from '../Pay/pay';
import Card from '../Crad/Card';
import Header from '../Header/Header';

const Index = () => {
  return (
    <>
      <Router>

        <Header></Header>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/payment" element={<Pay />} />


        </Routes>
      </Router>
    </>
  )
}

export default Index