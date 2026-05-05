export type LucideIconName =
  | "Zap"
  | "Waves"
  | "Flame"
  | "Droplets"
  | "Wrench"
  | "Bath"
  | "ArrowDownCircle"
  | "Wind";

export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  icon: LucideIconName;
  featured?: boolean;
  includedTasks: string[];
  priceLow: number;
  priceHigh: number;
  reviewHint?: string;
}

export interface Review {
  name: string;
  location: string;
  text: string;
  date: string;
  rating?: number;
  topic?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrustItem {
  icon: "shield" | "clock" | "badge";
  title: string;
  description: string;
}
