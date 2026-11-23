import { useEffect, useRef, useState } from 'react';

interface SectionHeadingProps {
  index: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  index,
  title,
  highlightWord,
  subtitle,
  className = '',
}: SectionHeadingProps) {
  const headingRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -50px 0px' }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = title.split(' ');

  return (
    <div ref={headingRef} className={`section-heading ${className}`}>
      <div>
        <span className="section-index">{index}</span>
        <h2 className="scrub-title">
          {words.map((word, i) => {
            const isHighlight =
              highlightWord &&
              word.toLowerCase().includes(highlightWord.toLowerCase());

            return (
              <span
                key={i}
                className={`scrub-word ${isInView ? 'is-active' : ''} ${
                  isHighlight ? 'highlight' : ''
                }`}
                style={{
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                {word}{' '}
              </span>
            );
          })}
        </h2>
      </div>
      {subtitle && <p className="section-subtext">{subtitle}</p>}
    </div>
  );
}
