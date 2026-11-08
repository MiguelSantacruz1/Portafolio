import React from "react";
import Link from "next/link";

interface PillButtonProps {
  children: React.ReactNode;
  variant?: "white" | "orange" | "outline";
  href?: string;
  onClick?: () => void;
  download?: boolean | string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
}

export default function PillButton({
  children,
  variant = "white",
  href,
  onClick,
  download,
  target,
  rel,
  type = "button",
  className = "",
  ariaLabel,
}: PillButtonProps) {
  const isWhite = variant === "white";
  const isOrange = variant === "orange";

  const baseStyles =
    "group inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] select-none";

  const variantStyles = isWhite
    ? "bg-white text-[#0F0F0F] hover:bg-zinc-100 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
    : isOrange
    ? "bg-[#FF5A1F] text-white hover:bg-[#ff6e38] shadow-[0_4px_20px_rgba(255,90,31,0.35)]"
    : "bg-white/[0.04] text-white border border-white/15 hover:border-white/30 hover:bg-white/[0.08]";

  const circleStyles = isWhite
    ? "w-8 h-8 rounded-full bg-[#FF5A1F] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
    : isOrange
    ? "w-8 h-8 rounded-full bg-white text-[#FF5A1F] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
    : "w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1";

  const content = (
    <>
      <span className="tracking-tight">{children}</span>
      <span className={circleStyles} aria-hidden="true">
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
    </>
  );

  if (href) {
    if (download) {
      return (
        <a
          href={href}
          download={download}
          className={`${baseStyles} ${variantStyles} ${className}`}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }

    if (target === "_blank") {
      return (
        <a
          href={href}
          target="_blank"
          rel={rel || "noopener noreferrer"}
          className={`${baseStyles} ${variantStyles} ${className}`}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={`${baseStyles} ${variantStyles} ${className}`}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}

