'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Stat {
  number: string;
  label: string;
  subtext: string;
}

const stats: Stat[] = [
  { number: '1.2M+', label: 'Medical Images', subtext: 'Across all modalities' },
  { number: '450+', label: 'Partner Institutions', subtext: 'And growing' },
  { number: '35', label: 'African Countries', subtext: 'Represented' },
  { number: '89', label: 'AI Models', subtext: 'Trained on African data' },
  { number: '500+', label: 'Active Researchers', subtext: 'Worldwide' },
  { number: '127', label: 'Publications', subtext: 'Using our data' },
];

function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract numeric value from string like "1.2M+" or "450+"
  const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
  const suffix = value.replace(/[\d.]/g, '');

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(progress * numericValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(suffix.includes('M') ? 1 : 0)}{suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                <AnimatedCounter value={stat.number} />
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
