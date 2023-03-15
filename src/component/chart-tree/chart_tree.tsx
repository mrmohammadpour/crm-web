import React, { useState, createContext, useReducer, useEffect } from "react";
import { styled } from '@mui/material/styles';
import styles from './style.module.css';
// import { ResponsiveBump } from '@nivo/bump';
import { Grid } from "@mui/material";
// import { ResponsiveBar } from '@nivo/bar';

// import { ResponsiveLine } from '@nivo/line';




function Chart_tree() {
  const data = [
    {
      "id": "japan",
      "color": "hsl(4, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 227
        },
        {
          "x": "helicopter",
          "y": 231
        },
        {
          "x": "boat",
          "y": 71
        },
        {
          "x": "train",
          "y": 7
        },
        {
          "x": "subway",
          "y": 64
        },
        {
          "x": "bus",
          "y": 97
        },
        {
          "x": "car",
          "y": 17
        },
        {
          "x": "moto",
          "y": 272
        },
        {
          "x": "bicycle",
          "y": 35
        },
        {
          "x": "horse",
          "y": 272
        },
        {
          "x": "skateboard",
          "y": 176
        },
        {
          "x": "others",
          "y": 51
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(60, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 5
        },
        {
          "x": "helicopter",
          "y": 46
        },
        {
          "x": "boat",
          "y": 238
        },
        {
          "x": "train",
          "y": 232
        },
        {
          "x": "subway",
          "y": 75
        },
        {
          "x": "bus",
          "y": 275
        },
        {
          "x": "car",
          "y": 187
        },
        {
          "x": "moto",
          "y": 203
        },
        {
          "x": "bicycle",
          "y": 196
        },
        {
          "x": "horse",
          "y": 187
        },
        {
          "x": "skateboard",
          "y": 112
        },
        {
          "x": "others",
          "y": 114
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(307, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 279
        },
        {
          "x": "helicopter",
          "y": 41
        },
        {
          "x": "boat",
          "y": 57
        },
        {
          "x": "train",
          "y": 155
        },
        {
          "x": "subway",
          "y": 137
        },
        {
          "x": "bus",
          "y": 221
        },
        {
          "x": "car",
          "y": 40
        },
        {
          "x": "moto",
          "y": 227
        },
        {
          "x": "bicycle",
          "y": 7
        },
        {
          "x": "horse",
          "y": 300
        },
        {
          "x": "skateboard",
          "y": 217
        },
        {
          "x": "others",
          "y": 4
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(216, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 67
        },
        {
          "x": "helicopter",
          "y": 146
        },
        {
          "x": "boat",
          "y": 37
        },
        {
          "x": "train",
          "y": 250
        },
        {
          "x": "subway",
          "y": 146
        },
        {
          "x": "bus",
          "y": 293
        },
        {
          "x": "car",
          "y": 93
        },
        {
          "x": "moto",
          "y": 195
        },
        {
          "x": "bicycle",
          "y": 230
        },
        {
          "x": "horse",
          "y": 207
        },
        {
          "x": "skateboard",
          "y": 28
        },
        {
          "x": "others",
          "y": 217
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(19, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 204
        },
        {
          "x": "helicopter",
          "y": 120
        },
        {
          "x": "boat",
          "y": 52
        },
        {
          "x": "train",
          "y": 11
        },
        {
          "x": "subway",
          "y": 293
        },
        {
          "x": "bus",
          "y": 19
        },
        {
          "x": "car",
          "y": 51
        },
        {
          "x": "moto",
          "y": 213
        },
        {
          "x": "bicycle",
          "y": 160
        },
        {
          "x": "horse",
          "y": 292
        },
        {
          "x": "skateboard",
          "y": 92
        },
        {
          "x": "others",
          "y": 294
        }
      ]
    }
  ]
  return (
    <div className={styles.root}>
      <div className={styles.box_chart}>
        {/* <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        /> */}

      </div>
    </div>
  );
}
export default Chart_tree;