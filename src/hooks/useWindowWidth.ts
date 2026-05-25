"use client";

import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(0);

  const breakpoint =
    width < 800 ? "mobile" : width < 1280 ? "tablet" : "desktop";

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width, breakpoint };
}
