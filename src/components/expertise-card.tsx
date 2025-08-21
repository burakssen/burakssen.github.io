import { ReactNode } from "react";

interface ExpertiseCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export const ExpertiseCard = ({
  title,
  description,
  children,
  className = "",
}: ExpertiseCardProps) => {
  return (
    <div
      className={`bg-white/50 dark:bg-zinc-800/30 backdrop-blur-sm rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 p-6 ${className}`}
    >
      <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          {description}
        </p>
      )}
      <div className="flex flex-wrap gap-3">
        {children}
      </div>
    </div>
  );
};

interface TechIconProps {
  icon: React.ElementType;
  name: string;
  className?: string;
}

export const TechIcon = ({
  icon: Icon,
  name,
  className = "",
}: TechIconProps) => (
  <div
    className={`flex flex-col items-center p-1.5 rounded-md ${className}`}
    title={name}
  >
    <Icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
    <span className="mt-1 text-[10px] font-medium text-zinc-600 dark:text-zinc-400">
      {name}
    </span>
  </div>
);
