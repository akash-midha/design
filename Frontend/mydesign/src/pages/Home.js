import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Stack } from "@mui/material";
import AbcIcon from '@mui/icons-material/Abc';

function Home() {
  return (
    <div className="wrapper">
      <div className="p-s rectangle-copy-5">
        <div className="header">
          <div className="products">Products</div>
          <div className="icons"></div>
        </div>
        <div className="tabs">
          <div className="p-sview-icons-mobile-selected">
            <AbcIcon />
          </div>
          <div className="p-sview-icons-mobile-selected"></div>
          <div className="p-sview-icons-mobile-selected"></div>
          <div className="p-sview-icons-mobile-selected"></div>
        </div>
        <div className="rectangle"></div>

        <select className="subscription-dropdown">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
          <option value="grape">Grape</option>
          <option value="orange">Orange</option>
        </select>
      </div>
    </div>
  );
}

export default Home;
