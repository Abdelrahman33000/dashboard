import { Box, Paper, Stack, Typography } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'

const RowComp1 = ({icon ,title1 ,title2 ,title3}) => {
    const data=[
        {
          "id": "lisp",
          "label": "lisp",
          "value": 344,
          "color": "hsl(254, 70%, 50%)"
        },
        {
          "id": "haskell",
          "label": "haskell",
          "value": 359,
          "color": "hsl(189, 70%, 50%)"
        },
        {
          "id": "ruby",
          "label": "ruby",
          "value": 227,
          "color": "hsl(351, 70%, 50%)"
        },
        {
          "id": "scala",
          "label": "scala",
          "value": 572,
          "color": "hsl(290, 70%, 50%)"
        },
        {
          "id": "rust",
          "label": "rust",
          "value": 277,
          "color": "hsl(267, 70%, 50%)"
        }
      ]
  return (
    <Paper  sx={{minWidth:"300px" ,p:2 , display:"flex" , justifyContent:"space-between" ,gap:5}}>
 <Stack>
  {icon}
  <Typography variant="body2" mt={5}>
   {title1}
  </Typography>
  <Typography variant="body2" mt={5}>
  {title2}
  </Typography>


 </Stack>
   

 <Stack textAlign={"center"}>
    <Box height={"100px"} width={"100px"}>
    <ResponsivePie
        data={data}
        theme={{
            // "background": "#a89b9b",
            "text": {
                "fontSize": 11,
                "fill": "#e3690b",
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
        margin={{ top: 10, right: 80, bottom: 10, left: 80 }}
        innerRadius={.7}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        enableArcLinkLabels={false} 
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
   
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
     
    />
    </Box>
 <Typography variant="body2">
 {title3}
  </Typography>
    
    </Stack>
  </Paper>
  )
}

export default RowComp1
