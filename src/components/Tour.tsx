import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRightIcon } from "@/components/icons";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { layout, typography } from "@/lib/styles";
import { cn } from "@/lib/utils";

const tourDates = {
  "2025 US Tour Dates": [
    ["1.23.25", "Boston, MA"],
    ["1.24.25", "Boston, MA"],
    ["1.26.25", "Chicago, IL"],
    ["1.27.25", "Chicago, IL"],
    ["1.30.25", "Detroit, Michigan"],
    ["1.31.25", "Richmond, VA"],
    ["2.02.25", "Tampa, Florida"],
    ["2.10.25", "Atlanta, GA"],
    ["2.11.25", "Atlanta, GA"],
    ["2.14.25", "Dallas, TX"],
    ["2.15.25", "Dallas, TX"],
    ["2.19.25", "Phoenix, AZ"],
    ["2.20.25", "Denver, Colorado"],
    ["2.23.25", "Santa Ana, CA"],
    ["2.24.25", "Santa Ana, CA"],
    ["2.27.25", "San Francisco, CA"],
    ["2.28.25", "San Francisco, CA"],
    ["3.04.25", "Berkeley, CA"],
    ["3.10.25", "Los Angeles, CA"],
    ["3.11.25", "Seattle, WA"],
    ["3.12.25", "Portland, OR"],
    ["3.14.25", "Lawrence, Kansas"],
    ["3.15.25", "Minneapolis, MN"],
    ["3.19.25", "Brooklyn, NY"],
    ["3.20.25", "Brooklyn, NY"],
    ["3.22.25", "Montreal, QC"],
    ["3.23.25", "Montreal, QC"],
    ["3.24.25", "Toronto, ON"],
  ],
  "2026 World Tour Dates": [
    ["1.23.26", "Paris, FR"],
    ["1.24.26", "Paris, FR"],
    ["1.27.26", "Tokyo, JP"],
    ["1.28.26", "Osaka, JP"],
    ["1.29.26", "Bangkok, TH"],
    ["1.30.26", "London, UK"],
    ["1.31.26", "London, UK"],
    ["2.02.26", "Berlin, DE"],
    ["2.03.26", "Berlin, DE"],
  ],
};

interface TourDatesProps {
  title: string;
  content: string[][];
}

function TourDates({ title, content }: TourDatesProps) {
  return (
    <div className="flex flex-col gap-7.5">
      <header className={layout.header}>
        <h2 className={typography.heading}>{title}</h2>
      </header>
      <div className="inline-flex flex-col">
        {content.map(([date, venue]) => (
          <a
            key={date}
            href="/"
            className={cn(
              typography.body,
              "group hover:bg-accent-bg hover:text-background inline-flex h-9.25 items-center gap-4 px-2 py-2.5",
            )}
          >
            <p>{date}</p>
            <p>{venue}</p>
            <div className="ml-auto inline-flex gap-1">
              Tickets
              <div className={layout.icon}>
                <ArrowUpRightIcon width={6} height={6} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Tour() {
  const { breakpoint } = useWindowWidth();

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section>
      <div aria-hidden="true" />
      <div
        className={cn(
          layout.container,
          "desktop:pt-12.5 desktop:flex-row desktop:items-start desktop:justify-between tablet:pt-0",
        )}
      >
        <motion.div
          style={{ rotate }}
          className="desktop:sticky desktop:top-0 desktop:flex desktop:items-center desktop:justify-center desktop:w-140 desktop:h-125 tablet:h-165.5 tablet:w-150 h-96.25 w-78.75 pt-7.5 pb-10"
        >
          <Image
            src={`/images/disc-${breakpoint}.avif`}
            alt="Disc"
            width={315}
            height={315}
            className="desktop:w-113.75 desktop:h-113.75 h-full w-full object-cover object-center"
          />
        </motion.div>
        <div className={cn(layout.wrapper, "desktop:gap-15 desktop:w-140")}>
          <div className={cn(layout.wrapper, "gap-12.5")}>
            {Object.entries(tourDates).map(([year, dates]) => (
              <TourDates key={year} title={year} content={dates} />
            ))}
          </div>
          <div className={cn(layout.wrapper, "items-center")}>
            <div className="desktop:h-140 desktop:w-140 tablet:w-full tablet:h-209 h-92.5 w-92.5">
              <Image
                src="/images/people.avif"
                alt="People laying in park"
                width={315}
                height={315}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="w-full pt-5 pb-20">
              <h2 className={cn(typography.heading, "max-w-70.5")}>
                Contact hello@figma.com to book US or global tour dates.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
