// Fictional sample data for the Floodivo prototype. Any resemblance to real records is coincidental.
export const seed = {
  "team": [
    {
      "name": "Col. (Rtd) Yusuf Bala",
      "role": "Emergency Coordinator"
    },
    {
      "name": "Patience Ekanem",
      "role": "Field Officer"
    },
    {
      "name": "Ibrahim Tanko",
      "role": "Field Officer"
    },
    {
      "name": "Folake Adewale",
      "role": "GIS Analyst"
    },
    {
      "name": "Okon Udoh",
      "role": "Partner Agency"
    }
  ],
  "items": [
    {
      "id": "FLD-1001",
      "title": "Low-lying streets — Ward 7",
      "subtitle": "1,900 residents · 2 schools",
      "group": "Ward 7",
      "metrics": [
        [
          "Risk (36h)",
          "High"
        ],
        [
          "Forecast rain",
          "85mm / 24h"
        ],
        [
          "Drain blockage",
          "~60%"
        ],
        [
          "Past floods",
          "4 in 5 years"
        ]
      ],
      "flags": [
        {
          "label": "High flood risk",
          "severity": "high",
          "confidence": 0.82,
          "explanation": "Heavy forecast rain combined with partly blocked drains and a history of repeated flooding gives the highest risk in the city. Clearing drains D-71 to D-74 would reduce it.",
          "evidence": [
            [
              "Forecast rainfall",
              "85mm in 24h",
              "Weather service forecast"
            ],
            [
              "Drain condition",
              "60% blocked (est.)",
              "Inspection 3 weeks ago"
            ],
            [
              "Flood history",
              "4 events since 2021",
              "Incident reports"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FLD-1002",
      "title": "Riverside market access road",
      "subtitle": "Market · 600 traders",
      "group": "Riverside",
      "metrics": [
        [
          "Risk (48h)",
          "High"
        ],
        [
          "River level",
          "Rising 12cm / day"
        ],
        [
          "Threshold",
          "0.4m below"
        ],
        [
          "Alt. route",
          "Available"
        ]
      ],
      "flags": [
        {
          "label": "River flood risk",
          "severity": "high",
          "confidence": 0.74,
          "explanation": "River levels are rising toward the level at which the access road flooded in 2024. If rain continues upstream, the threshold may be reached within 48 hours.",
          "evidence": [
            [
              "River gauge",
              "+12cm / day",
              "River gauge RG-2"
            ],
            [
              "Flooding level (2024)",
              "0.4m above current",
              "Incident reports"
            ],
            [
              "Upstream rainfall",
              "Heavy",
              "Weather service forecast"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FLD-1003",
      "title": "Primary health centre — basement store",
      "subtitle": "Critical facility",
      "group": "Ward 3",
      "metrics": [
        [
          "Risk (72h)",
          "Medium"
        ],
        [
          "Elevation",
          "Low point"
        ],
        [
          "Stored items",
          "Vaccines, records"
        ],
        [
          "Past flooding",
          "2022"
        ]
      ],
      "flags": [
        {
          "label": "Critical site exposure",
          "severity": "medium",
          "confidence": 0.69,
          "explanation": "The facility sits at a local low point and its basement flooded in 2022. Moving vaccines and records upstairs ahead of the rain would protect essential services.",
          "evidence": [
            [
              "Terrain",
              "Local depression",
              "Elevation model"
            ],
            [
              "Past event",
              "Basement flooded 2022",
              "Incident reports"
            ],
            [
              "Rain forecast",
              "60mm / 48h",
              "Weather service forecast"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FLD-1004",
      "title": "Drainage channel C-12 blockage",
      "subtitle": "Primary channel · 1.2km",
      "group": "Ward 7",
      "metrics": [
        [
          "Blockage",
          "Reported"
        ],
        [
          "Catchment",
          "3.4 km²"
        ],
        [
          "Downstream risk",
          "Wards 7 & 8"
        ],
        [
          "Last cleared",
          "9 months ago"
        ]
      ],
      "flags": [
        {
          "label": "Drain blockage",
          "severity": "high",
          "confidence": 0.77,
          "explanation": "A field report and a photo show refuse blocking C-12 near the culvert. It drains a large catchment, so clearing it is likely to reduce risk downstream.",
          "evidence": [
            [
              "Field report",
              "Blocked culvert + photo",
              "Field app"
            ],
            [
              "Catchment area",
              "3.4 km²",
              "Drainage map"
            ],
            [
              "Last clearance",
              "July 2025",
              "Works records"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FLD-1005",
      "title": "Industrial estate — Gate 2 road",
      "subtitle": "Estate access · 40 tenants",
      "group": "Industrial estate",
      "metrics": [
        [
          "Risk (48h)",
          "Medium"
        ],
        [
          "Ponding history",
          "6 events"
        ],
        [
          "Pump station",
          "One pump down"
        ],
        [
          "Tenants notified",
          "No"
        ]
      ],
      "flags": [
        {
          "label": "Access disruption risk",
          "severity": "medium",
          "confidence": 0.71,
          "explanation": "Gate 2 road ponds in heavy rain, and one of two pumps at the estate station is reported down, reducing drainage capacity.",
          "evidence": [
            [
              "Ponding history",
              "6 events in 3 years",
              "Estate incident log"
            ],
            [
              "Pump status",
              "1 of 2 offline",
              "Estate maintenance report"
            ],
            [
              "Forecast",
              "70mm / 48h",
              "Weather service forecast"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FLD-1006",
      "title": "Logistics depot — yard",
      "subtitle": "Depot · 120 vehicles, stock",
      "group": "Industrial estate",
      "metrics": [
        [
          "Risk (72h)",
          "Low–medium"
        ],
        [
          "Yard elevation",
          "0.3m above road"
        ],
        [
          "Uncertainty",
          "High"
        ],
        [
          "Drain data",
          "Incomplete"
        ]
      ],
      "flags": [
        {
          "label": "Uncertain risk",
          "severity": "low",
          "confidence": 0.55,
          "explanation": "Risk is moderate but uncertain because drainage records for the area are incomplete. A quick site inspection would narrow the estimate.",
          "evidence": [
            [
              "Drainage records",
              "Missing for 40% of area",
              "Drainage map"
            ],
            [
              "Yard elevation",
              "+0.3m vs road",
              "Elevation model"
            ],
            [
              "Past reports",
              "1 minor event",
              "Incident reports"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FLD-1007",
      "title": "Informal settlement by canal",
      "subtitle": "~800 residents",
      "group": "Riverside",
      "metrics": [
        [
          "Risk (36h)",
          "High"
        ],
        [
          "Exposure",
          "High · limited access"
        ],
        [
          "Warning channels",
          "Community focal point"
        ],
        [
          "Past floods",
          "2022, 2024"
        ]
      ],
      "flags": [
        {
          "label": "Vulnerable community",
          "severity": "high",
          "confidence": 0.73,
          "explanation": "Homes along the canal have flooded twice in recent years and access is limited. Early engagement through the community focal point is suggested.",
          "evidence": [
            [
              "Canal level",
              "Rising",
              "Field report"
            ],
            [
              "Flood history",
              "2022, 2024",
              "Incident reports"
            ],
            [
              "Access",
              "Footpaths only",
              "Field survey"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FLD-1008",
      "title": "Underpass — Ring Road",
      "subtitle": "Major route",
      "group": "Ward 3",
      "metrics": [
        [
          "Risk (24h)",
          "Medium"
        ],
        [
          "Pump",
          "Working"
        ],
        [
          "Ponding depth (past)",
          "Up to 1m"
        ],
        [
          "Traffic",
          "High"
        ]
      ],
      "flags": [
        {
          "label": "Road flooding risk",
          "severity": "medium",
          "confidence": 0.66,
          "explanation": "The underpass floods when rain exceeds the pump capacity. Forecast intensity is near that threshold; traffic management may be needed.",
          "evidence": [
            [
              "Pump capacity",
              "~40mm/h intensity",
              "Works records"
            ],
            [
              "Forecast peak intensity",
              "35–45mm/h",
              "Weather service forecast"
            ],
            [
              "Past ponding",
              "Up to 1m",
              "Incident reports"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FLD-1009",
      "title": "Ward 5 — elevated residential",
      "subtitle": "Normal drainage",
      "group": "Ward 5",
      "metrics": [
        [
          "Risk (72h)",
          "Low"
        ],
        [
          "Drains",
          "Cleared last month"
        ],
        [
          "Past floods",
          "None recorded"
        ],
        [
          "Status",
          "Monitor"
        ]
      ],
      "flags": [],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    }
  ]
};
