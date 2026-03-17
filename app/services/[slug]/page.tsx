import { notFound } from "next/navigation";
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

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  const services = getAllServices();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}