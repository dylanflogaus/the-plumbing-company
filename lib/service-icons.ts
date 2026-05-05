import type { LucideIcon } from "lucide-react";
import {
  ArrowDownCircle,
  Bath,
  Droplets,
  Flame,
  Waves,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIconName } from "@/types";

const map: Record<LucideIconName, LucideIcon> = {
  Zap,
  Waves,
  Flame,
  Droplets,
  Wrench,
  Bath,
  ArrowDownCircle,
  Wind,
};

export function serviceIcon(name: LucideIconName): LucideIcon {
  return map[name];
}
