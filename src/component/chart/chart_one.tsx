import React, { useState, createContext, useReducer, useEffect } from "react";
import { styled } from '@mui/material/styles';
import styles from './style.module.css';
// import { ResponsiveBump } from '@nivo/bump';
import { Grid } from "@mui/material";





function Chart_one() {
  const data = [
    {
      "id": "JavaScript",
      "data": [
        {
          "x": 2000,
          "y": 10
        },
        {
          "x": 2001,
          "y": 10
        },
        {
          "x": 2002,
          "y": 26
        },
        {
          "x": 2003,
          "y": 11
        },
        {
          "x": 2004,
          "y": 17
        },
        {
          "x": 2005,
          "y": 17
        }
      ]
    },
    {
      "id": "ReasonML",
      "data": [
        {
          "x": 2000,
          "y": 25
        },
        {
          "x": 2001,
          "y": 29
        },
        {
          "x": 2002,
          "y": 26
        },
        {
          "x": 2003,
          "y": 18
        },
        {
          "x": 2004,
          "y": 24
        },
        {
          "x": 2005,
          "y": 10
        }
      ]
    },
    {
      "id": "TypeScript",
      "data": [
        {
          "x": 2000,
          "y": 18
        },
        {
          "x": 2001,
          "y": 22
        },
        {
          "x": 2002,
          "y": 10
        },
        {
          "x": 2003,
          "y": 17
        },
        {
          "x": 2004,
          "y": 10
        },
        {
          "x": 2005,
          "y": 25
        }
      ]
    },
    {
      "id": "Elm",
      "data": [
        {
          "x": 2000,
          "y": 28
        },
        {
          "x": 2001,
          "y": 10
        },
        {
          "x": 2002,
          "y": 23
        },
        {
          "x": 2003,
          "y": 21
        },
        {
          "x": 2004,
          "y": 28
        },
        {
          "x": 2005,
          "y": 17
        }
      ]
    },
    {
      "id": "CoffeeScript",
      "data": [
        {
          "x": 2000,
          "y": 27
        },
        {
          "x": 2001,
          "y": 25
        },
        {
          "x": 2002,
          "y": 12
        },
        {
          "x": 2003,
          "y": 29
        },
        {
          "x": 2004,
          "y": 10
        },
        {
          "x": 2005,
          "y": 13
        }
      ]
    }
  ]

  return (
    <div className={styles.root}>
      <div className={styles.box_chart}>
        {/* <ResponsiveBump
          data={data}
          colors={{ scheme: 'spectral' }}
          lineWidth={3}
          activeLineWidth={6}
          inactiveLineWidth={3}
          inactiveOpacity={0.15}
          pointSize={10}
          activePointSize={16}
          inactivePointSize={0}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={3}
          activePointBorderWidth={3}
          pointBorderColor={{ from: 'serie.color' }}
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
          axisRight={null}
        /> */}
      </div>
    </div>
  );
}
export default Chart_one;