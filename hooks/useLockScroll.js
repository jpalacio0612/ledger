import { useLayoutEffect } from "react";

export const useLockScroll = (condition) => {
  useLayoutEffect(() => {
    if (condition) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [condition]);
};
