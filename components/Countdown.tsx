
import React, { useState, useEffect } from 'react';
import { WEDDING_DATE } from '../constants';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = WEDDING_DATE.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center p-4 md:p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl transition-all hover:scale-105">
      <span className="text-4xl md:text-6xl font-serif-wedding text-white mb-2">{value}</span>
      <span className="text-xs md:text-sm uppercase tracking-widest text-white/80">{label}</span>
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
      <TimeUnit value={timeLeft.days} label="Ngày" />
      <TimeUnit value={timeLeft.hours} label="Giờ" />
      <TimeUnit value={timeLeft.minutes} label="Phút" />
      <TimeUnit value={timeLeft.seconds} label="Giây" />
    </div>
  );
};

export default Countdown;
