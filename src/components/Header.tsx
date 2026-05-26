import { layout, typography } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header
      className={cn(
        layout.wrapper,
        typography.link,
        "tablet:pb-55 tablet:justify-between tablet:flex-row gap-10.75 pt-7.5 pb-25",
      )}
    >
      <a href="/">WE ARE ONE’S OWN</a>
      <nav className="tablet:flex-row flex flex-col gap-4.75">
        <a href="/">Listen on Spotify</a>
        <a href="/">Instagram</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  );
}
