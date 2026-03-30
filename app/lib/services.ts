export type ServiceItem = {
  label: string;
  slug: string;
  tagline: string;
  description: string;
  intro: string;
  heroImage: string;
  icon?: string;
  featured?: boolean;
  highlights?: string[];
  cta?: {
    title: string;
    description: string;
    buttonLabel: string;
  };
  seo?: {
    title: string;
    description: string;
  };
  children?: ServiceItem[];
};

export const SERVICES: ServiceItem[] = [

  {
    label: "Patents",
    slug: "patents",
    tagline: "Protecting Innovation with Strategic Precision",
    description:
      "Comprehensive patent legal services spanning drafting, prosecution, global portfolio architecture, and enforcement.",
    intro:
      "We help technology-driven organizations transform innovation into defensible, strategically positioned intellectual property assets across global markets.",
    heroImage: "/images/services/patents.jpg",
    icon: "ShieldCheck",
    featured: true,
    highlights: [
      "Global filing strategy",
      "Advanced claim drafting",
      "Prior-art & landscape analysis",
      "Portfolio optimization",
      "Infringement & validity opinions"
    ],
    cta: {
      title: "Secure Your Innovation",
      description:
        "Discuss your patent strategy with our senior lawyers and structure long-term protection.",
      buttonLabel: "Schedule Consultation"
    },
    seo: {
      title: "Patent Strategy & Prosecution Services",
      description:
        "Expert patent drafting, prosecution, and global portfolio management for advanced technology companies."
    }
  },

  {
    label: "Trademarks",
    slug: "trademarks",
    tagline: "Protecting Brand Identity Across Jurisdictions",
    description:
      "Strategic trademark development, clearance, filing, and enforcement services.",
    intro:
      "We build and protect brand assets that support long-term market positioning and commercial growth.",
    heroImage: "/images/services/trademarks.jpg",
    icon: "Trademark",
    highlights: [
      "Global trademark filings",
      "Brand clearance searches",
      "Opposition & enforcement",
      "Portfolio management"
    ],
    cta: {
      title: "Protect Your Brand",
      description:
        "Strengthen and secure your brand identity in domestic and international markets.",
      buttonLabel: "Start Trademark Review"
    },
    seo: {
      title: "Trademark Clearance, Filing & Enforcement Services",
      description:
        "Trademark legal services from an Ottawa intellectual property law firm, including clearance, filing, portfolio management, and enforcement across Canada and the USA."
    }
  },

  {
    label: "IP Strategy",
    slug: "ip-strategy",
    tagline: "Aligning IP with Business Growth",
    description:
      "Commercially aligned IP planning and structured portfolio architecture.",
    intro:
      "We integrate intellectual property strategy into product roadmaps, investment planning, and global expansion objectives.",
    heroImage: "/images/services/strategy.jpg",
    icon: "ChartBar",
    featured: true,
    highlights: [
      "Freedom-to-operate analysis",
      "Competitive intelligence",
      "Design-around strategy",
      "Defensive structuring"
    ],
    cta: {
      title: "Align IP With Business Growth",
      description:
        "Work with IP-MEX to structure patent, trademark, and portfolio strategy around product, funding, and expansion goals.",
      buttonLabel: "Discuss IP Strategy"
    },
    seo: {
      title: "IP Strategy Services For Technology Companies",
      description:
        "Strategic intellectual property counsel from an Ottawa IP law firm, including freedom-to-operate analysis, portfolio planning, and defensive positioning."
    },
    children: [
      {
        label: "IP Audit",
        slug: "ip-audit",
        tagline: "Comprehensive IP Risk Assessment",
        description:
          "Structured intellectual property audit services for startups and enterprises.",
        intro:
          "We evaluate existing IP assets, governance processes, and exposure risks to strengthen long-term protection.",
        heroImage: "/images/services/strategy.jpg",
        icon: "ClipboardCheck",
        highlights: [
          "Portfolio review",
          "Documentation assessment",
          "Risk mapping",
          "Governance evaluation"
        ],
        cta: {
          title: "Review Your Existing IP Position",
          description:
            "Identify gaps, ownership issues, filing weaknesses, and governance risks before they affect diligence, fundraising, or growth.",
          buttonLabel: "Request IP Audit"
        },
        seo: {
          title: "IP Audit Services",
          description:
            "IP audit legal services from an Ottawa intellectual property law firm for portfolio review, risk mapping, governance assessment, and diligence readiness."
        }
      },
      {
        label: "Valuation",
        slug: "valuation",
        tagline: "Objective Portfolio Valuation",
        description:
          "IP valuation services for investment, licensing, and M&A transactions.",
        intro:
          "We deliver defensible, structured valuation insights using calibrated scoring methodologies.",
        heroImage: "/images/services/valuation.jpg",
        icon: "Scale",
        highlights: [
          "Asset scoring models",
          "Heatmap visualization",
          "Licensing counsel",
          "Transaction support"
        ],
        cta: {
          title: "Understand The Value Of Your Portfolio",
          description:
            "Support licensing, financing, diligence, and transactions with structured IP valuation analysis grounded in legal and technical review.",
          buttonLabel: "Discuss Valuation"
        },
        seo: {
          title: "Intellectual Property Valuation Services",
          description:
            "IP valuation services from an Ottawa IP law firm for licensing, M&A, venture financing, and strategic portfolio assessment."
        }
      },
      {
        label: "Virtual Counsel",
        slug: "virtual-counsel",
        tagline: "Embedded Strategic IP Leadership",
        description:
          "Executive-level IP oversight for scaling technology companies.",
        intro:
          "We function as external IP leadership, implementing governance frameworks and structured innovation protection.",
        heroImage: "/images/services/virtual-counsel.jpg",
        icon: "UserCog",
        highlights: [
          "Invention mining",
          "IP governance",
          "Budget forecasting",
          "Global coordination"
        ],
        cta: {
          title: "Add Fractional IP Leadership",
          description:
            "Use IP-MEX as embedded outside counsel for portfolio governance, invention capture, budget planning, and cross-border filing management.",
          buttonLabel: "Request Virtual Counsel"
        },
        seo: {
          title: "Virtual IP Counsel Services",
          description:
            "Fractional IP counsel services from an Ottawa intellectual property law firm for startups and growth-stage companies needing ongoing strategic support."
        }
      }
    ]
  },

  {
    label: "Enforcement",
    slug: "enforcement",
    tagline: "Defending Intellectual Property Rights",
    description:
      "Technical infringement analysis and enforcement strategy development.",
    intro:
      "We support legal teams and organizations with structured technical analysis and defensible expert insight.",
    heroImage: "/images/services/enforcement.jpg",
    icon: "Gavel",
    highlights: [
      "Infringement assessment",
      "Enforcement roadmap",
      "Validity and exposure review",
      "Counsel support"
    ],
    cta: {
      title: "Strengthen Enforcement Positioning",
      description:
        "Assess infringement, risk, remedy options, and next-step strategy with legal and technical support tailored to complex IP disputes.",
      buttonLabel: "Discuss Enforcement Strategy"
    },
    seo: {
      title: "IP Enforcement Strategy Services",
      description:
        "Enforcement strategy and infringement analysis from an Ottawa intellectual property law firm serving clients across Canada and the USA."
    },
    children: [
      {
        label: "Infringement",
        slug: "infringement",
        tagline: "Technical Claim Analysis",
        description:
          "Comprehensive infringement assessment across advanced technological domains.",
        intro:
          "We conduct detailed claim comparison and evidentiary review to strengthen enforcement positioning.",
        heroImage: "/images/services/infringement.jpg",
        icon: "Search",
        highlights: [
          "Claim-to-product mapping",
          "Evidence review",
          "Validity coordination",
          "Technical dispute analysis"
        ],
        cta: {
          title: "Assess Whether Rights Are Being Infringed",
          description:
            "Get structured technical and legal analysis to understand whether a product, process, or market activity raises infringement issues.",
          buttonLabel: "Request Infringement Review"
        },
        seo: {
          title: "Patent Infringement Analysis Services",
          description:
            "Technical infringement analysis from an Ottawa IP law firm for patents and complex technology disputes across Canada and the USA."
        }
      },
      {
        label: "Litigation Support",
        slug: "litigation-support",
        tagline: "Technical Litigation Counsel",
        description:
          "Expert-level technical legal services for IP disputes.",
        intro:
          "We assist counsel with structured analysis, prior-art review, and technical documentation.",
        heroImage: "/images/services/enforcement.jpg",
        icon: "FileText",
        highlights: [
          "Expert report support",
          "Prior-art research",
          "Technical case analysis",
          "Counsel coordination"
        ],
        cta: {
          title: "Support Complex IP Litigation With Technical Depth",
          description:
            "Work with IP-MEX on expert preparation, technical evidence, prior-art analysis, and structured support for litigation teams.",
          buttonLabel: "Request Litigation Support"
        },
        seo: {
          title: "IP Litigation Support Services",
          description:
            "Technical litigation support from an Ottawa intellectual property law firm, including expert analysis, prior-art review, and evidentiary support."
        }
      }
    ]
  },

  {
    label: "Education",
    slug: "education",
    tagline: "Building Sustainable IP Awareness",
    description:
      "Executive workshops, startup training, and professional development programs.",
    intro:
      "We deliver tailored intellectual property education programs that strengthen innovation discipline and reduce organizational risk.",
    heroImage: "/images/services/education.jpg",
    icon: "AcademicCap",
    highlights: [
      "Executive workshops",
      "Startup IP foundation training",
      "Corporate seminars",
      "Paralegal certification prep"
    ],
    cta: {
      title: "Train Your Team",
      description:
        "Empower your organization with structured intellectual property literacy.",
      buttonLabel: "Request Training Program"
    },
    seo: {
      title: "Intellectual Property Training Services",
      description:
        "IP training and education services from an Ottawa intellectual property law firm for startups, in-house teams, executives, and professionals."
    }
  }
];

export function getAllServices(): ServiceItem[] {
  const result: ServiceItem[] = [];

  for (const service of SERVICES) {
    result.push(service);

    if (service.children) {
      result.push(...service.children);
    }
  }

  return result;
}