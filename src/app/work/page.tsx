import { Metadata } from "next";
import WorkCatalog from "../../components/WorkCatalog";

export const metadata: Metadata = {
  title: "Selected Work & Live Website Demos",
  description:
    "Explore NERQIVA's portfolio of live interactive website themes for salons, beauty studios, luxury bridal boutiques, gyms, and local service brands.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Selected Work & Live Website Demos | NERQIVA Studio",
    description:
      "Explore NERQIVA's portfolio of live interactive website themes for salons, beauty studios, luxury bridal boutiques, and local services.",
    url: "https://nerqiva.vercel.app/work",
  },
};

export default function WorkPage() {
  return <WorkCatalog />;
}
