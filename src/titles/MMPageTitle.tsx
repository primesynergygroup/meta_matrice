import { cn } from "@/lib/utils";

const MMPageTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={cn("text-2xl font-bold text-amber-700", className)}>
      {children}
    </h1>
  );
};

export default MMPageTitle;
