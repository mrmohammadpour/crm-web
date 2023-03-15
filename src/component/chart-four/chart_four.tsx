import React, { useState, createContext, useReducer, useEffect } from "react";
import { styled } from '@mui/material/styles';
import styles from './style.module.css';
// import { ResponsiveSunburst } from  '@nivo/sunburst';                





function Chart_four() {
  const data = {
    "name": "nivo",
    "color": "hsl(222, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(60, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(342, 70%, 50%)",
            "children": [
              {
                "name": "cchart",
                "color": "hsl(215, 70%, 50%)",
                "loc": 141805
              },
              {
                "name": "xAxis",
                "color": "hsl(30, 70%, 50%)",
                "loc": 144165
              },
              {
                "name": "yAxis",
                "color": "hsl(25, 70%, 50%)",
                "loc": 143289
              },
              {
                "name": "layers",
                "color": "hsl(143, 70%, 50%)",
                "loc": 115206
              }
            ]
          },
          {
            "name": "ppie",
            "color": "hsl(281, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(280, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(81, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(21, 70%, 50%)",
                        "loc": 178895
                      },
                      {
                        "name": "slices",
                        "color": "hsl(20, 70%, 50%)",
                        "loc": 134198
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(150, 70%, 50%)",
                        "loc": 14570
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(147, 70%, 50%)",
                    "loc": 194703
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(248, 70%, 50%)",
                    "loc": 22486
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(267, 70%, 50%)",
                "loc": 170370
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(20, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(74, 70%, 50%)",
            "loc": 95210
          },
          {
            "name": "hsl",
            "color": "hsl(258, 70%, 50%)",
            "loc": 58609
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(277, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(306, 70%, 50%)",
            "loc": 156928
          },
          {
            "name": "resetClock",
            "color": "hsl(232, 70%, 50%)",
            "loc": 126920
          },
          {
            "name": "noop",
            "color": "hsl(101, 70%, 50%)",
            "loc": 6311
          },
          {
            "name": "tick",
            "color": "hsl(170, 70%, 50%)",
            "loc": 92098
          },
          {
            "name": "forceGC",
            "color": "hsl(54, 70%, 50%)",
            "loc": 136903
          },
          {
            "name": "stackTrace",
            "color": "hsl(277, 70%, 50%)",
            "loc": 106167
          },
          {
            "name": "dbg",
            "color": "hsl(6, 70%, 50%)",
            "loc": 125698
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(172, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(19, 70%, 50%)",
            "loc": 6712
          },
          {
            "name": "city",
            "color": "hsl(199, 70%, 50%)",
            "loc": 181405
          },
          {
            "name": "animal",
            "color": "hsl(45, 70%, 50%)",
            "loc": 159217
          },
          {
            "name": "movie",
            "color": "hsl(95, 70%, 50%)",
            "loc": 138423
          },
          {
            "name": "user",
            "color": "hsl(307, 70%, 50%)",
            "loc": 73611
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(100, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(274, 70%, 50%)",
            "loc": 98387
          },
          {
            "name": "intersect",
            "color": "hsl(47, 70%, 50%)",
            "loc": 28994
          },
          {
            "name": "merge",
            "color": "hsl(265, 70%, 50%)",
            "loc": 187423
          },
          {
            "name": "reverse",
            "color": "hsl(270, 70%, 50%)",
            "loc": 152313
          },
          {
            "name": "toArray",
            "color": "hsl(344, 70%, 50%)",
            "loc": 119775
          },
          {
            "name": "toObject",
            "color": "hsl(205, 70%, 50%)",
            "loc": 61701
          },
          {
            "name": "fromCSV",
            "color": "hsl(341, 70%, 50%)",
            "loc": 108829
          },
          {
            "name": "slice",
            "color": "hsl(330, 70%, 50%)",
            "loc": 121954
          },
          {
            "name": "append",
            "color": "hsl(89, 70%, 50%)",
            "loc": 7728
          },
          {
            "name": "prepend",
            "color": "hsl(52, 70%, 50%)",
            "loc": 22019
          },
          {
            "name": "shuffle",
            "color": "hsl(28, 70%, 50%)",
            "loc": 126025
          },
          {
            "name": "pick",
            "color": "hsl(137, 70%, 50%)",
            "loc": 36019
          },
          {
            "name": "plouc",
            "color": "hsl(331, 70%, 50%)",
            "loc": 143718
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(278, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(139, 70%, 50%)",
            "loc": 42959
          },
          {
            "name": "slugify",
            "color": "hsl(247, 70%, 50%)",
            "loc": 196172
          },
          {
            "name": "snakeCase",
            "color": "hsl(9, 70%, 50%)",
            "loc": 77779
          },
          {
            "name": "camelCase",
            "color": "hsl(355, 70%, 50%)",
            "loc": 20051
          },
          {
            "name": "repeat",
            "color": "hsl(78, 70%, 50%)",
            "loc": 162858
          },
          {
            "name": "padLeft",
            "color": "hsl(272, 70%, 50%)",
            "loc": 42277
          },
          {
            "name": "padRight",
            "color": "hsl(182, 70%, 50%)",
            "loc": 8244
          },
          {
            "name": "sanitize",
            "color": "hsl(49, 70%, 50%)",
            "loc": 176606
          },
          {
            "name": "ploucify",
            "color": "hsl(123, 70%, 50%)",
            "loc": 160028
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(43, 70%, 50%)",
        "children": [
          {
            "name": "greetings",
            "color": "hsl(297, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(161, 70%, 50%)",
                "loc": 83093
              },
              {
                "name": "HOWDY",
                "color": "hsl(316, 70%, 50%)",
                "loc": 81096
              },
              {
                "name": "aloha",
                "color": "hsl(90, 70%, 50%)",
                "loc": 157838
              },
              {
                "name": "AHOY",
                "color": "hsl(77, 70%, 50%)",
                "loc": 95669
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(171, 70%, 50%)",
            "loc": 38826
          },
          {
            "name": "path",
            "color": "hsl(263, 70%, 50%)",
            "children": [
              {
                "name": "pathA",
                "color": "hsl(298, 70%, 50%)",
                "loc": 27891
              },
              {
                "name": "pathB",
                "color": "hsl(85, 70%, 50%)",
                "children": [
                  {
                    "name": "pathB1",
                    "color": "hsl(348, 70%, 50%)",
                    "loc": 142193
                  },
                  {
                    "name": "pathB2",
                    "color": "hsl(259, 70%, 50%)",
                    "loc": 169411
                  },
                  {
                    "name": "pathB3",
                    "color": "hsl(289, 70%, 50%)",
                    "loc": 194044
                  },
                  {
                    "name": "pathB4",
                    "color": "hsl(57, 70%, 50%)",
                    "loc": 118860
                  }
                ]
              },
              {
                "name": "pathC",
                "color": "hsl(152, 70%, 50%)",
                "children": [
                  {
                    "name": "pathC1",
                    "color": "hsl(21, 70%, 50%)",
                    "loc": 192968
                  },
                  {
                    "name": "pathC2",
                    "color": "hsl(84, 70%, 50%)",
                    "loc": 45379
                  },
                  {
                    "name": "pathC3",
                    "color": "hsl(196, 70%, 50%)",
                    "loc": 153342
                  },
                  {
                    "name": "pathC4",
                    "color": "hsl(143, 70%, 50%)",
                    "loc": 190083
                  },
                  {
                    "name": "pathC5",
                    "color": "hsl(333, 70%, 50%)",
                    "loc": 197160
                  },
                  {
                    "name": "pathC6",
                    "color": "hsl(342, 70%, 50%)",
                    "loc": 152109
                  },
                  {
                    "name": "pathC7",
                    "color": "hsl(272, 70%, 50%)",
                    "loc": 4617
                  },
                  {
                    "name": "pathC8",
                    "color": "hsl(351, 70%, 50%)",
                    "loc": 161050
                  },
                  {
                    "name": "pathC9",
                    "color": "hsl(132, 70%, 50%)",
                    "loc": 106973
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  return (
    <div className={styles.root}>
      <div className={styles.box_chart}>
      {/* <ResponsiveSunburst
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="loc"
        cornerRadius={2}
        borderColor={{ theme: 'background' }}
        colors={{ scheme: 'nivo' }}
        childColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    0.1
                ]
            ]
        }}
        enableArcLabels={true}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.4
                ]
            ]
        }}
    /> */}

      </div>
    </div>
  );
}
export default Chart_four;