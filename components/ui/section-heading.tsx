import { SectionHeadingProps } from "@/interface";

export default function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 sm:mb-16 ${className}`}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">{title}</h2>
      {subtitle && <p className="text-base sm:text-lg lg:text-xl text-slate-600">{subtitle}</p>}
    </div>
  );
}
