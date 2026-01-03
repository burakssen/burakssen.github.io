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
      className={`glass rounded-2xl p-6 h-full flex flex-col ${className}`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            {description}
          </p>
        )}
      </div>
      <div className="flex-1">
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
    className={`flex flex-col items-center justify-center p-3 rounded-xl cursor-default ${className}`}
    title={name}
  >
    <Icon className="w-8 h-8 text-zinc-600 dark:text-zinc-400" />
    <span className="mt-2 text-[10px] font-semibold text-zinc-500 dark:text-zinc-500 text-center leading-tight">
      {name}
    </span>
  </div>
);