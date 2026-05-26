import Image from "next/image";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import { layout, typography } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { breakpoint } = useWindowWidth();

  return (
    <section>
      <div className={cn(layout.container, "pt-8.75 pb-12.5")}>
        <div className={cn(layout.wrapper, "gap-12.5")}>
          <Image
            src={`/icons/logo-${breakpoint}.svg`}
            alt="One's Own Logo"
            width={315}
            height={186}
            className="desktop:aspect-1059/150 h-full w-full object-cover object-center"
          />
          <div className={cn(layout.wrapper, "gap-5")}>
            <h2 className={cn(typography.heading)}>Listen on:</h2>
            <p className={cn(typography.body)}>Spotify, Bandcamp, Soundcloud</p>
          </div>
        </div>
        <div className={cn(layout.wrapper, "gap-5")}>
          <h2 className={cn(typography.heading)}>Info</h2>
          <div className={cn(typography.body, "desktop:max-w-150")}>
            <p>
              Crafting sonic landscapes where raw emotion meets melodic
              storytelling.
            </p>
            <p>&nbsp;</p>
            <p>
              Inspired by Virginia Woolf, the band One's Own creates music
              that's both intimate and expansive. Their debut EP is a journey
              through indie pop and rock, woven with raw emotion and compelling
              narratives. This group of friends, united by a passion for vintage
              vinyl and literary depth, invites you to explore the sound of
              their own creative space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
