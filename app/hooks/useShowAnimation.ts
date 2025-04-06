import { useState } from "react";

export default function useShowAnimation() {
  const [showAnimation, setShowAnimation] = useState(true)

  const hideAnimation = () => setShowAnimation(false)

  return { showAnimation, hideAnimation}
}