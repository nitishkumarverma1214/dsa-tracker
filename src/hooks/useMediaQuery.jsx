import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (matches !== media.matches) {
      setMatches(media.matches);
    }
    const handleResize = () => setMatches(media.matches);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [matches]);

  return matches;
}

export default UseMediaQuery;
