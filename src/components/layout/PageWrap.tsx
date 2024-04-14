import { IChildren } from '@/types/generalTypes'
import { memo } from 'react'

interface IProps extends IChildren {
  children: React.ReactNode
  isGradient?: boolean
}

const PageWrap = memo(({ children, isGradient }: IProps) => {
  return (
    <div
      id="pagewrap"
      className={`flex h-full w-full flex-col items-center ${isGradient ? 'bg-gradient-to-b from-[#F5F5F5] to-white' : ''}`}
    >
      {children}
    </div>
  )
})

PageWrap.displayName = 'PageWrap'

export default PageWrap
