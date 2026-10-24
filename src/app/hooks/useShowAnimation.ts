import { useState, UIEvent } from "react";

// scroll positions below this (px) are layout artifacts, not user scrolling:
// scroll-snap-mandatory nudges the strip a few px on load to reach the first
// snap target, which must not count as "the user started swiping"
const SCROLL_DISMISS_THRESHOLD = 10;

export default function useShowAnimation() {
  const [showAnimation, setShowAnimation] = useState(true)

  const hideAnimation = () => setShowAnimation(false)

  const hideOnScroll = (e: UIEvent<HTMLElement>) => {
    if (Math.abs(e.currentTarget.scrollLeft) > SCROLL_DISMISS_THRESHOLD) {
      hideAnimation()
    }
  }

  return { showAnimation, hideAnimation, hideOnScroll }
}
