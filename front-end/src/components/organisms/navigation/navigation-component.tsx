import React from "react";
import { useEffect, useState } from "react";
import NavDesktop from "./navigation-desktop/navigation-desktop-component";
import NavMobile from "./navigation-mobile/navigation-mobile-component";

function Nav() {
  const [isMatchingMedia, setIsMatchingMedia] = useState(false);
  const match: MediaQueryList = window.matchMedia("(min-width: 768px)");

  useEffect(() => {
    match.addEventListener("change", handleMediaEvent);
    handleMediaEvent(match);
    return () => match.removeEventListener("change", handleMediaEvent);
  });

  return <>{isMatchingMedia ? <NavDesktop /> : <NavMobile />}</>;

  function handleMediaEvent(mediaEvent: MediaQueryListEvent | MediaQueryList): void {
    mediaEvent.matches ? setIsMatchingMedia(true) : setIsMatchingMedia(false);
  }
}

export default Nav;
