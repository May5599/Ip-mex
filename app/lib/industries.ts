// export type Industry = {
//   slug: string
//   name: string
//   description: string
//   image: string
//   highlights: string[]
//   challenges: string[]
// }

// export const INDUSTRIES: Industry[] = [
//   {
//     slug: "ai",
//     name: "Artificial Intelligence",
//     description:
//       "Patent strategy for machine learning systems, data platforms, and AI infrastructure.",
//     image: "/industries/ai.jpg",
//     highlights: [
//       "Machine learning architectures",
//       "AI platform innovation",
//       "Data infrastructure systems"
//     ],
//     challenges: [
//       "Rapid innovation cycles",
//       "Dense patent landscapes",
//       "Global technology competition"
//     ]
//   },
//   {
//     slug: "software",
//     name: "Software Platforms",
//     description:
//       "IP strategy for enterprise software, developer ecosystems, and distributed systems.",
//     image: "/industries/software.jpg",
//     highlights: [
//       "Cloud infrastructure",
//       "Developer platforms",
//       "Distributed systems"
//     ],
//     challenges: [
//       "Overlapping software patents",
//       "Platform competition",
//       "Licensing exposure"
//     ]
//   },
//   {
//     slug: "semiconductor",
//     name: "Semiconductors",
//     description:
//       "Patent architecture for chip design, embedded systems, and advanced electronics.",
//     image: "/industries/chip.jpg",
//     highlights: [
//       "Chip architecture innovation",
//       "Embedded hardware systems",
//       "Advanced semiconductor design"
//     ],
//     challenges: [
//       "Capital-intensive R&D",
//       "Complex supply chains",
//       "Long development cycles"
//     ]
//   },
//   {
//     slug: "cybersecurity",
//     name: "Cybersecurity",
//     description:
//       "IP protection for encryption, threat detection platforms, and security infrastructure.",
//     image: "/industries/security.jpg",
//     highlights: [
//       "Encryption technology",
//       "Threat detection systems",
//       "Security infrastructure"
//     ],
//     challenges: [
//       "Constant threat evolution",
//       "Patent overlap in cryptography",
//       "Regulatory pressure"
//     ]
//   },
//   {
//     slug: "fintech",
//     name: "Financial Technology",
//     description:
//       "Strategic IP programs for digital finance, payments infrastructure, and trading platforms.",
//     image: "/industries/fintech.jpg",
//     highlights: [
//       "Payment systems",
//       "Financial algorithms",
//       "Digital asset platforms"
//     ],
//     challenges: [
//       "Regulatory complexity",
//       "Fast global competition",
//       "Platform defensibility"
//     ]
//   },
//   {
//     slug: "biotech",
//     name: "Biotechnology",
//     description:
//       "Intellectual property strategy for biotech innovation, therapeutics, and life sciences.",
//     image: "/industries/biotech.jpg",
//     highlights: [
//       "Therapeutic development",
//       "Genetic technologies",
//       "Bioengineering innovation"
//     ],
//     challenges: [
//       "Long research timelines",
//       "Regulatory approvals",
//       "High R&D investment"
//     ]
//   },
//   {
//     slug: "telecom",
//     name: "Telecommunications",
//     description:
//       "Patent strategy for wireless systems, network infrastructure, and connectivity platforms.",
//     image: "/industries/telecom.jpg",
//     highlights: [
//       "Wireless protocols",
//       "Network infrastructure",
//       "Connectivity platforms"
//     ],
//     challenges: [
//       "Standards competition",
//       "Patent licensing frameworks",
//       "Global infrastructure scale"
//     ]
//   },
//   {
//     slug: "autonomous",
//     name: "Autonomous Systems",
//     description:
//       "IP architecture for robotics, autonomous vehicles, and intelligent systems.",
//     image: "/industries/autonomous.jpg",
//     highlights: [
//       "Autonomous navigation",
//       "Robotics platforms",
//       "Sensor technologies"
//     ],
//     challenges: [
//       "Cross-disciplinary technology",
//       "Safety regulation",
//       "Complex hardware-software integration"
//     ]
//   }
// ]

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
description:
"Patent strategy for machine learning systems, AI infrastructure, and data platforms.",
image: "/industries/ai.jpg",
highlights: [
"Machine learning architectures",
"AI infrastructure platforms",
"Data-driven systems"
],
challenges: [
"Rapid innovation cycles",
"Dense patent landscapes",
"Global competition"
]
},
{
slug: "software",
name: "Software Platforms",
description:
"IP strategy for enterprise platforms, developer ecosystems, and distributed software.",
image: "/industries/software.jpg",
highlights: [
"Cloud infrastructure",
"Developer ecosystems",
"Distributed architectures"
],
challenges: [
"Platform competition",
"Licensing exposure",
"Patent overlap"
]
},
{
slug: "semiconductor",
name: "Semiconductors",
description:
"Strategic IP programs for chip design, embedded electronics, and hardware systems.",
image: "/industries/chip.jpg",
highlights: [
"Chip architecture",
"Embedded hardware",
"Advanced fabrication"
],
challenges: [
"Capital intensive R&D",
"Complex supply chains",
"Long development cycles"
]
},
{
slug: "cybersecurity",
name: "Cybersecurity",
description:
"Intellectual property protection for encryption technologies and threat detection systems.",
image: "/industries/security.jpg",
highlights: [
"Encryption technology",
"Threat detection systems",
"Security infrastructure"
],
challenges: [
"Constant threat evolution",
"Regulatory pressure",
"Cryptography patent overlap"
]
},
{
slug: "fintech",
name: "Financial Technology",
description:
"IP architecture for digital payments, financial algorithms, and platform infrastructure.",
image: "/industries/fintech.jpg",
highlights: [
"Digital payment systems",
"Financial algorithms",
"Platform infrastructure"
],
challenges: [
"Regulatory complexity",
"Global fintech competition",
"Platform defensibility"
]
},
{
slug: "biotech",
name: "Biotechnology",
description:
"Patent strategy for therapeutics, bioengineering innovation, and life sciences platforms.",
image: "/industries/biotech.jpg",
highlights: [
"Therapeutic development",
"Genetic technologies",
"Bioengineering systems"
],
challenges: [
"Long R&D timelines",
"Regulatory approvals",
"High capital investment"
]
},
{
slug: "telecom",
name: "Telecommunications",
description:
"Patent programs for wireless infrastructure, network architecture, and connectivity.",
image: "/industries/telecom.jpg",
highlights: [
"Wireless protocols",
"Network infrastructure",
"Connectivity systems"
],
challenges: [
"Standards competition",
"Patent licensing structures",
"Infrastructure scale"
]
},
{
slug: "autonomous",
name: "Autonomous Systems",
description:
"IP architecture for robotics, autonomous mobility systems, and intelligent machines.",
image: "/industries/autonomous.jpg",
highlights: [
"Autonomous navigation",
"Robotics platforms",
"Sensor technology"
],
challenges: [
"Safety regulations",
"Cross-disciplinary tech",
"Hardware-software integration"
]
}
]
