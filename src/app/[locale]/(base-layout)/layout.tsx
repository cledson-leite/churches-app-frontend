import BaseLayout from "@/components/templates/BaseLayout";

export default function Baselayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>;
}