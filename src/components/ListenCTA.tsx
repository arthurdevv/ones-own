import Image from "next/image";
import { layout, typography } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function ListenCTA() {
  return (
    <section>
      <div aria-hidden="true" />
      <div className={cn(layout.container, "pt-7.5 pb-25")}>
        <header className={layout.header}>
          <h2 className={typography.heading}>
            The Inkwell Echoes: Discover the EP.
          </h2>
        </header>
        <div className={cn(layout.wrapper, "items-center gap-1 pt-7.5")}>
          <div className="tablet:max-w-162.5 min-h-57.5">
            <Image
              src="/images/tape.avif"
              alt="Recording tape with image of people on a beach on it"
              width={315}
              height={240}
              className="h-full w-full object-contain object-center"
            />
          </div>
          <div
            className={cn(
              layout.wrapper,
              "tablet:w-162.5 tablet:px-11.25 w-78.75 gap-5",
            )}
          >
            <h2 className={typography.heading}>Listen on:</h2>
            <div className={cn(layout.wrapper, "gap-2.25")}>
              <a href="/" className={cn(typography.body, layout.button)}>
                Spotify
              </a>
              <a href="/" className={cn(typography.body, layout.button)}>
                Bandcamp
              </a>
              <a href="/" className={cn(typography.body, layout.button)}>
                Soundcloud
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
