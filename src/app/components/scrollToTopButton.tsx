"use client";
import ScrollToTop from "react-scroll-up";
import { FaArrowUp } from "react-icons/fa";
import { transitionClass500 } from "./styles/classes";

export const ScrollToTopButton = () => {
  return (
    <ScrollToTop showUnder={200}>
      <div
        className={`bg-secondary-500 rounded-full p-3 text-secondary-50 cursor-pointer hover:bg-secondary-600 ${transitionClass500}`}
      >
        <FaArrowUp size={24} />
      </div>
    </ScrollToTop>
  );
};
