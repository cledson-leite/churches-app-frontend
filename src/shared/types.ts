import { Icons } from "@/components/atoms/Icons";

export type SubRoute = {
  label: string; 
  href: string
}

export type Route = {
  icon: keyof typeof Icons;
  label: string;
  href: string;
  subItems?: SubRoute[];
}
