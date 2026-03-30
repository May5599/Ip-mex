import Hero from "./sections/Hero";
import Credibility from "./sections/Credibility";
import Capabilities from "./sections/Capabilities";
import Insights from "./sections/Insights";
import ContactPrompt from "./sections/ContactPrompt";
import BlogPreview from "./sections/FeaturedBlog";

export const metadata = {
  title: "IP-MEX | Intellectual Property Law Firm | Ottawa, Ontario",
  description:
    "IP-MEX is an intellectual property law firm in Ottawa, Ontario providing patent strategy, trademark registration, and IP legal counsel to startups, SMEs, and enterprises across Canada and the USA.",
  openGraph: {
    title: "IP-MEX | IP Law Firm | Ottawa, Ontario",
    description: "IP-MEX is an intellectual property law firm in Ottawa, Ontario providing patent strategy, trademark registration, and IP legal counsel across Canada and the USA.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Credibility />
      <Capabilities />
      <Insights />
      <BlogPreview />
      <ContactPrompt />
    </main>
  );
}
