import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NERQIVA Studio",
    short_name: "NERQIVA",
    description: "High-converting business website design and 1-click WhatsApp booking systems delivered in 24 Hours.",
    start_url: "/",
    display: "standalone",
    background_color: "#080B12",
    theme_color: "#0D0D11",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
