import { SectionHeadingProps } from "@/interface";

export default function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl font-bold text-slate-800 mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-slate-600">{subtitle}</p>}
    </div>
  );
}
