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
  snapshot: {
    positioning: string;
    coverage: string;
    jurisdiction: string;
  };
  headings?: {
    overview?: string;
    scope?: string;
    process?: string;
    whyChoose?: string;
    industries?: string;
  };
  differentiators: {
    title: string;
    description: string;
  }[];
};

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  patents: {
    snapshot: {
      positioning: "Patent counsel for companies that need technically credible drafting, prosecution, and portfolio planning tied to real commercialization decisions.",
      coverage: "From invention capture and claim drafting through examiner response strategy, portfolio growth, opinions, and cross-border filing coordination.",
      jurisdiction: "Structured for Canada and the USA, with PCT and foreign filing coordination when global protection is commercially justified.",
    },
    headings: {
      overview: "Patent work built around claim strength and business value",
      scope: "Patent mandates typically covered by the firm",
      process: "How patent matters are scoped and advanced",
      whyChoose: "Why clients retain IP-MEX for patent work",
      industries: "Technical sectors where patent depth matters most",
    },
    overview: [
      "We advise technology companies, research institutions, and multinational enterprises across Canada, the United States, and internationally on patent matters that require both technical fluency and disciplined legal judgment.",
      "Our registered patent agents before CIPO and the USPTO combine advanced scientific and engineering backgrounds with prosecution experience, allowing the firm to draft claims that are commercially useful rather than merely descriptive.",
      "Patent work is approached as a long-term asset-building exercise, with attention to claim breadth, filing timing, portfolio layering, diligence readiness, and future enforcement positioning."
    ],
    deliverables: [
      "Strategic patent drafting and prosecution",
      "Canadian, U.S., PCT, and EPO filing coordination",
      "Patentability, infringement, and validity opinions",
      "Claim charting and technical evidence review",
      "Prior-art, competitor, and landscape searches",
      "Industrial design filing strategy"
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
        title: "Invention Review",
        description: "Assess the technical advance, prior-art environment, inventorship issues, and business objective before claims are structured."
      },
      {
        title: "Claim Strategy",
        description: "Build filing and portfolio architecture around the product roadmap, competitive landscape, and future enforcement needs."
      },
      {
        title: "Prosecution Management",
        description: "Handle office actions, amendments, and jurisdictional coordination with an emphasis on durable claim value."
      }
    ],
    differentiators: [
      {
        title: "Technical Drafting Depth",
        description: "The team works comfortably with sophisticated subject matter, which improves claim framing and technical precision."
      },
      {
        title: "Cross-Border Filing Coordination",
        description: "Canadian and U.S. prosecution strategy is handled with coordinated thinking rather than as separate filing silos."
      },
      {
        title: "Commercial Portfolio Thinking",
        description: "Advice is tied to funding, licensing, diligence, and future defensibility instead of only filing counts."
      }
    ]
  },

  trademarks: {
    snapshot: {
      positioning: "Trademark legal services for companies that need brand clearance, registration, and enforcement handled with practical commercial judgment.",
      coverage: "Brand clearance, filing, prosecution, portfolio management, marketplace monitoring, and dispute support for growing organizations.",
      jurisdiction: "Trademark strategy built for Canada and the USA, with filing coordination for cross-border brand expansion."
    },
    headings: {
      overview: "Trademark protection shaped by how brands actually scale",
      scope: "Trademark matters commonly handled by the firm",
      process: "How brand protection is structured",
      whyChoose: "Why clients engage IP-MEX on trademark work"
    },
    overview: [
      "We advise startups, established businesses, and technology companies on trademark strategy that protects brand identity while supporting launch, expansion, and long-term market credibility.",
      "Trademark work is handled with attention to clearance risk, filing scope, registrability, enforcement posture, and the practical realities of using a mark across digital and international channels.",
      "The objective is not only to obtain registrations, but to create a trademark position that remains commercially useful as the business grows."
    ],
    deliverables: [
      "Trademark availability and freedom-to-use clearance",
      "Canadian and international application filing and prosecution",
      "Portfolio review and registration maintenance",
      "Opposition, cancellation, and enforcement support",
      "Trademark licensing and coexistence guidance"
    ],
    industries: [
      "Software & SaaS",
      "Consumer Products",
      "Medical Devices",
      "Financial Technology",
      "Professional Services",
      "Industrial Technology"
    ],
    process: [
      {
        title: "Clearance Review",
        description: "Assess candidate marks for availability, registrability, and potential conflict before launch or filing."
      },
      {
        title: "Registration Strategy",
        description: "Define filing scope, goods and services coverage, and jurisdiction priorities aligned to business plans."
      },
      {
        title: "Portfolio Protection",
        description: "Manage prosecution, monitoring, and enforcement steps to preserve brand distinctiveness and reduce conflict risk."
      }
    ],
    differentiators: [
      {
        title: "Practical Clearance Analysis",
        description: "The firm looks beyond the database result to the commercial risk of using and defending the brand in practice."
      },
      {
        title: "Growth-Oriented Filing Scope",
        description: "Trademark filings are scoped around future use, expansion, and portfolio coherence rather than only immediate launch needs."
      },
      {
        title: "Integrated Brand Protection",
        description: "Advice connects trademark registration, enforcement, and broader IP strategy so the brand is treated as a business asset."
      }
    ]
  },

  "ip-strategy": {
    snapshot: {
      positioning: "Strategic IP counsel for leadership teams that need portfolio decisions aligned with product, capital, and competitive pressure.",
      coverage: "Freedom-to-operate, competitor review, white-space planning, defensive positioning, and roadmap-level IP decision support.",
      jurisdiction: "Built for Canadian and U.S. growth strategies, with international filing and enforcement exposure considered where relevant."
    },
    headings: {
      overview: "IP strategy work that reaches beyond filing decisions",
      scope: "Strategic planning work typically handled",
      process: "How the strategy mandate is developed",
      whyChoose: "Why organizations use IP-MEX for strategic IP planning"
    },
    overview: [
      "We integrate intellectual property strategy into broader business planning so patents, trademarks, trade secrets, and filing decisions support real commercial priorities rather than operate as isolated legal tasks.",
      "This work often sits at the intersection of product planning, capital raises, diligence preparation, market expansion, and dispute avoidance, where timing and prioritization matter as much as legal doctrine.",
      "The result is a clearer IP roadmap for what to protect, where to file, what to defer, and how to reduce avoidable exposure as the company scales."
    ],
    deliverables: [
      "Freedom-to-operate investigations and exposure mapping",
      "Competitor portfolio benchmarking",
      "White-space and design-around strategy",
      "Defensive portfolio positioning",
      "Commercially aligned filing prioritization"
    ],
    industries: [
      "Venture-Backed Startups",
      "Growth-Stage Software",
      "Deep Tech Companies",
      "Advanced Manufacturing",
      "Life Sciences",
      "Cross-Border Expansion Teams"
    ],
    process: [
      {
        title: "Exposure Review",
        description: "Map the product, market, and competitor environment to identify where protection or risk needs attention first."
      },
      {
        title: "Strategic Prioritization",
        description: "Connect legal choices to fundraising, launch timelines, licensing plans, and internal resource constraints."
      },
      {
        title: "Execution Roadmap",
        description: "Turn the strategy into a sequence of filing, governance, diligence, and defensive actions that the business can actually follow."
      }
    ],
    differentiators: [
      {
        title: "Business-First IP Planning",
        description: "Recommendations are framed around growth, risk tolerance, and company stage instead of generic portfolio theory."
      },
      {
        title: "Cross-Functional Legal View",
        description: "The firm can connect patents, trademarks, confidentiality, and dispute exposure in a single planning exercise."
      },
      {
        title: "Decision-Ready Guidance",
        description: "Clients receive prioritized guidance that supports executive decisions, not just background legal analysis."
      }
    ]
  },

  "ip-audit": {
    snapshot: {
      positioning: "IP audit services for organizations that need a grounded view of what they own, what is vulnerable, and what needs correction.",
      coverage: "Portfolio inventory, ownership review, filing status checks, governance assessment, and diligence-readiness recommendations.",
      jurisdiction: "Useful for Canadian and U.S. portfolios, especially before financing, M&A, licensing, restructuring, or portfolio cleanup."
    },
    headings: {
      overview: "Audit work focused on ownership, risk, and portfolio readiness",
      scope: "What an IP audit typically covers",
      process: "How the audit is conducted",
      whyChoose: "Why clients use IP-MEX for IP audits"
    },
    overview: [
      "We conduct IP audits for organizations that need a clear picture of portfolio condition, ownership integrity, filing quality, and internal governance before a major business event or strategy reset.",
      "Audits are especially useful when a company has grown quickly, changed personnel, raised capital, acquired assets, or reached the point where informal practices are no longer adequate.",
      "The goal is to identify what is missing, what is exposed, and what should be corrected so the IP position can support diligence, transactions, and future enforcement."
    ],
    deliverables: [
      "Portfolio inventory and asset classification",
      "Ownership chain and assignment review",
      "Risk mapping and vulnerability identification",
      "Governance and process evaluation",
      "Prioritized remediation recommendations"
    ],
    industries: [
      "Startup Portfolios",
      "VC-Backed Companies",
      "University Spin-Outs",
      "M&A Readiness Matters",
      "Licensed Technology Businesses",
      "Multi-Jurisdiction IP Portfolios"
    ],
    process: [
      {
        title: "Inventory Collection",
        description: "Compile the existing portfolio, filing history, agreements, and internal records that affect ownership and control."
      },
      {
        title: "Gap Analysis",
        description: "Review for missing assignments, governance weaknesses, record errors, and areas where rights may be underprotected."
      },
      {
        title: "Remediation Planning",
        description: "Deliver a practical cleanup plan that addresses the highest-priority legal and operational risks first."
      }
    ],
    differentiators: [
      {
        title: "Diligence-Oriented Review",
        description: "The audit is shaped around what investors, counterparties, and acquirers are likely to scrutinize."
      },
      {
        title: "Legal And Process Coverage",
        description: "The work examines both the portfolio itself and the internal governance practices that can create recurring risk."
      },
      {
        title: "Actionable Output",
        description: "Clients receive concrete remediation priorities rather than a high-level abstract assessment."
      }
    ]
  },

  valuation: {
    snapshot: {
      positioning: "Valuation work for transactions, licensing, financing, and strategic planning where the quality of the IP analysis affects the quality of the business decision.",
      coverage: "Portfolio scoring, heat mapping, enforceability review, commercial context analysis, and valuation support for decision-makers.",
      jurisdiction: "Particularly useful for cross-border portfolios and transactions involving Canadian and U.S. assets."
    },
    headings: {
      overview: "Valuation work designed for decisions, not just reports",
      scope: "Common valuation deliverables",
      process: "How valuation analysis is structured",
      whyChoose: "Why organizations use IP-MEX on valuation mandates"
    },
    overview: [
      "We deliver structured IP valuation analysis for mergers, acquisitions, venture financing, licensing discussions, and internal portfolio strategy where decision-makers need more than a nominal asset count.",
      "The methodology considers legal strength, technical relevance, market position, enforceability, and portfolio coherence so the output reflects practical value rather than paper volume.",
      "This work helps management teams, investors, and counterparties understand which assets matter most and why."
    ],
    deliverables: [
      "Portfolio valuation reports",
      "Ranked asset scoring models",
      "Heatmap and segmentation analysis",
      "Licensing and transaction support",
      "Defensibility-focused portfolio commentary"
    ],
    industries: [
      "Technology Transactions",
      "Licensing Portfolios",
      "Patent-Heavy Enterprises",
      "Investment Diligence",
      "Restructuring & M&A",
      "Commercialization Programs"
    ],
    process: [
      {
        title: "Portfolio Review",
        description: "Assess the asset set for legal quality, technical significance, and market relevance."
      },
      {
        title: "Scoring And Calibration",
        description: "Apply a repeatable framework to compare assets consistently across the portfolio."
      },
      {
        title: "Decision Support Output",
        description: "Present the analysis in a form usable for executives, investors, licensing teams, and transaction counsel."
      }
    ],
    differentiators: [
      {
        title: "Technical And Legal Weighting",
        description: "The analysis reflects both technical strength and legal enforceability instead of relying on only one lens."
      },
      {
        title: "Transaction Relevance",
        description: "The output is prepared with financing, M&A, and licensing use cases in mind."
      },
      {
        title: "Portfolio Prioritization",
        description: "The work identifies where value is concentrated so management can make targeted portfolio decisions."
      }
    ]
  },

  "virtual-counsel": {
    snapshot: {
      positioning: "Fractional IP leadership for companies that need ongoing legal direction without building a full internal IP department.",
      coverage: "Governance design, invention capture, filing oversight, outside-counsel coordination, budgeting, and executive-level portfolio guidance.",
      jurisdiction: "Useful for Canadian and U.S.-facing companies managing growth, fundraising, or multi-jurisdiction filing activity."
    },
    headings: {
      overview: "Outside counsel structured like an in-house IP function",
      scope: "What virtual counsel support can include",
      process: "How the virtual counsel model is implemented",
      whyChoose: "Why companies use IP-MEX as virtual counsel"
    },
    overview: [
      "We act as embedded virtual IP counsel for companies that need consistent strategic oversight but are not ready for a full internal legal team dedicated to intellectual property.",
      "This model is designed for founders, executives, and operating teams that need practical decision support on filings, governance, budgeting, outside-counsel management, and internal invention processes.",
      "It creates continuity across legal decisions so the portfolio develops deliberately instead of reactively."
    ],
    deliverables: [
      "IP governance and policy design",
      "Invention mining and intake process support",
      "Portfolio review meetings and filing oversight",
      "Budget forecasting and outside-counsel coordination",
      "Cross-functional executive guidance on IP decisions"
    ],
    industries: [
      "Scaling SaaS Companies",
      "Hardware Startups",
      "University Spin-Outs",
      "AI & Data Businesses",
      "Telecommunications",
      "Investor-Backed Innovation Teams"
    ],
    process: [
      {
        title: "Program Assessment",
        description: "Review the current IP posture, internal workflows, resourcing gaps, and business priorities."
      },
      {
        title: "Governance Buildout",
        description: "Establish reporting, intake, review, and portfolio-management processes that match company stage."
      },
      {
        title: "Ongoing Stewardship",
        description: "Provide recurring decision support as filings, diligence needs, product changes, and market expansion evolve."
      }
    ],
    differentiators: [
      {
        title: "Executive-Level Continuity",
        description: "The service creates consistency across filing, budget, and governance decisions over time."
      },
      {
        title: "Scalable Operating Model",
        description: "Support can expand with growth without the fixed cost of a full internal buildout."
      },
      {
        title: "Integrated External Coordination",
        description: "The firm can coordinate foreign associates, specialists, and internal stakeholders under one legal strategy."
      }
    ]
  },

  enforcement: {
    snapshot: {
      positioning: "Enforcement strategy for rights holders who need a disciplined view of infringement, leverage, remedy options, and dispute risk before acting.",
      coverage: "Infringement assessment, validity context, enforcement planning, evidentiary review, and coordination with litigation teams.",
      jurisdiction: "Designed for Canada and the USA, where enforcement choices must be weighed against cost, timing, and commercial objective."
    },
    headings: {
      overview: "Enforcement work grounded in risk, leverage, and evidentiary reality",
      scope: "Common enforcement strategy workstreams",
      process: "How enforcement matters are evaluated",
      whyChoose: "Why clients engage IP-MEX on enforcement matters"
    },
    overview: [
      "We advise organizations on how to evaluate and structure enforcement activity before a dispute escalates into an expensive or poorly prepared matter.",
      "This work combines technical analysis, legal positioning, and commercial judgment so clients can decide whether to enforce, negotiate, document, or hold position with a clearer understanding of risk and leverage.",
      "The result is a more disciplined enforcement posture that supports business goals rather than reaction-driven escalation."
    ],
    deliverables: [
      "Infringement assessment and early case evaluation",
      "Validity and enforceability context review",
      "Enforcement roadmap and remedy planning",
      "Technical evidence preparation",
      "Support for counsel and dispute teams"
    ],
    industries: [
      "Software Disputes",
      "Telecommunications",
      "Electronics & Hardware",
      "Medical Technology",
      "Advanced Manufacturing",
      "Cross-Border Product Markets"
    ],
    process: [
      {
        title: "Rights And Conduct Review",
        description: "Assess the asserted rights, the alleged conduct, and the evidentiary picture before strategy is set."
      },
      {
        title: "Leverage Analysis",
        description: "Evaluate commercial objectives, litigation exposure, settlement dynamics, and available remedies."
      },
      {
        title: "Action Planning",
        description: "Support the chosen path, whether that means documentation, negotiation, escalation, or litigation coordination."
      }
    ],
    differentiators: [
      {
        title: "Measured Enforcement Judgment",
        description: "The firm focuses on whether enforcement is strategically worthwhile, not only whether a theoretical issue exists."
      },
      {
        title: "Technical Case Framing",
        description: "Complex technical subject matter can be organized into clearer legal positions early in the dispute."
      },
      {
        title: "Business-Aware Dispute Planning",
        description: "Advice keeps cost, timing, counterparties, and commercial leverage in view at each stage."
      }
    ]
  },

  infringement: {
    snapshot: {
      positioning: "Infringement analysis for organizations and counsel that need disciplined claim comparison and technical review before taking a position.",
      coverage: "Claim-to-product analysis, evidence review, validity context, technical opinion support, and dispute preparation.",
      jurisdiction: "Useful in Canadian and U.S. patent disputes, especially where technical depth drives the strength of the case."
    },
    headings: {
      overview: "Technical infringement review that supports legal decisions",
      scope: "Common infringement-analysis deliverables",
      process: "How infringement review is conducted",
      whyChoose: "Why counsel and clients retain IP-MEX for infringement analysis"
    },
    overview: [
      "We conduct structured infringement analysis for patents and technology disputes where the accuracy of the technical comparison is central to the legal position.",
      "The work focuses on mapping asserted claims to accused products or processes, identifying evidentiary gaps, and clarifying where validity, construction, or technical interpretation may affect the outcome.",
      "This gives counsel and rights holders a stronger basis for enforcement, defense, negotiation, or early case assessment."
    ],
    deliverables: [
      "Claim-to-product comparison analysis",
      "Supporting technical evidence review",
      "Prior-art and validity context support",
      "Opinion-development assistance",
      "Dispute-readiness reporting"
    ],
    industries: [
      "Patent Assertion Matters",
      "Complex Engineering Products",
      "Software Platforms",
      "Semiconductors",
      "Telecommunications Systems",
      "Industrial Technology"
    ],
    process: [
      {
        title: "Claim Mapping",
        description: "Compare the asserted claims against the relevant technical features of the accused product or process."
      },
      {
        title: "Evidence Testing",
        description: "Review the available technical material to identify support, gaps, and issues likely to matter in dispute."
      },
      {
        title: "Position Support",
        description: "Translate the technical review into structured analysis usable by decision-makers and legal teams."
      }
    ],
    differentiators: [
      {
        title: "Detailed Technical Mapping",
        description: "The analysis is built around the actual technical record rather than only high-level product descriptions."
      },
      {
        title: "Validity Awareness",
        description: "Infringement review is carried out with an understanding of how validity issues may affect case strength."
      },
      {
        title: "Counsel-Ready Output",
        description: "The work product is structured to help lawyers move quickly into strategy, negotiation, or litigation preparation."
      }
    ]
  },

  "litigation-support": {
    snapshot: {
      positioning: "Technical litigation support for counsel handling IP disputes that require disciplined analysis, expert coordination, and evidentiary structure.",
      coverage: "Expert report support, prior-art review, technical issue framing, evidentiary analysis, and case-development support.",
      jurisdiction: "Useful across Canadian and U.S. IP disputes where technical subject matter is a core litigation challenge."
    },
    headings: {
      overview: "Litigation support built for technically complex IP matters",
      scope: "Support work commonly provided to counsel",
      process: "How litigation support is organized",
      whyChoose: "Why counsel engage IP-MEX on litigation support matters"
    },
    overview: [
      "We support counsel on technically complex intellectual property disputes by helping organize evidence, frame technical issues, and prepare analysis that can withstand adversarial scrutiny.",
      "This work is useful when a case requires strong technical understanding but the legal team needs outside support to accelerate review, develop opinions, or pressure-test technical arguments.",
      "The service is built to complement trial and dispute counsel rather than duplicate their role."
    ],
    deliverables: [
      "Expert report and opinion support",
      "Technical issue framing for pleadings and case theory",
      "Prior-art and evidentiary research support",
      "Deposition and testimony preparation assistance",
      "Ongoing technical coordination with counsel"
    ],
    industries: [
      "Patent Litigation",
      "Trade Secret Disputes",
      "Telecommunications Matters",
      "Software & Platform Cases",
      "Hardware and Electronics Cases",
      "Multi-Expert Proceedings"
    ],
    process: [
      {
        title: "Case Orientation",
        description: "Review the theory of the case, asserted rights, technical record, and key factual issues."
      },
      {
        title: "Analytical Development",
        description: "Prepare structured technical analysis that supports claim construction, infringement, validity, or expert positions."
      },
      {
        title: "Litigation Coordination",
        description: "Work with counsel through reporting, evidence refinement, and preparation for contested stages of the matter."
      }
    ],
    differentiators: [
      {
        title: "Support For Complex Technical Records",
        description: "The firm can help organize and interpret dense technical material in a way that supports legal theory."
      },
      {
        title: "Efficient Counsel Collaboration",
        description: "Work is delivered to fit the pace and structure of active disputes instead of as standalone academic analysis."
      },
      {
        title: "Scientist-Led Technical Review",
        description: "Technical subject matter is handled by professionals used to working at inventor and expert level."
      }
    ]
  },

  education: {
    snapshot: {
      positioning: "IP education for leadership teams, founders, engineers, and professional staff who need usable legal understanding, not abstract theory.",
      coverage: "Executive workshops, startup training, operational team sessions, and professional development around patents, trademarks, confidentiality, and IP process discipline.",
      jurisdiction: "Training can be tailored to Canadian and U.S. legal realities depending on the audience and growth stage."
    },
    headings: {
      overview: "Training designed to improve real IP decision-making",
      scope: "Common education and workshop formats",
      process: "How training programs are built",
      whyChoose: "Why organizations retain IP-MEX for IP education"
    },
    overview: [
      "We provide intellectual property education for organizations that want their teams to make better legal and commercial decisions around innovation, branding, confidentiality, and portfolio development.",
      "Training is tailored to the audience, whether that means founders, executives, engineering teams, operational staff, or professionals seeking deeper IP capability.",
      "The emphasis is on practical understanding that can be applied immediately inside the business."
    ],
    deliverables: [
      "Executive and board workshops",
      "Startup IP fundamentals training",
      "Role-specific internal seminars",
      "Paralegal and professional development support",
      "Custom IP awareness programs"
    ],
    industries: [
      "Startup Accelerators",
      "In-House Legal Teams",
      "Engineering Organizations",
      "Innovation Hubs",
      "Professional Education Programs",
      "Commercialization Offices"
    ],
    process: [
      {
        title: "Audience Scoping",
        description: "Identify who needs training, what decisions they make, and where legal misunderstanding is creating risk."
      },
      {
        title: "Program Design",
        description: "Build a training structure using examples, scenarios, and terminology appropriate to that audience."
      },
      {
        title: "Knowledge Integration",
        description: "Deliver the program with materials and follow-up guidance that support ongoing internal use."
      }
    ],
    differentiators: [
      {
        title: "Practical Rather Than Academic",
        description: "Sessions are designed around decisions teams actually face in product, branding, confidentiality, and growth planning."
      },
      {
        title: "Technical Audience Fit",
        description: "The firm can train engineers, founders, and technical leaders in language that respects their working context."
      },
      {
        title: "Flexible Delivery",
        description: "Programs can be shaped for startups, in-house teams, leadership groups, and professional-development settings."
      }
    ]
  }
};