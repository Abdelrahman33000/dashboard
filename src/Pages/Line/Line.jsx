import { Box } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'

const Line = () => {
    const data =[
        {
          "id": "japan",
          "color": "hsl(112, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 26
            },
            {
              "x": "helicopter",
              "y": 224
            },
            {
              "x": "boat",
              "y": 79
            },
            {
              "x": "train",
              "y": 214
            },
            {
              "x": "subway",
              "y": 16
            },
            {
              "x": "bus",
              "y": 116
            },
            {
              "x": "car",
              "y": 117
            },
            {
              "x": "moto",
              "y": 294
            },
            {
              "x": "bicycle",
              "y": 147
            },
            {
              "x": "horse",
              "y": 84
            },
            {
              "x": "skateboard",
              "y": 161
            },
            {
              "x": "others",
              "y": 198
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(359, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 290
            },
            {
              "x": "helicopter",
              "y": 54
            },
            {
              "x": "boat",
              "y": 195
            },
            {
              "x": "train",
              "y": 112
            },
            {
              "x": "subway",
              "y": 298
            },
            {
              "x": "bus",
              "y": 227
            },
            {
              "x": "car",
              "y": 122
            },
            {
              "x": "moto",
              "y": 59
            },
            {
              "x": "bicycle",
              "y": 296
            },
            {
              "x": "horse",
              "y": 56
            },
            {
              "x": "skateboard",
              "y": 142
            },
            {
              "x": "others",
              "y": 212
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(312, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 29
            },
            {
              "x": "helicopter",
              "y": 19
            },
            {
              "x": "boat",
              "y": 92
            },
            {
              "x": "train",
              "y": 173
            },
            {
              "x": "subway",
              "y": 55
            },
            {
              "x": "bus",
              "y": 273
            },
            {
              "x": "car",
              "y": 7
            },
            {
              "x": "moto",
              "y": 114
            },
            {
              "x": "bicycle",
              "y": 12
            },
            {
              "x": "horse",
              "y": 45
            },
            {
              "x": "skateboard",
              "y": 173
            },
            {
              "x": "others",
              "y": 166
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(33, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 287
            },
            {
              "x": "helicopter",
              "y": 61
            },
            {
              "x": "boat",
              "y": 64
            },
            {
              "x": "train",
              "y": 257
            },
            {
              "x": "subway",
              "y": 96
            },
            {
              "x": "bus",
              "y": 110
            },
            {
              "x": "car",
              "y": 290
            },
            {
              "x": "moto",
              "y": 272
            },
            {
              "x": "bicycle",
              "y": 227
            },
            {
              "x": "horse",
              "y": 236
            },
            {
              "x": "skateboard",
              "y": 197
            },
            {
              "x": "others",
              "y": 108
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(313, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 125
            },
            {
              "x": "helicopter",
              "y": 268
            },
            {
              "x": "boat",
              "y": 15
            },
            {
              "x": "train",
              "y": 136
            },
            {
              "x": "subway",
              "y": 25
            },
            {
              "x": "bus",
              "y": 138
            },
            {
              "x": "car",
              "y": 213
            },
            {
              "x": "moto",
              "y": 148
            },
            {
              "x": "bicycle",
              "y": 7
            },
            {
              "x": "horse",
              "y": 5
            },
            {
              "x": "skateboard",
              "y": 102
            },
            {
              "x": "others",
              "y": 297
            }
          ]
        }
      ]
      
  return (
    <Box sx={{height:"75vh"}}>
       <ResponsiveLine
        data={data}
        theme={{
            // "background": "#a89b9b",
            "text": {
                "fontSize": 11,
                "fill": "#0be36c",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "axis": {
                "domain": {
                    "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                    }
                },
                "legend": {
                    "text": {
                        "fontSize": 12,
                        "fill": "#0d75b7",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "ticks": {
                    "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "grid": {
                "line": {
                    "stroke": "#767171",
                    "strokeWidth": 0
                }
            },
            "legends": {
                "title": {
                    "text": {
                        "fontSize": 11,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "text": {
                    "fontSize": 11,
                    "fill": "#c21212",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                },
                "ticks": {
                    "line": {},
                    "text": {
                        "fontSize": 10,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "annotations": {
                "text": {
                    "fontSize": 13,
                    "fill": "#333333",
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "link": {
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "outline": {
                    "stroke": "#000000",
                    "strokeWidth": 2,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "symbol": {
                    "fill": "#000000",
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                }
            },
            "tooltip": {
                "wrapper": {},
                "container": {
                    "background": "#ffffff",
                    "color": "#333333",
                    "fontSize": 12
                },
                "basic": {},
                "chip": {},
                "table": {},
                "tableCell": {},
                "tableCellValue": {}
            }
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
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
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
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
    />
    </Box>
  )
}

export default Line
