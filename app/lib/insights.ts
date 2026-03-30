export type Insight = {
	id: number;
	slug: string;
	category: string;
	title: string;
	excerpt: string;
	image: string;
	content: string;
	author: string;
	date: string;
	externalUrl?: string;
};

export const INSIGHTS: Insight[] = [
	{
		id: 1,
		slug: "adr-global-ip-disputes-part-1",
		category: "ADR Series",
		title:
			"ADR for Global IP Disputes, Part 1: Resources for Disputing Parties",
		excerpt:
			"Part 1 outlines the institutional resources available to parties handling cross-border IP disputes, with a focus on WIPO ADR mechanisms and Singapore-based dispute resolution options.",
		image: "/insights/semiconductor.jpg",
		content: `
# Part 1 Overview

This article introduces the ADR resources available to parties involved in international intellectual property disputes.

# Key Focus Areas

- WIPO Arbitration and Mediation Center services for IP and technology matters
- The role of the WIPO Singapore Office and IPOS in cross-border dispute resolution
- How mediation, arbitration, expedited arbitration, and expert determination can be used in practice

# Why It Matters

For organizations operating internationally, this piece gives a practical starting point for understanding where global IP disputes can be resolved outside of court and what institutional support is available.
`,
		author: "Dr. Daisy Williams",
		date: "Part 1",
		externalUrl:
			"https://adric.ca/using-alternative-dispute-resolution-adr-to-settle-global-intellectual-property-ip-disputes-part-1-the-resources-available-to-disputing-parties/"
	},
	{
		id: 2,
		slug: "adr-global-ip-disputes-part-2",
		category: "ADR Series",
		title:
			"ADR for Global IP Disputes, Part 2: Advantages Over Court Litigation",
		excerpt:
			"Part 2 explains why ADR can be better suited than court litigation for international IP disputes, especially where speed, confidentiality, cost control, and technical expertise matter.",
		image: "/insights/ai.jpg",
		content: `
# Part 2 Overview

This article examines the practical advantages of ADR when compared with court litigation in global IP disputes.

# Key Focus Areas

- Preserving commercial relationships through more flexible dispute processes
- Reducing time and cost when compared with multi-jurisdiction court proceedings
- Protecting confidential technical and business information
- Selecting decision-makers with IP and technical subject-matter expertise

# Why It Matters

For businesses managing patent, trademark, or technology disputes across borders, this piece highlights why ADR can offer a more commercially workable path to resolution.
`,
		author: "Dr. Daisy Williams",
		date: "Part 2",
		externalUrl:
			"https://adric.ca/using-alternative-dispute-resolution-adr-to-settle-global-intellectual-property-ip-disputes-part-2-the-advantages-of-adr-over-litigation-in-court/"
	},
	{
		id: 3,
		slug: "adr-global-ip-disputes-part-3",
		category: "ADR Series",
		title:
			"ADR for Global IP Disputes, Part 3: How the CISG Affects Cross-Border Transactions",
		excerpt:
			"Part 3 looks at how the CISG allocates risk in cross-border transactions involving third-party IP claims, and how those rules can affect ADR outcomes.",
		image: "/insights/biotech.jpg",
		content: `
# Part 3 Overview

This article explores how the CISG can influence the resolution of cross-border IP disputes handled through ADR.

# Key Focus Areas

- Seller obligations where goods may be affected by third-party IP rights
- Buyer obligations and notice issues in international transactions
- The role of article 79 and related defenses
- How CISG rules can shape risk allocation in ADR proceedings

# Why It Matters

For cross-border transactions involving goods that may implicate patent or other IP rights, this piece explains how commercial contract rules can materially affect dispute strategy and liability.
`,
		author: "Dr. Daisy Williams",
		date: "Part 3",
		externalUrl:
			"https://adric.ca/using-alternative-dispute-resolution-adr-to-settle-global-intellectual-property-ip-disputes-part-3-the-impact-of-the-convention-on-international-sale-of-goods-cisg-on-cross-b/"
	}
];

export function getInsightHref(insight: Insight) {
	return insight.externalUrl ?? `/insights/${insight.slug}`;
}