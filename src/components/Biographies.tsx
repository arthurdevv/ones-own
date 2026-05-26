import { motion } from "motion/react";

import { layout, typography } from "@/lib/styles";
import { cn } from "@/lib/utils";

const names = {
  "Elara Vance (Vocals/Guitar)":
    "Melodic storyteller with raw emotion and vinyl passion.",
  "Jasper Thorne (Guitar)": "Literary influences shape his sonic textures.",
  "Rowan Blake (Bass)": "Driving bass lines are the foundation of every song.",
  "Carys Finch (Drums)": "The rhythmic backbone, energy with precise beats.",
};

export default function Biographies() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div aria-hidden="true" />
      <div className={cn(layout.container, "gap-10 pt-7.5 pb-20")}>
        <header className={layout.header}>
          <h2 className={typography.heading}>Bios</h2>
        </header>
        <div className={cn(layout.wrapper, "gap-10")}>
          {Object.entries(names).map(([name, bio]) => (
            <div className={typography.body} key={name}>
              <p>{name}</p>
              <p>&nbsp;</p>
              <p>{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
