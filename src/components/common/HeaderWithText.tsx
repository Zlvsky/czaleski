import React from 'react'

interface IProps {
  headerFirst: string
  headerSecond: string
  children?: React.ReactNode
}

function HeaderWithText({ headerFirst, headerSecond, children }: IProps) {
  return (
    <div className="flex w-full flex-col md:flex-row md:items-start">
      <h2 className="flex w-auto flex-col text-xl font-extralight md:w-1/4 md:text-5xl md:leading-[3rem]">
        <span className="text-white/60">{headerFirst}</span>
        <span className="text-white">{headerSecond}</span>
      </h2>

      {children && (
        <p className="text-lg font-extralight text-[#A3A3A3] md:max-w-3xl md:text-2xl">
          {children}
        </p>
      )}
    </div>
  )
}

export default HeaderWithText
