import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.brand,
    short_name: SITE.shortName,
    description: SITE.brandTagline,
    start_url: "/",
    display: "standalone",
    background_color: "#040711",
    theme_color: "#040711",
    icons: [],
  };
}
