"use client";
import React from "react";

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
      className={`px-6 py-3 rounded-md transition-all duration-300 ease-in-out 
        ${
          disabled
            ? "bg-gray-400 text-gray-800 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-secondary-500 active:bg-secondary-600"
        }
        ${className}`}
    >
      {text}
    </button>
  );
}
