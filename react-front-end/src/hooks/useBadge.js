import { useState } from "react";

const useBadge = (badgeNameArray) => {
  let badgeState = {};

  badgeNameArray.forEach((name) => (badgeState[name] = false));

  const [hasBadge, setHasBadge] = useState(badgeState);

  return { hasBadge, setHasBadge };
};

export default useBadge;
