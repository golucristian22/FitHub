import { useEffect, useState } from "react";
import NavDesktop from "./navigation-desktop/navigation-desktop-component";
import NavMobile from "./navigation-mobile/navigation-mobile-component";
function Nav() {
  const [isMatchingMedia, setIsMatchingMedia] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", matchMedia);
    return () => window.removeEventListener("resize", matchMedia);
  });

  return <>{isMatchingMedia ? <NavDesktop /> : <NavMobile />}</>;

  function matchMedia() {
    const match = window.matchMedia("(min-width: 768px)").matches;
    match ? setIsMatchingMedia(true) : setIsMatchingMedia(false);
  }
}

export default Nav;
