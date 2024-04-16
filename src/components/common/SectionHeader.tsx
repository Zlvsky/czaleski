import React from 'react';

interface IProps {
    title: string;
    subtitle: string;
}

function SectionHeader({ title, subtitle }: IProps) {
  return (
    <div className="mb-4 flex flex-col">
      <h4 className="text-center text-base uppercase tracking-tight text-white/60">
        {subtitle}
      </h4>
      <h2 className=" text-center text-4xl tracking-tighter text-white">{title}</h2>
    </div>
  )
}

export default SectionHeader;