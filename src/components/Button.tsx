import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) => {
  const variantClass =
    variant === "primary"
      ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-blue-400)]"
      : variant === "outline"
        ? "bg-[var(--color-blue-50)] border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-blue-75)]"
        : "";

  const disabledClass = disabled ? "opacity-50 cursor-not-allowed bg-[var(--color-blue-75)] text-white" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`h-[52px] text-[1.125rem] leading-[1.05] rounded-md font-medium transition duration-150 ease-in-out ${variantClass} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
};
