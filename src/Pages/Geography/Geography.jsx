import { Box } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import { geo } from './world_countries'


const Geography = () => {
  
  const data =[
    {
      "id": "AFG",
      "value": 557393
    },
    {
      "id": "AGO",
      "value": 856080
    },
    {
      "id": "ALB",
      "value": 909410
    },
    {
      "id": "ARE",
      "value": 325244
    },
    {
      "id": "ARG",
      "value": 443501
    },
    {
      "id": "ARM",
      "value": 853597
    },
    {
      "id": "ATA",
      "value": 797814
    },
    {
      "id": "ATF",
      "value": 387094
    },
    {
      "id": "AUT",
      "value": 435946
    },
    {
      "id": "AZE",
      "value": 839574
    },
    {
      "id": "BDI",
      "value": 919260
    },
    {
      "id": "BEL",
      "value": 897132
    },
    {
      "id": "BEN",
      "value": 868510
    },
    {
      "id": "BFA",
      "value": 274160
    },
    {
      "id": "BGD",
      "value": 316160
    },
    {
      "id": "BGR",
      "value": 988256
    },
    {
      "id": "BHS",
      "value": 306396
    },
    {
      "id": "BIH",
      "value": 661646
    },
    {
      "id": "BLR",
      "value": 16884
    },
    {
      "id": "BLZ",
      "value": 526091
    },
    {
      "id": "BOL",
      "value": 658446
    },
    {
      "id": "BRN",
      "value": 90939
    },
    {
      "id": "BTN",
      "value": 465245
    },
    {
      "id": "BWA",
      "value": 295897
    },
    {
      "id": "CAF",
      "value": 753419
    },
    {
      "id": "CAN",
      "value": 80063
    },
    {
      "id": "CHE",
      "value": 937328
    },
    {
      "id": "CHL",
      "value": 674202
    },
    {
      "id": "CHN",
      "value": 257237
    },
    {
      "id": "CIV",
      "value": 876452
    },
    {
      "id": "CMR",
      "value": 413996
    },
    {
      "id": "COG",
      "value": 691195
    },
    {
      "id": "COL",
      "value": 665524
    },
    {
      "id": "CRI",
      "value": 757895
    },
    {
      "id": "CUB",
      "value": 39071
    },
    {
      "id": "-99",
      "value": 505644
    },
    {
      "id": "CYP",
      "value": 253392
    },
    {
      "id": "CZE",
      "value": 657311
    },
    {
      "id": "DEU",
      "value": 722869
    },
    {
      "id": "DJI",
      "value": 367497
    },
    {
      "id": "DNK",
      "value": 68425
    },
    {
      "id": "DOM",
      "value": 154880
    },
    {
      "id": "DZA",
      "value": 167435
    },
    {
      "id": "ECU",
      "value": 190724
    },
    {
      "id": "EGY",
      "value": 51775
    },
    {
      "id": "ERI",
      "value": 652029
    },
    {
      "id": "ESP",
      "value": 84873
    },
    {
      "id": "EST",
      "value": 909058
    },
    {
      "id": "ETH",
      "value": 333317
    },
    {
      "id": "FIN",
      "value": 212797
    },
    {
      "id": "FJI",
      "value": 362620
    },
    {
      "id": "FLK",
      "value": 159593
    },
    {
      "id": "FRA",
      "value": 238675
    },
    {
      "id": "GAB",
      "value": 600128
    },
    {
      "id": "GBR",
      "value": 652092
    },
    {
      "id": "GEO",
      "value": 812727
    },
    {
      "id": "GHA",
      "value": 15915
    },
    {
      "id": "GIN",
      "value": 700211
    },
    {
      "id": "GMB",
      "value": 30518
    },
    {
      "id": "GNB",
      "value": 218373
    },
    {
      "id": "GNQ",
      "value": 844678
    },
    {
      "id": "GRC",
      "value": 455492
    },
    {
      "id": "GTM",
      "value": 417139
    },
    {
      "id": "GUY",
      "value": 221955
    },
    {
      "id": "HND",
      "value": 136856
    },
    {
      "id": "HRV",
      "value": 440595
    },
    {
      "id": "HTI",
      "value": 258289
    },
    {
      "id": "HUN",
      "value": 313514
    },
    {
      "id": "IDN",
      "value": 519032
    },
    {
      "id": "IND",
      "value": 183138
    },
    {
      "id": "IRL",
      "value": 41923
    },
    {
      "id": "IRN",
      "value": 495224
    },
    {
      "id": "IRQ",
      "value": 64756
    },
    {
      "id": "ISL",
      "value": 518371
    },
    {
      "id": "ISR",
      "value": 570657
    },
    {
      "id": "ITA",
      "value": 881361
    },
    {
      "id": "JAM",
      "value": 93848
    },
    {
      "id": "JOR",
      "value": 45268
    },
    {
      "id": "JPN",
      "value": 185277
    },
    {
      "id": "KAZ",
      "value": 332119
    },
    {
      "id": "KEN",
      "value": 247556
    },
    {
      "id": "KGZ",
      "value": 441174
    },
    {
      "id": "KHM",
      "value": 263145
    },
    {
      "id": "OSA",
      "value": 470358
    },
    {
      "id": "KWT",
      "value": 72010
    },
    {
      "id": "LAO",
      "value": 15256
    },
    {
      "id": "LBN",
      "value": 128065
    },
    {
      "id": "LBR",
      "value": 151560
    },
    {
      "id": "LBY",
      "value": 997900
    },
    {
      "id": "LKA",
      "value": 581879
    },
    {
      "id": "LSO",
      "value": 653653
    },
    {
      "id": "LTU",
      "value": 609549
    },
    {
      "id": "LUX",
      "value": 21753
    },
    {
      "id": "LVA",
      "value": 610839
    },
    {
      "id": "MAR",
      "value": 665338
    },
    {
      "id": "MDA",
      "value": 284423
    },
    {
      "id": "MDG",
      "value": 158953
    },
    {
      "id": "MEX",
      "value": 62633
    },
    {
      "id": "MKD",
      "value": 848534
    },
    {
      "id": "MLI",
      "value": 956760
    },
    {
      "id": "MMR",
      "value": 826594
    },
    {
      "id": "MNE",
      "value": 162680
    },
    {
      "id": "MNG",
      "value": 140289
    },
    {
      "id": "MOZ",
      "value": 61605
    },
    {
      "id": "MRT",
      "value": 617717
    },
    {
      "id": "MWI",
      "value": 568399
    },
    {
      "id": "MYS",
      "value": 542559
    },
    {
      "id": "NAM",
      "value": 697399
    },
    {
      "id": "NCL",
      "value": 17148
    },
    {
      "id": "NER",
      "value": 411811
    },
    {
      "id": "NGA",
      "value": 30747
    },
    {
      "id": "NIC",
      "value": 948448
    },
    {
      "id": "NLD",
      "value": 354177
    },
    {
      "id": "NOR",
      "value": 586251
    },
    {
      "id": "NPL",
      "value": 265108
    },
    {
      "id": "NZL",
      "value": 154132
    },
    {
      "id": "OMN",
      "value": 436473
    },
    {
      "id": "PAK",
      "value": 383060
    },
    {
      "id": "PAN",
      "value": 441686
    },
    {
      "id": "PER",
      "value": 773067
    },
    {
      "id": "PHL",
      "value": 965424
    },
    {
      "id": "PNG",
      "value": 554391
    },
    {
      "id": "POL",
      "value": 503538
    },
    {
      "id": "PRI",
      "value": 718727
    },
    {
      "id": "PRT",
      "value": 791508
    },
    {
      "id": "PRY",
      "value": 167618
    },
    {
      "id": "QAT",
      "value": 266083
    },
    {
      "id": "ROU",
      "value": 938971
    },
    {
      "id": "RUS",
      "value": 178260
    },
    {
      "id": "RWA",
      "value": 369691
    },
    {
      "id": "ESH",
      "value": 370023
    },
    {
      "id": "SAU",
      "value": 456880
    },
    {
      "id": "SDN",
      "value": 146021
    },
    {
      "id": "SDS",
      "value": 335420
    },
    {
      "id": "SEN",
      "value": 143878
    },
    {
      "id": "SLB",
      "value": 466016
    },
    {
      "id": "SLE",
      "value": 560164
    },
    {
      "id": "SLV",
      "value": 522771
    },
    {
      "id": "ABV",
      "value": 30869
    },
    {
      "id": "SOM",
      "value": 961878
    },
    {
      "id": "SRB",
      "value": 364769
    },
    {
      "id": "SUR",
      "value": 129673
    },
    {
      "id": "SVK",
      "value": 13762
    },
    {
      "id": "SVN",
      "value": 985713
    },
    {
      "id": "SWZ",
      "value": 799135
    },
    {
      "id": "SYR",
      "value": 982713
    },
    {
      "id": "TCD",
      "value": 464072
    },
    {
      "id": "TGO",
      "value": 547099
    },
    {
      "id": "THA",
      "value": 445708
    },
    {
      "id": "TJK",
      "value": 296313
    },
    {
      "id": "TKM",
      "value": 908145
    },
    {
      "id": "TLS",
      "value": 606094
    },
    {
      "id": "TTO",
      "value": 314186
    },
    {
      "id": "TUN",
      "value": 884128
    },
    {
      "id": "TUR",
      "value": 3364
    },
    {
      "id": "TWN",
      "value": 592972
    },
    {
      "id": "TZA",
      "value": 795764
    },
    {
      "id": "UGA",
      "value": 860272
    },
    {
      "id": "UKR",
      "value": 28800
    },
    {
      "id": "URY",
      "value": 906907
    },
    {
      "id": "USA",
      "value": 12594
    },
    {
      "id": "UZB",
      "value": 889295
    },
    {
      "id": "VEN",
      "value": 996826
    },
    {
      "id": "VNM",
      "value": 802401
    },
    {
      "id": "VUT",
      "value": 712054
    },
    {
      "id": "PSE",
      "value": 762751
    },
    {
      "id": "YEM",
      "value": 374619
    },
    {
      "id": "ZAF",
      "value": 269363
    },
    {
      "id": "ZMB",
      "value": 928979
    },
    {
      "id": "ZWE",
      "value": 581593
    },
    {
      "id": "KOR",
      "value": 923749
    }
  ]
  return (

    <Box sx={{height:"65vh",mt:5  , border:"3px solid #fff"}}>
      <ResponsiveChoropleth
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
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="BrBG"
        
        domain={[ 0, 1000000 ]}
        unknownColor="#e41414"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={150}
        projectionTranslation={[ .5,.5]}
        projectionRotation={[ 100, 10, 10 ]}
        enableGraticule={false}
        graticuleLineColor="#fe2216"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#14dccb',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#12ee42',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#d31b1b'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        // fill={[
        //     {
        //         match: {
        //             id: 'CAN'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'CHN'
        //         },
        //         id: 'lines'
        //     },
        //     {
        //         match: {
        //             id: 'ATA'
        //         },
        //         id: 'gradient'
        //     }
        // ]}
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#f6750b',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#08d90c',
                            itemOpacity: 1,
                            
                        }
                    }
                ]
            }
        ]}
    />
    </Box>
  )
}

export default Geography
