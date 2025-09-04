// src/components/ParticlesBackground.tsx
'use client';
import React, { useCallback, useMemo } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

type Props = {
  className?: string;
  density?: number;
  color?: string; // <— NEW
};

export default function ParticlesBackground({
  className = '',
  density = 75,
  color = '#4AB1D3', // <— Airmana orb colour (RGB 74,177,211)
}: Props) {
  const init = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 60,
      background: { color: 'transparent' },
      interactivity: {
        events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
      particles: {
        number: { value: density, density: { enable: true, area: 800 } },
        color: { value: color },            // <— UPDATED
        shape: { type: 'circle' },
        opacity: { value: 0.45 },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 130,
          color: color,                     // <— UPDATED (match orbs)
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.9,
          direction: 'none',
          outModes: { default: 'out' },
        },
      },
    }),
    [density, color]
  );

  return (
    <Particles id="airmana-particles" init={init} options={options}
      className={`absolute inset-0 -z-10 pointer-events-none ${className}`} />
  );
}
