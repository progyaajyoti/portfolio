import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

let MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center rounded-full w-16 h-18 bg-dark text-white dark:border-1 dark:border-solid dark:border-dark"
      >
        {/* Logo image removed */}
      </MotionLink>
    </div>
  );
};

export default Logo;
