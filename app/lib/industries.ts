export type Industry = {
  slug: string
  name: string
  description: string
  image: string
  highlights: string[]
  challenges: string[]
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "ai",
    name: "Artificial Intelligence",
    description: "Patent strategy for machine learning systems, AI infrastructure, and data platforms.",
    image: "/insights/ai.jpg",
    highlights: ["Machine learning architectures", "AI infrastructure platforms", "Data-driven systems"],
    challenges: ["Rapid innovation cycles", "Dense patent landscapes", "Global competition"]
  },
  {
    slug: "software",
    name: "Software Platforms",
    description: "IP strategy for enterprise platforms, developer ecosystems, and distributed software.",
    image: "/images/services/strategy.jpg",
    highlights: ["Cloud infrastructure", "Developer ecosystems", "Distributed architectures"],
    challenges: ["Platform competition", "Licensing exposure", "Patent overlap"]
  },
  {
    slug: "semiconductor",
    name: "Semiconductors",
    description: "Strategic IP programs for chip design, embedded electronics, and hardware systems.",
    image: "/insights/semiconductor.jpg",
    highlights: ["Chip architecture", "Embedded hardware", "Advanced fabrication"],
    challenges: ["Capital intensive R&D", "Complex supply chains", "Long development cycles"]
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    description: "Intellectual property protection for encryption technologies and threat detection systems.",
    image: "/images/services/enforcement.jpg",
    highlights: ["Encryption technology", "Threat detection systems", "Security infrastructure"],
    challenges: ["Constant threat evolution", "Regulatory pressure", "Cryptography patent overlap"]
  },
  {
    slug: "fintech",
    name: "Financial Technology",
    description: "IP architecture for digital payments, financial algorithms, and platform infrastructure.",
    image: "/insights/fintech.jpg",
    highlights: ["Digital payment systems", "Financial algorithms", "Platform infrastructure"],
    challenges: ["Regulatory complexity", "Global fintech competition", "Platform defensibility"]
  },
  {
    slug: "biotech",
    name: "Biotechnology",
    description: "Patent strategy for therapeutics, bioengineering innovation, and life sciences platforms.",
    image: "/insights/biotech.jpg",
    highlights: ["Therapeutic development", "Genetic technologies", "Bioengineering systems"],
    challenges: ["Long R&D timelines", "Regulatory approvals", "High capital investment"]
  },
  {
    slug: "telecom",
    name: "Telecommunications",
    description: "Patent programs for wireless infrastructure, network architecture, and connectivity.",
    image: "/images/services/patents.jpg",
    highlights: ["Wireless protocols", "Network infrastructure", "Connectivity systems"],
    challenges: ["Standards competition", "Patent licensing structures", "Infrastructure scale"]
  },
  {
    slug: "autonomous",
    name: "Autonomous Systems",
    description: "IP architecture for robotics, autonomous mobility systems, and intelligent machines.",
    image: "/images/services/infringement.jpg",
    highlights: ["Autonomous navigation", "Robotics platforms", "Sensor technology"],
    challenges: ["Safety regulations", "Cross-disciplinary tech", "Hardware-software integration"]
  }
]
