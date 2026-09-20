'use client';

import { useEffect, useState } from 'react';

export function useAnimatedCounter(
  target: number,
  durationMs: number = 1800,
  active: boolean = false
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || target <= 0) {
      if (!active) setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);

      // Ease-out cubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, durationMs, active]);

  return count;
}
