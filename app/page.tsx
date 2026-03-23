import Hero from "./sections/Hero";
import Credibility from "./sections/Credibility";
import Capabilities from "./sections/Capabilities";
import Insights from "./sections/Insights";
import ContactPrompt from "./sections/ContactPrompt";
import BlogPreview from "./sections/FeaturedBlog";

export const metadata = {
  title: "IP-MEX | Patent & Trademark Law Firm Canada",
  description:
    "IP-MEX is a Canadian IP law firm providing patent strategy, trademark registration, and IP counsel to startups, SMEs, and enterprises in Canada, the USA, and globally.",
  openGraph: {
    title: "IP-MEX | Canadian IP Law Firm",
    description: "IP-MEX is a Canadian IP law firm providing patent strategy, trademark registration, and IP counsel to startups, SMEs, and enterprises in Canada, the USA, and globally.",
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
