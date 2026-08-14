import {
  Building2,
  Users,
  Tent,
  Droplets,
  Leaf,
  UtensilsCrossed,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Users,
  Tent,
  Droplets,
  Leaf,
  UtensilsCrossed,
  ClipboardCheck,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Leaf;
  return <Icon className={className} />;
}
