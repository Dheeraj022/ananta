import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  alignment = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = alignment === "center";

  return (
    <div
      className={`mb-12 ${isCenter ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-2 mb-3 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          {isCenter && <span className="h-px w-6 sm:w-8 bg-gold inline-block" />}
          <span
            className={`text-xs uppercase tracking-[0.2em] font-medium ${
              isDark ? "text-gold" : "text-forest"
            }`}
          >
            {eyebrow}
          </span>
          {isCenter && <span className="h-px w-6 sm:w-8 bg-gold inline-block" />}
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight leading-tight ${
          isDark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isDark ? "text-stone-300" : "text-stone-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

