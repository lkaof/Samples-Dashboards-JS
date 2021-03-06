var DashboardVehicleProduction = {
  "ReportVersion": "2019.3.1.0",
  "ReportGuid": "c7e78ff77ddc4cdaaa046b069d183baf",
  "ReportName": "DashboardVehicleProduction",
  "ReportAlias": "DashboardVehicleProduction",
  "ReportAuthor": "Stimulsoft",
  "ReportCreated": "/Date(1458631671000+0300)/",
  "ReportChanged": "/Date(1558097050000+0300)/",
  "EngineVersion": "EngineV2",
  "CalculationMode": "Interpretation",
  "ReportUnit": "HundredthsOfInch",
  "PreviewSettings": 268435455,
  "Script": "using System;\r\nusing System.Drawing;\r\nusing System.Windows.Forms;\r\nusing System.Data;\r\nusing Stimulsoft.Controls;\r\nusing Stimulsoft.Base.Drawing;\r\nusing Stimulsoft.Report;\r\nusing Stimulsoft.Report.Dialogs;\r\nusing Stimulsoft.Report.Components;\r\n\r\nnamespace Reports\r\n{\r\n    public class Perfomance : Stimulsoft.Report.StiReport\r\n    {\r\n        public Perfomance()        {\r\n            this.InitializeComponent();\r\n        }\r\n\r\n        #region StiReport Designer generated code - do not modify\r\n\t\t#endregion StiReport Designer generated code - do not modify\r\n    }\r\n}\r\n",
  "ReferencedAssemblies": {
    "0": "System.Dll",
    "1": "System.Drawing.Dll",
    "2": "System.Windows.Forms.Dll",
    "3": "System.Data.Dll",
    "4": "System.Xml.Dll",
    "5": "Stimulsoft.Controls.Dll",
    "6": "Stimulsoft.Base.Dll",
    "7": "Stimulsoft.Report.Dll"
  },
  "Dictionary": {
    "Resources": {
      "0": {
        "Name": "Auto",
        "Alias": "Auto",
        "Type": "Xml",
        "Image": "UzsPCVJuq7sV0PkuvyYxzwSyaNpV12HCDj+ZSF4tS8wTglzdhcCClnYQDbKVHpgZ0tYnbvrRST6n7dXf3Tnhw7bzcWNzlyqXmr1PyssM8SvEAk/l5m3Q8XEwiTeA8o4ExVZfp5SC9DjqwPuLc7NdjbzQFQJ71XdrK/oL9xJY2MFS5FWuHPnbRlTx4nlzXOpRV9GGL5BSCwZXT/k9TV7+pI3rKvHoG8MoGR7ZAgjK5SW81rwjXFqSE6SS7WvN9EdlmX/dLYaFyDEtmtgipD49vIiaENpr0LNYWbNUs38Zag+VUfxF5y5JpfuGMtepcVKXqPRDEur2vRdvGh1GP9NRfG/b0BsDA83qqtEBJWQldsduLSF4CfC5lULmISmmPQYQW5+D/0SiEnVg6Z3/V7C5FIbel7TsI20ZzAoBfk7ckB2RLAYDRe/aHzMUpFgq7aXH+t9MAUbjUQ1IAnhrI2p1uglSYcWl6zuPFjtoch6lZFHFLlby1v3Ir7gdhXBv9zv6MOqBAgf6Su38IPrnEWVt8BCQ6L5BIfKVUQYrfasp9ZJVQDAdg9SwE/ON5A2T7gg74Em+mqT/kSsRNZe6Gihyq6ZK/MiIwjhP675ICb0zr9A6EB/vWhPXIMI1HyETN1zBoCGuH86lZpaeKY1ioJx4eD/Lp63w0iG1+JcbvcyF5ZBwil7IlWGn8pYeihoGG+yPXFpbSZff33sV/YFW2yqHuiuYySnSmRIOP0OGg6Uz3IYA8bsSt9WemHnAozvCg3f99mumCT5znDX2dJV5be4ss/Z30GTpw8H91qnmyFyXfhYXESKfdhOsxQPw2Gr8pzxD1q0zdOALO6Tx8CUgGJ4Gy2R4c7VB+LnIqsiew4zhwrMkYCi0f8+3OazguovuekZwXLuMGyPWL1N28FQiF9ZIvv4dS6ONOfDKW4vRl/jxHEywU1USFe/tEFne9Uf4RPbC7E+GTiX0zNMzZ1plE+iXRkVidsTGZqmaNegdIWNUASa3AqswJV1mk+Aq+xI47xXSjRoGV6BdDA6JhuPsNOjxZ4ic99tQViDB7ntJslLdFsoXmvbrgQTEDGRjDW1Zodlg2LEtkwaHHgklb3HWR4KtcFF3nVXhy7Gb+LAYonOxUxVmvn8YfGjwSU8NEokAwLP60UViafwlGm/w30R07hRVklEoXnlonai8nVLlRJUyVWZ4bwz4l2m8yETAd/tzAxy9/Epc4Ovxo7Erc6heehuSW0qPGsZngSHK1v899csEtihaOkWI00Agk0qLwaV9IvQnyHf9wQjvm8pQjnlF4lMYOh/taoB10+jEu5zZho4pnJDrldosujEIeal2qaoTAe//vKgv0DnaqvrmxEA5qJp9GDq5LyJeZxFg7ZQww9X6Gk1yC2spzfK83c7O8TWvuNTBJAkMpONXwWnKvbl126dOKMRMCWlJbA6G/TNJMTFoW/PLFOIdmmF010EO6Qg0wKPpMQhCc2kC09Uim51tVJ09KQ5vsnyvLAmw3R3wEpKbHX8sL38abi/ia8aEcDKZmQvDcmMgThLLN5jCdZXI5AVKaYH4C62sLuX8n5L0KSMMFXJjs/r084Yh0zJ8prwyoxDsKzASSlF7pmPgng54ZoCBAIy0eTSmsNvyssBii8OecjUCOic690r4eMTEkIMZCB+aQmQga7jd3SdlRdZEYTUTwI/S9Q5qRmlRX4l2L0QKIaEpSMJULm1Z7VpCf5EdHO+7BAgoFlYywdySX/SGv2TO9sx3IOdUymKJ7WMucYnRiotuTu9rll0ec/a0mah4UVHElTP3NdIyvfZu7Mo+jb+sdnUNC0k1Lff2+cd9D6n9q4kE3l3XPfUwzbAmOW4kNcbh8QKCkKlaFnDsYIRcuIGUajCkWv9MW+C7lSiA5JUK8tjoTx9IJsapny9MnAe3VrmCjUWwhJR7PRVR5i6G"
      }
    },
    "DataSources": {
      "0": {
        "Ident": "StiDataTableSource",
        "Name": "Auto",
        "Alias": "Auto",
        "Key": "c62adcef6b954ab8982f83a90c46be4f",
        "Columns": {
          "0": {
            "Name": "Country",
            "Index": -1,
            "NameInSource": "Country",
            "Alias": "Country",
            "Type": "System.String"
          },
          "1": {
            "Name": "Rank",
            "Index": -1,
            "NameInSource": "Rank",
            "Alias": "Rank",
            "Type": "System.String"
          },
          "2": {
            "Name": "Year2010",
            "Index": -1,
            "NameInSource": "Year2010",
            "Alias": "Year2010",
            "Type": "System.String"
          },
          "3": {
            "Name": "Year2015",
            "Index": -1,
            "NameInSource": "Year2015",
            "Alias": "Year2015",
            "Type": "System.String"
          },
          "4": {
            "Name": "Year2019",
            "Index": -1,
            "NameInSource": "Year2019",
            "Alias": "Year2019",
            "Type": "System.String"
          }
        },
        "NameInSource": "VechicleProduction.Auto"
      }
    },
    "Databases": {
      "0": {
        "Ident": "StiXmlDatabase",
        "Name": "VechicleProduction",
        "Alias": "Vechicle Production",
        "PathData": "resource://Auto"
      }
    }
  },
  "Pages": {
    "0": {
      "Ident": "StiDashboard",
      "Name": "DashboardVehicleProduction",
      "Guid": "11ad24abf71b439badecfa04cffb6ad5",
      "Alias": "Vehicle Production",
      "Brush": "solid:",
      "Components": {
        "0": {
          "Ident": "StiTableElement",
          "Name": "TableAuto",
          "Guid": "362bb323845341eaa71725af40b09c5b",
          "ClientRectangle": "0,360,440,240",
          "Border": ";;;;",
          "Columns": {
            "0": {
              "Ident": "DimensionColumn",
              "Expression": "Auto.Country",
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              }
            },
            "1": {
              "Ident": "DataBarsColumn",
              "Expression": "First(Auto.Year2015 - Auto.Year2010)",
              "Label": "Increase in 2015",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ",",
                "State": "DecimalDigits, Abbreviation"
              },
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              },
              "HorAlignment": "Left"
            },
            "2": {
              "Ident": "DataBarsColumn",
              "Expression": "First(Auto.Year2019 - Auto.Year2015)",
              "Label": "Increase in 2019",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ",",
                "State": "DecimalDigits, Abbreviation"
              },
              "DashboardInteraction": {
                "Ident": "TableColumn",
                "OnHover": "None",
                "OnClick": "None",
                "HyperlinkDestination": "NewTab"
              },
              "HorAlignment": "Right"
            }
          },
          "HeaderFont": ";10;;",
          "Title": {
            "Text": "Vehicle Production",
            "Visible": false,
            "Font": "Segoe UI;15.75;;",
            "HorAlignment": "Center"
          },
          "DashboardInteraction": {
            "Ident": "Table",
            "OnHover": "ShowToolTip",
            "OnClick": "ApplyFilter",
            "HyperlinkDestination": "NewTab"
          }
        },
        "1": {
          "Ident": "StiChartElement",
          "Name": "Chart1",
          "Guid": "f38800da6f554e6c87767dbbbe056fd5",
          "ClientRectangle": "440,360,760,240",
          "Border": ";;;;",
          "Values": {
            "0": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum(Auto.Year2010)",
              "Label": "Year 2010",
              "SeriesType": "StackedColumn"
            },
            "1": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum(Auto.Year2015)",
              "Label": "Year 2015",
              "SeriesType": "StackedColumn"
            },
            "2": {
              "Ident": "ValueChartMeter",
              "Expression": "Sum(Auto.Year2019)",
              "Label": "Year 2019",
              "SeriesType": "StackedColumn"
            }
          },
          "Arguments": {
            "0": {
              "Ident": "ArgumentChartMeter",
              "Expression": "Auto.Country"
            }
          },
          "TopN": {
            "Mode": "None"
          },
          "DashboardInteraction": {
            "Ident": "Chart",
            "OnHover": "ShowToolTip",
            "OnClick": "ApplyFilter",
            "HyperlinkDestination": "NewTab",
            "AllowUserDrillDown": false
          },
          "Title": {
            "Text": "Vehicle Production by Country",
            "Visible": false,
            "Font": "Segoe UI;15.75;;",
            "HorAlignment": "Center"
          },
          "ArgumentFormat": {
            "Ident": "StiGeneralFormatService"
          },
          "ValueFormat": {
            "Ident": "StiNumberFormatService",
            "NegativePattern": 1,
            "DecimalDigits": 0,
            "GroupSeparator": ",",
            "State": "DecimalDigits, Abbreviation"
          },
          "Area": {
            "GridLinesHor": {
              "Color": "Transparent",
              "Visible": true
            },
            "GridLinesVert": {
              "Color": "Transparent"
            },
            "InterlacingHor": {
              "Color": "Transparent"
            },
            "InterlacingVert": {
              "Color": "Transparent"
            }
          }
        },
        "2": {
          "Ident": "StiRegionMapElement",
          "Name": "RegionMap1",
          "Guid": "a66d5995c855435fa6412a94326409e1",
          "ClientRectangle": "440,80,760,240",
          "Border": ";;;;",
          "DashboardInteraction": {
            "Ident": "RegionMap",
            "OnHover": "ShowToolTip",
            "OnClick": "ApplyFilter",
            "HyperlinkDestination": "NewTab"
          },
          "Title": {
            "Text": "Vehicle Production Globally",
            "Visible": false,
            "Font": "Segoe UI;15.75;;",
            "HorAlignment": "Center"
          },
          "KeyMeter": {
            "Ident": "KeyMapMeter",
            "Expression": "Auto.Country"
          },
          "ValueMeter": {
            "Ident": "ValueMapMeter",
            "Expression": "Auto.Year2019",
            "Label": "Year 2019"
          },
          "MapID": "World",
          "DataFrom": "DataColumns",
          "MapType": "Heatmap",
          "ShowValue": true,
          "ShortValue": true
        },
        "3": {
          "Ident": "StiTextElement",
          "Name": "Text1",
          "Guid": "189c4532abb94cd6b4424bf311e4d6fa",
          "ClientRectangle": "0,0,1200,40",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "Text": "<font face=\"Arial\" size=\"36\"><text-align=\"Center\">Vehicle Production</text-align></font>",
          "Title": {
            "Text": "Text",
            "Visible": false
          }
        },
        "4": {
          "Ident": "StiIndicatorElement",
          "Name": "Indicator1",
          "Guid": "0acd2236ebaa4d0cac7c76a8f1292bc4",
          "ClientRectangle": "0,80,440,240",
          "Border": ";;;;",
          "TopN": {
            "Mode": "None"
          },
          "TextFormat": {
            "Ident": "StiNumberFormatService",
            "NegativePattern": 1,
            "GroupSeparator": ",",
            "State": "DecimalDigits, Abbreviation"
          },
          "Value": {
            "Ident": "ValueIndicatorMeter",
            "Expression": "Sum(Auto.Year2019)",
            "Label": "Year 2019"
          },
          "Target": {
            "Ident": "TargetIndicatorMeter",
            "Expression": "Sum(Auto.Year2015)",
            "Label": "Year 2015"
          },
          "Series": {
            "Ident": "SeriesIndicatorMeter",
            "Expression": "Auto.Country"
          },
          "Title": {
            "Text": "Indicator",
            "Visible": false
          },
          "Font": ";13;;",
          "Icon": "StarHalf"
        },
        "5": {
          "Ident": "StiTextElement",
          "Name": "Text2",
          "Guid": "25ae2ca07c0c4acf8fba53bddb269c8e",
          "ClientRectangle": "0,40,440,40",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "Text": "<font face=\"Arial\" size=\"16\"><text-align=\"Center\">Growth by Country</text-align></font>",
          "Title": {
            "Text": "Text",
            "Visible": false
          }
        },
        "6": {
          "Ident": "StiTextElement",
          "Name": "Text3",
          "Guid": "573a382ddc494bb2af5c1270dbe37efb",
          "ClientRectangle": "440,40,760,40",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "Text": "<font face=\"Arial\" size=\"16\"><text-align=\"Center\">Vehicle Production Globally</text-align></font>",
          "Title": {
            "Text": "Text",
            "Visible": false
          }
        },
        "7": {
          "Ident": "StiTextElement",
          "Name": "Text4",
          "Guid": "c0cd44764d6144abb747d165d457c8e8",
          "ClientRectangle": "0,320,440,40",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "Text": "<font face=\"Arial\" size=\"16\"><text-align=\"Center\">Vehicle Production 2010 - 2019</text-align></font>",
          "Title": {
            "Text": "Text",
            "Visible": false
          }
        },
        "8": {
          "Ident": "StiTextElement",
          "Name": "Text5",
          "Guid": "62ed12801e7d4ae8ba5482f2398ed648",
          "ClientRectangle": "440,320,760,40",
          "Padding": {
            "Left": 0.0,
            "Top": 0.0,
            "Right": 0.0,
            "Bottom": 0.0
          },
          "Border": ";;;;",
          "Text": "<font face=\"Arial\" size=\"16\"><text-align=\"Center\">Vehicle Production by Country</text-align></font>",
          "Title": {
            "Text": "Text",
            "Visible": false
          }
        }
      },
      "Border": ";;2;;;;;solid:Black"
    }
  }
}