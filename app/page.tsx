import Hero from "./sections/Hero";
import Credibility from "./sections/Credibility";
import Capabilities from "./sections/Capabilities";
import Insights from "./sections/Insights";
import ContactPrompt from "./sections/ContactPrompt";
import BlogPreview from "./sections/FeaturedBlog";

export const metadata = {
  title: "IP-MEX | Patent & Trademark Law Firm Canada",
  description:
    "IP-MEX Inc. is a Canadian intellectual property law firm specializing in patent strategy, trademark protection, and IP litigation support. Serving startup companies, SMEs, and multinational enterprises across North America.",
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
