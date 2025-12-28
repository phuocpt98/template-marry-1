
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16 px-4">
      <h2 className="font-wedding text-5xl md:text-6xl text-[#c5a47e] mb-4">{title}</h2>
      {subtitle && <p className="text-gray-500 uppercase tracking-[0.2em] text-sm">{subtitle}</p>}
      <div className="flex justify-center items-center mt-6">
        <div className="h-[1px] w-12 bg-[#c5a47e]/40"></div>
        <div className="mx-4 text-[#c5a47e]">❤</div>
        <div className="h-[1px] w-12 bg-[#c5a47e]/40"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
