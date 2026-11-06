// Site copy for Floodivo. A proposed startup concept: fictional team, illustrative pricing.
const site = {
  "name": "Floodivo",
  "tagline": "Earlier flood signals. Clearer response priorities.",
  "categories": [
    "AI",
    "ClimateTech",
    "Disaster Management"
  ],
  "about": "Floodivo helps organisations prepare for flooding at the locations they manage. Its AI combines environmental and infrastructure data into practical priorities for inspection, preparedness, and response.",
  "logoSvg": "<rect width=\"32\" height=\"32\" rx=\"9\" fill=\"#0b2530\"/><path d=\"M5 19c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2\" fill=\"none\" stroke=\"#4fd1e8\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M5 24c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2\" fill=\"none\" stroke=\"#4fd1e8\" stroke-width=\"2.4\" stroke-linecap=\"round\" opacity=\".55\"/><path d=\"M16 6v7m0 0-2.5-2.5M16 13l2.5-2.5\" stroke=\"#ff9f43\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "words": {
    "records": "risk alerts",
    "decider": "emergency and drainage officers",
    "sources": "rainfall forecasts, terrain, drainage maps and past flood reports",
    "model": "Spatial risk models combine forecast rainfall, terrain, drainage capacity and flood history to estimate local flood risk, updated as observations arrive, with uncertainty per location.",
    "store": "Amazon Location Service"
  },
  "hero": {
    "eyebrow": "Local flood risk for preparedness teams",
    "before": "See where flood preparation ",
    "em": "needs to happen first",
    "after": ".",
    "points": [
      "Rainfall, terrain, drains and history in one map",
      "Inspection and response lists by location",
      "Uncertainty shown for every estimate"
    ],
    "floatTitle": "High risk in 36h",
    "floatText": "Ward 7 low-lying streets · drains 60% blocked"
  },
  "problem": {
    "title": "The forecast says heavy rain. Which streets flood first?",
    "text": "Urban flood teams must read rainfall forecasts alongside incomplete drainage records and scattered incident reports. It is hard to decide which drains to clear, which communities to warn and where to stage equipment before the rain arrives.",
    "fragments": [
      "A regional rainfall warning with no street-level detail",
      "Drainage maps last updated years ago",
      "Past flood reports in WhatsApp groups and news clips",
      "Drain clearing planned by rota, not risk"
    ]
  },
  "solution": {
    "title": "Local risk rankings that update as the rain arrives.",
    "text": "Floodivo combines rainfall forecasts, terrain, drainage maps and past flood reports to estimate local flood risk. Rankings update as new observations arrive and produce location-specific inspection and response lists, each with an uncertainty indicator.",
    "capabilities": [
      {
        "title": "Local risk estimates",
        "text": "Flood risk by ward, street segment or site, from terrain, drainage and forecast rainfall.",
        "demoLabel": "Ward 7",
        "demoValue": "High · 36h · ±1 level"
      },
      {
        "title": "Live updates",
        "text": "Risk rankings refresh as rain gauges, river levels and field reports come in.",
        "demoLabel": "Updated",
        "demoValue": "14:20 · 3 new reports"
      },
      {
        "title": "Action lists",
        "text": "Drain inspections, community warnings and equipment staging, ranked by risk and exposure.",
        "demoLabel": "Today",
        "demoValue": "11 drains · 3 warnings"
      }
    ]
  },
  "stepsTitle": "From forecast to field action.",
  "steps": [
    [
      "Map",
      "Load drainage maps, terrain, critical sites and past flood reports for your area."
    ],
    [
      "Estimate",
      "Floodivo combines forecast rainfall with local conditions to estimate risk by location."
    ],
    [
      "Update",
      "Rain gauges, river levels and field reports refresh the rankings as events unfold."
    ],
    [
      "Act",
      "Officers review ranked lists, dispatch teams, and every decision is logged."
    ]
  ],
  "audiencesTitle": "For teams responsible for places that flood.",
  "audiences": [
    {
      "title": "State emergency management agencies",
      "text": "Prepare communities and stage resources before flood events.",
      "outcome": "Earlier preparedness"
    },
    {
      "title": "Municipal drainage departments",
      "text": "Clear and inspect the drains that matter most before the rain.",
      "outcome": "Risk-based drain clearing"
    },
    {
      "title": "Industrial estate managers",
      "text": "Protect tenants, access roads and utilities on flood-prone estates.",
      "outcome": "Less disruption"
    },
    {
      "title": "Logistics companies with flood-prone depots",
      "text": "Move stock and vehicles before depots and routes flood.",
      "outcome": "Protected stock and fleets"
    }
  ],
  "publicSector": {
    "title": "Shared risk information for preparedness and field coordination.",
    "text": "Floodivo gives emergency and drainage teams one shared picture of where flood risk is rising, so inspections, warnings and resources can be coordinated across agencies.",
    "points": [
      "One risk picture for emergency, drainage and works teams",
      "Location-specific inspection and response lists",
      "Uncertainty shown so teams can plan for it",
      "A record of actions taken before and during events"
    ]
  },
  "ai": {
    "title": "The model estimates risk. Officers decide the response.",
    "intro": "Flood decisions affect lives and livelihoods. Floodivo supports preparedness and coordination and is open about what it does not know.",
    "does": [
      "Estimates local flood risk from rain, terrain and drains",
      "Updates rankings as new observations arrive",
      "Produces ranked inspection and response lists",
      "Shows uncertainty and data gaps for each location"
    ],
    "never": [
      "Issues public warnings or evacuation orders",
      "Replaces official meteorological or hydrological warnings",
      "Decides relief or compensation",
      "Hides uncertainty to sound more confident"
    ]
  },
  "pricing": {
    "model": "Annual subscription by geographic coverage, with API tiers for enterprise users.",
    "tiers": [
      {
        "name": "Site",
        "summary": "For estates, depots and campuses.",
        "price": "₦3m",
        "unit": "/ year",
        "features": [
          "Up to 10 km²",
          "Local risk estimates",
          "Action lists",
          "10 user seats"
        ],
        "cta": "Request a pilot"
      },
      {
        "name": "City",
        "summary": "For municipal and LGA teams.",
        "price": "₦28m",
        "unit": "/ year",
        "features": [
          "Up to 500 km²",
          "Everything in Site",
          "Live updates from gauges and reports",
          "Multi-agency workspace",
          "Unlimited seats"
        ],
        "cta": "Request a pilot",
        "featured": true
      },
      {
        "name": "State and API",
        "summary": "For state agencies and enterprises.",
        "price": "Custom",
        "unit": "",
        "features": [
          "State-wide coverage",
          "Risk API for your systems",
          "Custom data integrations",
          "Dedicated support"
        ],
        "cta": "Talk to us"
      }
    ]
  },
  "team": [
    {
      "name": "Amina Yerima",
      "role": "Founder/CEO",
      "initials": "AY",
      "bio": "Disaster preparedness specialist with community response experience.",
      "focus": [
        "Disaster preparedness",
        "Community response",
        "Agency partnerships"
      ]
    },
    {
      "name": "Iniobong Essien",
      "role": "Co-founder",
      "initials": "IE",
      "bio": "Urban planner focused on drainage and infrastructure.",
      "focus": [
        "Urban planning",
        "Drainage",
        "Infrastructure"
      ]
    },
    {
      "name": "Damilare Oyenuga",
      "role": "CTO",
      "initials": "DO",
      "bio": "Geospatial ML engineer specialising in environmental risk.",
      "focus": [
        "Geospatial ML",
        "Environmental risk",
        "Platform"
      ]
    }
  ],
  "faq": [
    [
      "Does Floodivo replace official flood warnings?",
      "No. It complements official meteorological and hydrological warnings with local detail for preparedness. Public warnings remain with the responsible authorities."
    ],
    [
      "What if our drainage maps are incomplete?",
      "Floodivo works with what exists and marks low-confidence areas. Field reports and inspections improve the picture over time."
    ],
    [
      "Can communities report flooding?",
      "Field teams and trusted community focal points can submit reports, which feed into the risk rankings after review."
    ],
    [
      "Is Floodivo a live product?",
      "Not yet. Floodivo is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype runs on fictional data in your browser."
    ],
    [
      "Does the AI make decisions?",
      "No. Floodivo flags, ranks and explains. Emergency and drainage officers review the evidence and record every decision with a reason."
    ],
    [
      "How would our data be protected?",
      "In production, data would be encrypted, isolated per customer, access-controlled by role and never used to train models for other customers. Data-sharing terms are agreed before any pilot."
    ]
  ],
  "purpose": {
    "eyebrow": "Why Floodivo exists",
    "manifesto": "Floods arrive faster than paperwork. The difference between a wet street and a lost home is often a cleared drain, a warning given early or a truck moved in time. We want the teams who prepare to know where to start.",
    "purpose": "Help organisations prepare for flooding at the places they manage, with clear priorities for inspection and response.",
    "why": "Flooding is becoming more frequent and more costly. Preparedness depends on acting in the right places before the water arrives, and local risk information makes that possible.",
    "stakesTitle": "What flooding costs.",
    "stats": [
      {
        "value": 4.4,
        "dec": 1,
        "suffix": "m",
        "label": "People affected by Nigeria’s 2022 floods.",
        "source": "UN OCHA via ReliefWeb",
        "url": "https://reliefweb.int/report/nigeria/nigeria-floods-response-flash-update-3-last-updated-22-november-2022"
      },
      {
        "value": 2.4,
        "dec": 1,
        "suffix": "m",
        "label": "People displaced by the 2022 floods.",
        "source": "UN OCHA via ReliefWeb",
        "url": "https://reliefweb.int/report/nigeria/nigeria-floods-response-flash-update-3-last-updated-22-november-2022"
      },
      {
        "value": 612,
        "suffix": "",
        "label": "Deaths confirmed by the Federal Government during the 2022 floods.",
        "source": "Ripples Nigeria",
        "url": "https://www.ripplesnigeria.com/nigerian-govt-confirms-612-dead-2776-injured-in-floods"
      }
    ],
    "changeTitle": "From reacting to floods to preparing for them.",
    "before": [
      "Regional warnings with no local detail",
      "Drains cleared on a fixed rota",
      "Incident reports scattered across chats",
      "Resources staged where they were last time"
    ],
    "after": [
      "Risk estimated by ward, street and site",
      "Drains cleared where risk is highest",
      "Field reports feeding one shared picture",
      "Equipment staged where rising risk is forecast"
    ],
    "principlesTitle": "What we believe about flood preparedness.",
    "principles": [
      [
        "Prepare, don’t just respond",
        "The most valuable actions happen before the rain."
      ],
      [
        "Honest uncertainty",
        "Every estimate shows how sure it is, and why."
      ],
      [
        "Authorities decide",
        "Warnings, evacuations and relief belong to responsible officials."
      ],
      [
        "Local knowledge matters",
        "Field reports and community insight sit alongside models."
      ],
      [
        "Shared picture, shared action",
        "Agencies coordinate better from the same information."
      ],
      [
        "Protect the most exposed",
        "Priorities account for vulnerable people and critical services."
      ]
    ],
    "letterTitle": "Why we are building Floodivo.",
    "letter": [
      "Amina has worked with communities before, during and after floods. Again and again, the warning was there, but nobody could say which streets, which drains or which families to reach first.",
      "Iniobong planned drainage and infrastructure and knew how much depended on records that were incomplete or out of date. Damilare had built geospatial models of environmental risk and wanted them to serve the people doing the preparing.",
      "Floodivo brings that together: local, updating risk estimates with honest uncertainty, turned into practical lists for the teams who clear drains, warn communities and coordinate response."
    ],
    "visionTitle": "Where Floodivo is going.",
    "visionIntro": "From preparedness lists to resilient planning.",
    "vision": [
      {
        "stage": "Now",
        "title": "Concept and prototype",
        "text": "An interactive prototype on fictional data, and conversations with emergency and drainage teams."
      },
      {
        "stage": "Next",
        "title": "Season pilots",
        "text": "Back-testing risk rankings against past flood events with early partners."
      },
      {
        "stage": "Then",
        "title": "Live preparedness",
        "text": "Updating risk lists and coordination during the rainy season."
      },
      {
        "stage": "Later",
        "title": "Resilience planning",
        "text": "Evidence that guides drainage investment and land-use decisions."
      }
    ],
    "statsNote": "Figures are published estimates from the sources linked; they describe the wider problem, not results from this product."
  },
  "app": {
    "title": "Flood preparedness board",
    "subtitle": "Locations ranked by estimated flood risk for the next 72 hours in a fictional city, for officer review.",
    "itemNoun": "risk alert",
    "itemNounPlural": "risk alerts",
    "groupLabel": "ward",
    "queueTitle": "Risk alert queue",
    "humanNote": "Risk estimates guide preparation. Officers decide every action.",
    "decisions": {
      "confirm": "Dispatch team",
      "dismiss": "Monitor only",
      "escalate": "Escalate to incident command"
    },
    "roles": [
      {
        "id": "lead",
        "label": "Emergency Coordinator",
        "can": [
          "view",
          "note",
          "assign",
          "decide",
          "escalate",
          "export"
        ]
      },
      {
        "id": "reviewer",
        "label": "Field Officer",
        "can": [
          "view",
          "note",
          "assign",
          "decide"
        ]
      },
      {
        "id": "analyst",
        "label": "GIS Analyst",
        "can": [
          "view",
          "note",
          "escalate"
        ]
      },
      {
        "id": "auditor",
        "label": "Partner Agency",
        "can": [
          "view",
          "export"
        ]
      }
    ],
    "examples": [
      "Which risk alerts need review first?",
      "Summarise the review status",
      "Show Ward 7",
      "Explain FLD-1004"
    ],
    "refuse": "\\b(evacuat|issue (a |the )?(public )?warning|announce|compensat|relief payment|declare (an )?emergency)",
    "refuseText": "Floodivo can explain the risk estimate, but public warnings, evacuation orders, emergency declarations and relief decisions belong to the responsible authorities.",
    "refuseExamples": [
      "Should we evacuate Ward 7 now?",
      "Issue a public warning for Riverside",
      "Who gets compensation after the flood?"
    ]
  },
  "slug": "floodivo",
  "url": "https://www.floodivo.com",
  "email": "hello@floodivo.com",
  "stepsNote": "Floodivo recommends and ranks. Every outcome is recorded by a named person, with a reason, in an audit log.",
  "safeguards": [
    [
      "People decide",
      "Every risk alert is confirmed, dismissed or escalated by emergency and drainage officers, never by the model."
    ],
    [
      "Evidence first",
      "Each flag links to the rainfall forecasts, terrain, drainage maps and past flood reports behind it, so a reviewer can check the reasoning before acting."
    ],
    [
      "Confidence shown",
      "Scores come with a confidence level and the data gaps that lower it, so weak signals are not mistaken for facts."
    ],
    [
      "Role-based access",
      "Permissions are set per role: who can view, comment, assign, decide, escalate or export."
    ],
    [
      "Complete audit trail",
      "Assignments, notes and decisions are time-stamped with the person and reason, and can be exported."
    ],
    [
      "Your data stays yours",
      "Customer data is isolated per tenant, encrypted at rest and in transit, and never used to train models for other customers."
    ]
  ],
  "architectureIntro": "How Floodivo would run in production: ingestion of rainfall forecasts, terrain, drainage maps and past flood reports, models that score and explain, and a review workspace with a full audit trail.",
  "architecture": [
    [
      "Ingest",
      "Amazon S3 · AWS Transfer Family · API Gateway",
      "Secure upload and API connections for rainfall forecasts, terrain, drainage maps and past flood reports."
    ],
    [
      "Prepare",
      "AWS Glue · AWS Step Functions",
      "Validation, cleaning and matching of records, with data-quality checks logged."
    ],
    [
      "Model",
      "Amazon SageMaker",
      "Spatial risk models combine forecast rainfall, terrain, drainage capacity and flood history to estimate local flood risk, updated as observations arrive, with uncertainty per location."
    ],
    [
      "Store",
      "Amazon Aurora PostgreSQL · Amazon Location Service",
      "Records, scores, evidence links and decisions in a tenant-isolated database."
    ],
    [
      "Review",
      "AWS Amplify · Amazon CloudFront · Amazon Cognito",
      "The web workspace, with single sign-on and role-based permissions."
    ],
    [
      "Govern",
      "AWS CloudTrail · AWS KMS · Amazon CloudWatch",
      "Encryption keys per tenant, access logging and monitoring of model behaviour."
    ]
  ],
  "early": {
    "title": "Pilot Floodivo with your own team.",
    "text": "We are looking for a small number of early partners to shape Floodivo. A pilot starts with a sample of your historical data and a fixed review period, so you can judge the results before committing.",
    "steps": [
      "Tell us about your team and the records you work with.",
      "A founder replies personally to arrange a short call.",
      "We agree a pilot scope, data-sharing terms and how success will be measured."
    ]
  }
};
export default site;
