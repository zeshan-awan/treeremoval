export const SITE_URL = "https://www.emergencytreeremovalhp.com";
export const SITE_NAME = "High Point Emergency Tree Service";
export const PRIMARY_LOCATION = "High Point, NC";
export const BUSINESS_PHONE_DISPLAY = "03010522223";
export const BUSINESS_PHONE_LINK = "+103010522223";

export const defaultSEO = {
  title: "High Point Tree Service | Emergency Tree Removal in High Point, NC",
  description:
    "Fast, affordable tree service in High Point, NC. Licensed & insured experts for emergency tree removal, trimming, stump grinding, and storm cleanup. Call 03010522223 for 24/7 help.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "tree service high point nc, emergency tree removal high point, tree trimming high point nc, stump grinding high point, storm cleanup high point"
    }
  ]
};

export type ServiceSlug =
  | "emergency-tree-care-high-point-nc"
  | "tree-removal-high-point-nc"
  | "stump-grinding-high-point-nc"
  | "land-clearing-high-point-nc"
  | "storm-cleanup-high-point-nc"
  | "tree-trimming-high-point-nc"
  | "shrub-trimming-high-point-nc";

export const servicePages: Record<
  ServiceSlug,
  {
    name: string;
    shortName: string;
    h1: string;
    title: string;
    description: string;
    slug: ServiceSlug;
  }
> = {
  "emergency-tree-care-high-point-nc": {
    slug: "emergency-tree-care-high-point-nc",
    name: "Emergency Tree Care High Point NC",
    shortName: "Emergency Tree Care",
    h1: "24/7 Emergency Tree Care in High Point, NC",
    title:
      "Emergency Tree Care High Point NC | 24/7 Emergency Tree Removal Service",
    description:
      "Need emergency tree care in High Point, NC? We provide 24/7 emergency tree removal, storm damage cleanup, and hazardous tree response. Call now for fast help."
  },
  "tree-removal-high-point-nc": {
    slug: "tree-removal-high-point-nc",
    name: "Tree Removal High Point NC",
    shortName: "Tree Removal Experts",
    h1: "Safe, Professional Tree Removal in High Point, NC",
    title:
      "Tree Removal High Point NC | Licensed & Insured Tree Removal Experts",
    description:
      "Professional tree removal in High Point, NC for dangerous, dead, or overgrown trees. Licensed and insured crew with modern equipment. Free estimates."
  },
  "stump-grinding-high-point-nc": {
    slug: "stump-grinding-high-point-nc",
    name: "Stump Grinding High Point NC",
    shortName: "Stump Grinding Services",
    h1: "Stump Grinding & Removal in High Point, NC",
    title:
      "Stump Grinding High Point NC | Fast & Affordable Stump Removal Service",
    description:
      "Clean up old stumps with professional stump grinding in High Point, NC. Fast, affordable stump removal that protects your yard and increases curb appeal."
  },
  "land-clearing-high-point-nc": {
    slug: "land-clearing-high-point-nc",
    name: "Land Clearing High Point NC",
    shortName: "Land & Lot Clearing",
    h1: "Land & Lot Clearing in High Point, NC",
    title:
      "Land Clearing High Point NC | Brush, Lot & Site Clearing Service",
    description:
      "Full-service land and lot clearing in High Point, NC. Remove trees, brush, and overgrowth to prepare your property for building, fencing, or landscaping."
  },
  "storm-cleanup-high-point-nc": {
    slug: "storm-cleanup-high-point-nc",
    name: "Storm Cleanup High Point NC",
    shortName: "Storm & Damage Cleanup",
    h1: "Storm Damage Tree Cleanup in High Point, NC",
    title:
      "Storm Cleanup High Point NC | Fallen Tree & Debris Removal Service",
    description:
      "Storm damage tree cleanup in High Point, NC. We remove fallen trees and debris safely and quickly so you can get back to normal faster."
  },
  "tree-trimming-high-point-nc": {
    slug: "tree-trimming-high-point-nc",
    name: "Tree Trimming High Point NC",
    shortName: "Tree Trimming & Pruning",
    h1: "Tree Trimming & Pruning in High Point, NC",
    title:
      "Tree Trimming High Point NC | Expert Tree Pruning & Shaping Service",
    description:
      "Professional tree trimming in High Point, NC to improve safety, health, and appearance of your trees. Seasonal pruning, canopy thinning, and shaping."
  },
  "shrub-trimming-high-point-nc": {
    slug: "shrub-trimming-high-point-nc",
    name: "Shrub Trimming High Point NC",
    shortName: "Shrub & Hedge Trimming",
    h1: "Shrub & Hedge Trimming in High Point, NC",
    title:
      "Shrub Trimming High Point NC | Hedge Shaping & Maintenance Service",
    description:
      "Keep your shrubs and hedges neat with expert trimming in High Point, NC. Regular maintenance for clean lines, healthy growth, and better curb appeal."
  }
};

export const serviceAreaCities = [
  "High Point",
  "Greensboro",
  "Winston-Salem",
  "Jamestown",
  "Archdale",
  "Trinity",
  "Kernersville",
  "Thomasville",
  "Randleman",
  "Colfax"
];

