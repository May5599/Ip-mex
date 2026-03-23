import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllServices } from "@/app/lib/services";
import ServiceTemplate from "@/app/ui/ServiceTemplate";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllServices().map(service => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getAllServices().find(s => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | IP-MEX",
      description: "The service page you are looking for could not be found.",
    };
  }

  const title = service.seo?.title
    ? `${service.seo.title} | IP-MEX`
    : `${service.label} Services | IP-MEX`;

  const description = service.seo?.description || service.intro;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  const services = getAllServices();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}