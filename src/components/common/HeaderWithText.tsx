import React from 'react';

interface IProps {
    headerFirst: string;
    headerSecond: string;
    children?: React.ReactNode;
}

function HeaderWithText({ headerFirst, headerSecond, children }: IProps) {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-start">
      <h2 className="flex w-auto md:w-1/4 flex-col text-xl md:text-5xl md:leading-[3rem] font-extralight">
        <span className="text-white/60">{headerFirst}</span>
        <span className="text-white">{headerSecond}</span>
      </h2>

      {children && (
        <p className="text-[#A3A3A3] font-extralight text-lg md:text-2xl md:max-w-3xl">
          {children}
        </p>
      )}
    </div>
  );
}

export default HeaderWithText;