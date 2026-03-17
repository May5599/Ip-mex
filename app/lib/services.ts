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
      "Comprehensive patent advisory spanning drafting, prosecution, global portfolio architecture, and enforcement.",
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
        "Discuss your patent strategy with our senior advisors and structure long-term protection.",
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
    children: [
      {
        label: "IP Audit",
        slug: "ip-audit",
        tagline: "Comprehensive IP Risk Assessment",
        description:
          "Structured intellectual property audit services for startups and enterprises.",
        intro:
          "We evaluate existing IP assets, governance processes, and exposure risks to strengthen long-term protection.",
        heroImage: "/images/services/ip-audit.jpg",
        icon: "ClipboardCheck",
        highlights: [
          "Portfolio review",
          "Documentation assessment",
          "Risk mapping",
          "Governance evaluation"
        ]
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
          "Licensing advisory",
          "Transaction support"
        ]
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
        ]
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
        icon: "Search"
      },
      {
        label: "Litigation Support",
        slug: "litigation-support",
        tagline: "Technical Litigation Advisory",
        description:
          "Expert-level technical advisory services for IP disputes.",
        intro:
          "We assist counsel with structured analysis, prior-art review, and technical documentation.",
        heroImage: "/images/services/litigation.jpg",
        icon: "FileText"
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