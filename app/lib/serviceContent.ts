// export type ServiceContent = {
//   overview: string[];
//   deliverables: string[];
//   industries?: string[];
//   process: {
//     title: string;
//     description: string;
//   }[];
// };

// export const SERVICE_CONTENT: Record<string, ServiceContent> = {

//   patents: {
//     overview: [
//       "We advise clients across Canada, the United States, and internationally on complex patent matters spanning drafting, prosecution, portfolio development, and enforcement.",
//       "Our patent agents are registered before CIPO and the USPTO, and bring 15–25 years of research and industry experience across advanced technological domains."
//     ],
//     deliverables: [
//       "Preparation and prosecution of patent applications",
//       "Canadian, US, PCT and EPO filings",
//       "Infringement and validity opinions",
//       "Technical infringement analysis",
//       "Patent and prior-art searches",
//       "Industrial design application filings"
//     ],
//     industries: [
//       "Optics & Photonics",
//       "Aerospace",
//       "Software & Telecommunications",
//       "Semiconductors & Material Science",
//       "Electronics & Electrical Engineering",
//       "Mechanical & Chemical Engineering",
//       "Biomedical Engineering",
//       "Clean Technologies"
//     ],
//     process: [
//       { title: "Analyze", description: "Technical and competitive review of the invention." },
//       { title: "Structure", description: "Design jurisdictional and portfolio strategy." },
//       { title: "Prosecute", description: "Manage filings and examiner engagement." }
//     ]
//   },

//   "ip-strategy": {
//     overview: [
//       "We align patent and IP strategy with broader business development objectives to build a clean and defensible IP foundation.",
//       "Our advisory integrates competitive intelligence, freedom-to-operate positioning, and long-term litigation risk reduction."
//     ],
//     deliverables: [
//       "Freedom-to-operate searches",
//       "Competitive portfolio analysis",
//       "Design-around strategy",
//       "Litigation support advisory",
//       "Patent defense positioning"
//     ],
//     process: [
//       { title: "Assess Exposure", description: "Identify infringement and competitive risk." },
//       { title: "Strategize", description: "Align protection with business growth." },
//       { title: "Defend", description: "Prepare litigation-ready documentation." }
//     ]
//   },

//   "virtual-counsel": {
//     overview: [
//       "We provide ongoing virtual patent counsel for startups and growth-stage companies requiring structured IP oversight without full-time internal teams.",
//       "Our experts establish scalable IP programs tailored to technology-driven businesses."
//     ],
//     deliverables: [
//       "IP audits and due diligence",
//       "IP strategy and policy development",
//       "Invention mining sessions",
//       "Patent review meetings",
//       "Trade secret protection",
//       "IP budgeting and management",
//       "Foreign associate coordination"
//     ],
//     process: [
//       { title: "Audit", description: "Review existing IP processes and assets." },
//       { title: "Build", description: "Implement scalable IP governance frameworks." },
//       { title: "Manage", description: "Provide ongoing strategic oversight." }
//     ]
//   },

//   "valuation": {
//     overview: [
//       "We conduct independent patent portfolio valuations for mergers, acquisitions, venture financing, and restructuring scenarios.",
//       "Our proprietary valuation methodologies enable consistent, objective assessment of large patent portfolios."
//     ],
//     deliverables: [
//       "Portfolio valuation analysis",
//       "AI-assisted scoring and calibration",
//       "Color-coded visualization reports",
//       "Licensing and cross-licensing support",
//       "IP-backed transaction advisory"
//     ],
//     process: [
//       { title: "Evaluate", description: "Multi-expert technical assessment." },
//       { title: "Calibrate", description: "Ensure consistency and objectivity." },
//       { title: "Report", description: "Deliver structured valuation insights." }
//     ]
//   },

//   infringement: {
//     overview: [
//       "We provide technical infringement analysis and validity opinions in high-technology domains.",
//       "Our experts conduct comprehensive prior-art searches including hard-to-find references."
//     ],
//     deliverables: [
//       "Technical infringement reports",
//       "Validity and prior-art searches",
//       "Expert opinion support",
//       "Litigation technical consulting"
//     ],
//     process: [
//       { title: "Investigate", description: "Technical patent comparison analysis." },
//       { title: "Validate", description: "Prior-art and claim scope review." },
//       { title: "Support", description: "Assist legal teams and expert witnesses." }
//     ]
//   },

