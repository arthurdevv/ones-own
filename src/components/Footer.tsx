import { motion } from "motion/react";
import Image from "next/image";

import { layout, typography } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div aria-hidden="true" />
      <div
        className={cn(
          layout.container,
          "desktop:px-2.5 desktop:gap-20 tablet:flex-row tablet:justify-between items-start gap-10 py-20",
        )}
      >
        <div className="desktop:w-30 h-7.5 w-25">
          <Image
            src="/icons/wwr.svg"
            alt="Wild World Records Logo"
            width={100}
            height={30}
            className="h-full w-full object-contain object-center"
          />
        </div>
        <div
          className={cn(
            layout.wrapper,
            typography.caption,
            "desktop:w-full desktop:flex-row desktop:justify-between tablet:w-fit gap-11.25",
          )}
        >
          <div>
            <p>Management</p>
            <p>hello@mail.com</p>
          </div>
          <div>
            <p>Booking US:</p>
            <p>hello@mail.com</p>
          </div>
          <div>
            <p>Booking EU:</p>
            <p>hello@mail.com</p>
          </div>
          <div>
            <p>Rights:</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
