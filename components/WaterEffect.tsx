'use client';

import { useEffect } from 'react';

export default function WaterEffect({ radius = 180 }: { radius?: number }) {
  useEffect(() => {
    // Skip on touch / coarse pointers
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    const root = document.documentElement;
    const body = document.body;

    root.style.setProperty('--r', `${radius}px`);

    let x = -1e6, y = -1e6;
    let raf = 0;
    let active = false;

    const update = () => {
      root.style.setProperty('--mx', x + 'px');
      root.style.setProperty('--my', y + 'px');
      raf = 0;
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
      if (!active) { body.classList.add('has-mouse'); active = true; }
    };

    const onLeave = () => {
      body.classList.remove('has-mouse');
      active = false;
      root.style.setProperty('--mx', '-100vw');
      root.style.setProperty('--my', '-100vh');
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
      body.classList.remove('has-mouse');
      root.style.removeProperty('--mx');
      root.style.removeProperty('--my');
    };
  }, [radius]);

  return null;
}
