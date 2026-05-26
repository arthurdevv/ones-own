import { motion } from "motion/react";

import { layout, typography } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header
      className={cn(
        layout.wrapper,
        typography.link,
        "ultra:text-background tablet:pb-55 tablet:justify-between tablet:flex-row z-10 gap-10.75 pt-7.5 pb-25",
      )}
    >
      <a href="/">WE ARE ONE’S OWN</a>
      <nav className="tablet:flex-row flex flex-col gap-4.75">
        <motion.a
          href="/"
          whileHover={{ rotate: "5deg", opacity: 0.5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Listen on Spotify
        </motion.a>
        <motion.a
          href="/"
          whileHover={{ rotate: "5deg", opacity: 0.5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Instagram
        </motion.a>
        <motion.a
          href="/"
          whileHover={{ rotate: "5deg", opacity: 0.5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Contact
        </motion.a>
      </nav>
    </header>
  );
}
