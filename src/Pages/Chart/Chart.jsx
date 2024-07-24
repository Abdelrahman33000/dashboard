import { ResponsiveBar } from '@nivo/bar'
import { Box } from '@mui/material'
const Chart = () => {
   
    let data =[
        {
          "country": "AD",
          "hot dog": 38,
          "hot dogColor": "hsl(202.84263959390864, 86.02620087336244%, 44.90196078431373%)",
          "burger": 102,
          "burgerColor": "hsl(169, 70%, 50%)",
          "sandwich": 193,
          "sandwichColor": "hsl(168, 70%, 50%)",
          "kebab": 65,
          "kebabColor": "hsl(157, 70%, 50%)",
          "fries": 81,
          "friesColor": "hsl(261, 70%, 50%)",
          "donut": 141,
          "donutColor": "hsl(204, 70%, 50%)"
        },
        {
          "country": "AE",
          "hot dog": 193,
          "hot dogColor": "hsl(18, 70%, 50%)",
          "burger": 193,
          "burgerColor": "hsl(37, 70%, 50%)",
          "sandwich": 156,
          "sandwichColor": "hsl(295, 70%, 50%)",
          "kebab": 140,
          "kebabColor": "hsl(262, 70%, 50%)",
          "fries": 140,
          "friesColor": "hsl(342, 70%, 50%)",
          "donut": 25,
          "donutColor": "hsl(249, 70%, 50%)"
        },
        {
          "country": "AF",
          "hot dog": 193,
          "hot dogColor": "hsl(227, 70%, 50%)",
          "burger": 78,
          "burgerColor": "hsl(317, 70%, 50%)",
          "sandwich": 126,
          "sandwichColor": "hsl(235, 70%, 50%)",
          "kebab": 118,
          "kebabColor": "hsl(195, 70%, 50%)",
          "fries": 165,
          "friesColor": "hsl(154, 70%, 50%)",
          "donut": 91,
          "donutColor": "hsl(88, 70%, 50%)"
        },
        {
          "country": "AG",
          "hot dog": 73,
          "hot dogColor": "hsl(204, 70%, 50%)",
          "burger": 12,
          "burgerColor": "hsl(9, 70%, 50%)",
          "sandwich": 2,
          "sandwichColor": "hsl(225, 70%, 50%)",
          "kebab": 192,
          "kebabColor": "hsl(164, 70%, 50%)",
          "fries": 60,
          "friesColor": "hsl(3, 70%, 50%)",
          "donut": 184,
          "donutColor": "hsl(18, 70%, 50%)"
        },
        {
          "country": "AI",
          "hot dog": 148,
          "hot dogColor": "hsl(21, 70%, 50%)",
          "burger": 169,
          "burgerColor": "hsl(128, 70%, 50%)",
          "sandwich": 43,
          "sandwichColor": "hsl(34, 70%, 50%)",
          "kebab": 122,
          "kebabColor": "hsl(168, 70%, 50%)",
          "fries": 80,
          "friesColor": "hsl(107, 70%, 50%)",
          "donut": 73,
          "donutColor": "hsl(37, 70%, 50%)"
        },
        {
          "country": "AL",
          "hot dog": 53,
          "hot dogColor": "hsl(221, 70%, 50%)",
          "burger": 60,
          "burgerColor": "hsl(130, 70%, 50%)",
          "sandwich": 64,
          "sandwichColor": "hsl(316, 70%, 50%)",
          "kebab": 123,
          "kebabColor": "hsl(176, 70%, 50%)",
          "fries": 14,
          "friesColor": "hsl(309, 70%, 50%)",
          "donut": 188,
          "donutColor": "hsl(213, 70%, 50%)"
        },
        {
          "country": "AM",
          "hot dog": 197,
          "hot dogColor": "hsl(249, 70%, 50%)",
          "burger": 73,
          "burgerColor": "hsl(262, 70%, 50%)",
          "sandwich": 184,
          "sandwichColor": "hsl(106, 70%, 50%)",
          "kebab": 118,
          "kebabColor": "hsl(108, 70%, 50%)",
          "fries": 33,
          "friesColor": "hsl(153, 70%, 50%)",
          "donut": 187,
          "donutColor": "hsl(278, 70%, 50%)"
        }
      ]
  return (
    <Box  sx={{height:"75vh" }}>
          <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}

        indexBy="country"
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
                    "strokeWidth": 1
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
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'red_yellow_blue' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#1fd30b',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'main',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1,
                            
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />

    </Box>
  )
}

export default Chart
