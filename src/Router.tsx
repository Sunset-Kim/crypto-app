import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home"
import Coin from './routes/Coin';
import Chart from './routes/Chart';
import Price from './routes/Price';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinID" element={<Coin />}>
          <Route path="Chart" element={<Chart />} />
          <Route path="Price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
