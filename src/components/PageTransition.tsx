import { useEffect, useState } from 'react';

/**
 * Route / Page curtain transition overlay.
 * Provides cinematic curtain wipe on section changes or navigation.
 */
export function PageTransition() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActive(true);
      const timer = setTimeout(() => setActive(false), 600);
      return () => clearTimeout(timer);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div
      className={`page-curtain ${active ? 'is-transitioning' : ''}`}
      aria-hidden="true"
    />
  );
}