//   education: {
//     overview: [
//       "We provide intellectual property education programs for corporations, startups, and paralegal professionals.",
//       "Our seminars are tailored to executives, engineers, marketing, HR, finance, and supply management teams."
//     ],
//     deliverables: [
//       "Corporate IP seminars",
//       "Startup clean-IP foundation training",
//       "Executive workshops",
//       "Patent paralegal certification preparation",
//       "Hourly tutoring sessions"
//     ],
//     process: [
//       { title: "Assess", description: "Identify knowledge gaps within the organization." },
//       { title: "Train", description: "Deliver structured IP education modules." },
//       { title: "Embed", description: "Establish sustainable IP awareness culture." }
//     ]
//   }

// };

export type ServiceContent = {
  overview: string[];
  deliverables: string[];
  industries?: string[];
  process: {
    title: string;
    description: string;
  }[];
};

export const SERVICE_CONTENT: Record<string, ServiceContent> = {

  patents: {
    overview: [
      "We advise technology companies, research institutions, and multinational enterprises across Canada, the United States, and internationally on complex patent matters that require both technical precision and strategic foresight.",
      "Our registered patent agents before CIPO and the USPTO combine 15–25 years of advanced research and industry experience, enabling us to translate sophisticated engineering innovation into defensible, commercially aligned patent protection.",
      "From early-stage invention capture to global portfolio development and enforcement strategy, we ensure intellectual property functions as a durable business asset that strengthens valuation, investor confidence, and competitive positioning."
    ],
    deliverables: [
      "Strategic preparation and prosecution of patent applications",
      "Canadian, U.S., PCT, and EPO filing coordination",
      "Comprehensive infringement and validity opinions",
      "Advanced technical claim mapping and analysis",
      "Global prior-art and competitive landscape searches",
      "Industrial design application strategy and filings"
    ],
    industries: [
      "Optics & Photonics",
      "Aerospace & Defense",
      "Software & Telecommunications",
      "Semiconductors & Materials Science",
      "Electronics & Electrical Engineering",
      "Mechanical & Chemical Engineering",
      "Biomedical & Life Sciences",
      "Clean & Sustainable Technologies"
    ],
    process: [
      {
        title: "Technical Deep Dive",
        description: "We conduct a rigorous technical and competitive analysis to identify core inventive concepts, claim breadth opportunities, and potential jurisdictional exposure before defining the filing strategy."
      },
      {
        title: "Strategic Architecture",
        description: "We design jurisdictional and portfolio frameworks aligned with commercialization timelines, funding milestones, and long-term enforcement objectives."
      },
      {
        title: "Precision Prosecution",
        description: "We manage examiner engagement, amendments, and global coordination to secure patent rights that withstand scrutiny and reinforce long-term competitive advantage."
      }
    ]
  },

  "ip-strategy": {
    overview: [
      "We integrate intellectual property strategy directly into corporate growth plans, ensuring patents, trade secrets, and design assets operate as strategic instruments rather than passive filings.",
      "Our advisory combines competitive intelligence, freedom-to-operate positioning, and litigation risk mitigation to create resilient long-term IP foundations.",
      "By aligning protection strategy with product roadmaps and capital objectives, we help organizations scale confidently into new markets."
    ],
    deliverables: [
      "Freedom-to-operate investigations and structured risk mapping",
      "Competitive patent portfolio benchmarking",
      "Design-around and white-space opportunity strategy",
      "Litigation preparedness advisory",
      "Defensive patent positioning frameworks"
    ],
    process: [
      {
        title: "Risk Mapping",
        description: "Identify infringement exposure, competitive overlap, and jurisdictional vulnerabilities through structured analysis."
      },
      {
        title: "Strategic Alignment",
        description: "Align protection strategy with product evolution, market expansion, and investor expectations."
      },
      {
        title: "Defensive Structuring",
        description: "Develop documentation and evidentiary positioning to strengthen enforceability and reduce future disputes."
      }
    ]
  },

  "virtual-counsel": {
    overview: [
      "We serve as embedded virtual IP counsel for startups and scaling technology companies requiring executive-level IP oversight without the cost of a full internal department.",
      "Our scalable advisory model establishes governance frameworks that evolve alongside innovation velocity, funding rounds, and international growth.",
      "We provide structured IP stewardship that supports sustainable expansion and long-term enterprise value."
    ],
    deliverables: [
      "Comprehensive IP audits and due diligence reviews",
      "IP governance and internal policy frameworks",
      "Structured invention mining programs",
      "Patent review and strategic roadmap meetings",
      "Trade secret identification and protection systems",
      "IP budgeting, forecasting, and lifecycle management",
      "International filing coordination"
    ],
    process: [
      {
        title: "Diagnostic Review",
        description: "Evaluate existing IP assets, internal processes, and documentation standards to identify strengths and vulnerabilities."
      },
      {
        title: "Program Development",
        description: "Implement scalable governance structures and repeatable invention workflows tailored to organizational maturity."
      },
      {
        title: "Ongoing Stewardship",
        description: "Provide continuous strategic oversight, portfolio optimization, and executive-level advisory support."
      }
    ]
  },

  valuation: {
    overview: [
      "We deliver independent, defensible patent portfolio valuations for mergers, acquisitions, venture financing, licensing negotiations, and corporate restructuring.",
      "Our proprietary multi-factor methodology integrates technical assessment, market positioning, and enforceability metrics to generate objective valuation insights.",
      "We equip investors, acquirers, and executive teams with structured analysis that supports informed decision-making."
    ],
    deliverables: [
      "Structured patent portfolio valuation reports",
      "AI-assisted scoring and calibrated ranking models",
      "Visualized portfolio heatmaps and asset segmentation",
      "Licensing and cross-licensing strategy support",
      "IP-backed transaction advisory"
    ],
    process: [
      {
        title: "Technical Evaluation",
        description: "Multi-expert review of claim strength, technological relevance, and defensibility."
      },
      {
        title: "Quantitative Calibration",
        description: "Apply consistent scoring frameworks to ensure objective comparison across large asset sets."
      },
      {
        title: "Strategic Reporting",
        description: "Deliver structured insights tailored to investors, acquirers, and senior decision-makers."
      }
    ]
  },

  infringement: {
    overview: [
      "We conduct detailed technical infringement and validity analyses across high-technology domains to support legal teams with defensible expert-level insight.",
      "Our approach integrates structured claim comparison, prior-art investigation, and evidentiary analysis to strengthen litigation positioning.",
      "We assist organizations in navigating disputes with clarity, technical depth, and strategic focus."
    ],
    deliverables: [
      "Technical infringement comparison reports",
      "Validity and global prior-art search documentation",
      "Expert opinion preparation and technical support",
      "Litigation-focused consulting for legal teams"
    ],
    process: [
      {
        title: "Claim Analysis",
        description: "Conduct structured comparison between asserted claims and accused technologies."
      },
      {
        title: "Prior-Art Validation",
        description: "Perform exhaustive novelty and inventive-step review using global technical sources."
      },
      {
        title: "Expert Support",
        description: "Collaborate with counsel to reinforce technical arguments and evidentiary documentation."
      }
    ]
  },

  education: {
    overview: [
      "We provide structured intellectual property education programs for corporations, startups, and professional teams seeking to embed IP literacy within their organizations.",
      "Our tailored seminars equip executives, engineers, marketing leaders, HR professionals, and operational teams with practical IP awareness aligned to their functional roles.",
      "By strengthening internal understanding of intellectual property, organizations reduce risk while fostering innovation discipline."
    ],
    deliverables: [
      "Corporate IP awareness seminars",
      "Startup clean-IP foundation programs",
      "Executive and board-level workshops",
      "Patent paralegal certification preparation",
      "Private and group tutoring sessions"
    ],
    process: [
      {
        title: "Needs Assessment",
        description: "Identify organizational knowledge gaps and functional exposure areas."
      },
      {
        title: "Structured Training",
        description: "Deliver role-specific IP modules grounded in real-world case studies."
      },
      {
        title: "Cultural Integration",
        description: "Embed sustainable IP awareness into innovation cycles and daily operations."
      }
    ]
  },

  trademarks: {
    overview: [
      "We advise technology companies, established brands, and scaling startups on comprehensive trademark strategy spanning global registrations, enforcement, and portfolio management.",
      "Our experienced team manages clearance investigations, application filings across multiple jurisdictions, and active enforcement programs to protect brand assets.",
      "From inception through marketplace dominance and international expansion, we ensure trademark protection strengthens brand value and prevents competitive infringement."
    ],
    deliverables: [
      "Strategic trademark availability searches and freedom-to-use clearance",
      "Multi-jurisdictional trademark application filings and prosecution",
      "Trademark portfolio audits and strength assessments",
      "Enforcement actions including opposition and cancellation proceedings",
      "Trademark licensing and coexistence strategies"
    ],
    process: [
      {
        title: "Brand Clearance",
        description: "Comprehensive availability analysis to ensure trademark distinctiveness and freedom-to-operate in target markets."
      },
      {
        title: "Global Registration",
        description: "Strategic filing across key commercial jurisdictions to establish enforceable brand protection."
      },
      {
        title: "Active Protection",
        description: "Ongoing monitoring, enforcement, and portfolio management to maximize brand asset value."
      }
    ]
  },

  "litigation-support": {
    overview: [
      "We provide expert technical advisory and litigation support services for intellectual property disputes spanning patents, trademarks, and trade secret matters.",
      "Our structured analytical approach equips legal teams with defensible technical opinions and evidentiary documentation that strengthens case positioning.",
      "We collaborate with counsel to translate complex technical concepts into persuasive legal arguments."
    ],
    deliverables: [
      "Expert opinion preparation and report drafting",
      "Technical analysis and evidentiary research support",
      "Deposition and trial testimony preparation",
      "Prior-art and competitive landscape documentation",
      "Infringement analysis and defense strategy consulting"
    ],
    process: [
      {
        title: "Case Assessment",
        description: "Analyze technical claims, accused products, and evidentiary foundations to identify key disputes."
      },
      {
        title: "Expert Opinion Development",
        description: "Prepare defensible technical analysis grounded in industry standards and scientific methodology."
      },
      {
        title: "Litigation Support",
        description: "Provide ongoing counsel collaboration, testimony preparation, and evidentiary support through resolution."
      }
    ]
  },

  "ip-audit": {
    overview: [
      "We conduct comprehensive intellectual property audits for organizations seeking to understand portfolio strength, governance maturity, and strategic positioning.",
      "Our diagnostic assessments identify IP assets, vulnerabilities, and opportunities to strengthen enterprise value and reduce risk.",
      "We deliver actionable recommendations aligned with business growth objectives."
    ],
    deliverables: [
      "Full portfolio asset documentation and analysis",
      "Ownership chain and recordation verification",
      "Risk assessment and vulnerability identification",
      "Governance framework evaluation",
      "Recommendations for optimization and strengthening"
    ],
    process: [
      {
        title: "Asset Inventory",
        description: "Systematic documentation of all IP assets, filings, and strategic importance."
      },
      {
        title: "Governance Review",
        description: "Evaluate internal processes, documentation standards, and organizational maturity."
      },
      {
        title: "Strategic Roadmap",
        description: "Deliver prioritized recommendations for portfolio strengthening and risk reduction."
      }
    ]
  },

  enforcement: {
    overview: [
      "We advise organizations on intellectual property enforcement strategy, including infringement identification, assessment, and litigation positioning.",
      "Our technical analysis supports both defensive IP protection and proactive enforcement campaigns to preserve competitive advantage.",
      "We equip organizations with structured guidance on enforcement priorities and risk management."
    ],
    deliverables: [
      "Comprehensive infringement analysis and assessment",
      "Technical validity and enforceability opinions",
      "Enforcement strategy development and risk mapping",
      "Litigation support and expert opinion preparation",
      "Post-settlement IP optimization guidance"
    ],
    process: [
      {
        title: "Infringement Assessment",
        description: "Detailed technical analysis comparing asserted IP rights against competitive products or practices."
      },
      {
        title: "Strategy Development",
        description: "Evaluate enforcement viability, timeline feasibility, and appropriate remedies."
      },
      {
        title: "Litigation Support",
        description: "Provide expert analysis, technical opinions, and evidentiary support for successful resolution."
      }
    ]
  }

};