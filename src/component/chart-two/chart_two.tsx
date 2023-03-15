import React, { useState, createContext, useReducer, useEffect } from "react";
import { styled } from '@mui/material/styles';
import styles from './style.module.css';
// import { ResponsiveBump } from '@nivo/bump';
import { Grid } from "@mui/material";
// import { ResponsiveBar } from '@nivo/bar';





function Chart_two() {
  const data = [
    {
      "country": "AD",
      "hot dog": 180,
      "hot dogColor": "hsl(182, 70%, 50%)",
      "burger": 172,
      "burgerColor": "hsl(179, 70%, 50%)",
      "sandwich": 184,
      "sandwichColor": "hsl(160, 70%, 50%)",
      "kebab": 46,
      "kebabColor": "hsl(140, 70%, 50%)",
      "fries": 95,
      "friesColor": "hsl(173, 70%, 50%)",
      "donut": 112,
      "donutColor": "hsl(162, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 80,
      "hot dogColor": "hsl(1, 70%, 50%)",
      "burger": 184,
      "burgerColor": "hsl(139, 70%, 50%)",
      "sandwich": 128,
      "sandwichColor": "hsl(56, 70%, 50%)",
      "kebab": 79,
      "kebabColor": "hsl(28, 70%, 50%)",
      "fries": 85,
      "friesColor": "hsl(65, 70%, 50%)",
      "donut": 64,
      "donutColor": "hsl(162, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 126,
      "hot dogColor": "hsl(61, 70%, 50%)",
      "burger": 88,
      "burgerColor": "hsl(281, 70%, 50%)",
      "sandwich": 33,
      "sandwichColor": "hsl(86, 70%, 50%)",
      "kebab": 38,
      "kebabColor": "hsl(22, 70%, 50%)",
      "fries": 191,
      "friesColor": "hsl(157, 70%, 50%)",
      "donut": 106,
      "donutColor": "hsl(87, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 199,
      "hot dogColor": "hsl(245, 70%, 50%)",
      "burger": 147,
      "burgerColor": "hsl(51, 70%, 50%)",
      "sandwich": 195,
      "sandwichColor": "hsl(345, 70%, 50%)",
      "kebab": 181,
      "kebabColor": "hsl(173, 70%, 50%)",
      "fries": 13,
      "friesColor": "hsl(306, 70%, 50%)",
      "donut": 39,
      "donutColor": "hsl(318, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 137,
      "hot dogColor": "hsl(289, 70%, 50%)",
      "burger": 73,
      "burgerColor": "hsl(137, 70%, 50%)",
      "sandwich": 110,
      "sandwichColor": "hsl(287, 70%, 50%)",
      "kebab": 18,
      "kebabColor": "hsl(304, 70%, 50%)",
      "fries": 2,
      "friesColor": "hsl(188, 70%, 50%)",
      "donut": 28,
      "donutColor": "hsl(344, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 175,
      "hot dogColor": "hsl(137, 70%, 50%)",
      "burger": 24,
      "burgerColor": "hsl(360, 70%, 50%)",
      "sandwich": 123,
      "sandwichColor": "hsl(2, 70%, 50%)",
      "kebab": 43,
      "kebabColor": "hsl(64, 70%, 50%)",
      "fries": 155,
      "friesColor": "hsl(324, 70%, 50%)",
      "donut": 167,
      "donutColor": "hsl(237, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 23,
      "hot dogColor": "hsl(200, 70%, 50%)",
      "burger": 133,
      "burgerColor": "hsl(146, 70%, 50%)",
      "sandwich": 22,
      "sandwichColor": "hsl(325, 70%, 50%)",
      "kebab": 55,
      "kebabColor": "hsl(2, 70%, 50%)",
      "fries": 160,
      "friesColor": "hsl(75, 70%, 50%)",
      "donut": 135,
      "donutColor": "hsl(354, 70%, 50%)"
    }
  ]

  return (
    <div className={styles.root}>
     
    </div>
  );
}
export default Chart_two;