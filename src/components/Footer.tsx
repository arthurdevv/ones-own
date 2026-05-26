import Image from "next/image";

import { layout, typography } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer>
      <div aria-hidden="true" />
      <div
        className={cn(
          layout.container,
          "tablet:flex-row tablet:justify-between items-start gap-10 py-20",
        )}
      >
        <div className="h-7.5 w-25">
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
            "tablet:w-fit gap-11.25",
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
    </footer>
  );
}
