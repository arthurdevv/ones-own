import Image from "next/image";

import { layout, typography } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "./icons";

const videos = [
  {
    title: "Neon Reverie",
    src: "/images/landscape.webp",
    alt: "Landscape with trees and lake",
  },
  {
    title: "Summer Went Missing",
    src: "/images/boats.webp",
    alt: "Boats at a dock",
  },
  {
    title: "Inkwell Shadows",
    src: "/images/people.avif",
    alt: "People laying in a park",
  },
  {
    title: "Golden Hour Ghosts",
    src: "/images/field.avif",
    alt: "Field with grass and trees",
  },
  {
    title: "The Quiet Tide",
    src: "/images/person.avif",
    alt: "Person standing in stairwell",
  },
];

export default function MusicVideos() {
  return (
    <section>
      <div className={cn(layout.container, "gap-10 pt-5 pb-7.5")}>
        <header
          className={cn(
            layout.header,
            "desktop:justify-start tablet:justify-center",
          )}
        >
          <h2 className={typography.heading}>Music Videos:</h2>
        </header>
        <div
          className={cn(
            layout.wrapper,
            "desktop:px-4 tablet:flex-row flex-wrap gap-5 px-12.25",
          )}
        >
          {videos.map(({ title, src, alt }) => (
            <a
              key={title}
              href="/"
              className={cn(
                layout.wrapper,
                "desktop:min-w-60 desktop:h-85 tablet:flex-[1_0_0] items-center gap-4 py-7.5 text-center",
              )}
            >
              <div className="h-57.5 w-57.5 bg-black">
                <Image
                  src={src}
                  alt={alt}
                  width={216}
                  height={216}
                  className="h-full w-full object-cover object-center opacity-70"
                />
              </div>
              <p className={typography.body}>{title}</p>
              <div className={layout.icon}>
                <ArrowUpRightIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
