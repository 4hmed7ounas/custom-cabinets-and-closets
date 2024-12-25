"use client";
import React from "react";
import { transitionClass500 } from "../styles/classes";

interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  text,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`py-1 md:py-3 px-4 rounded-md 
        ${
          disabled
            ? " bg-secondary-400 text-secondary-800 cursor-not-allowed"
            : "bg-secondary-500 text-secondary-50 hover:bg-secondary-50 hover:text-secondary-500"
        } ${transitionClass500}
        ${className}`}
    >
      {text}
    </button>
  );
}
