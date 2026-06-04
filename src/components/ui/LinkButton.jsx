import React from "react";
import { navigate } from "../../lib/navigation";

export function LinkButton({
  to,
  children,
  variant = "primary",
  className = "",
}) {
  const styles =
    variant === "secondary"
      ? "border border-white/20 bg-white/10 text-white hover:bg-white/15"
      : "bg-gold text-white hover:bg-[#479737]";

  return (
    <button
      onClick={() => navigate(to)}
      className={`btn ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
