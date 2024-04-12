import { IChildren } from '@/types/generalTypes'

interface IProps extends IChildren {
  id?: string
}

export default function ContentContainer({ children, id }: IProps) {
  return (
    <div id={id} className="w-full max-w-[90rem] rounded-[2.25rem] bg-darkbg px-4 mx-auto">
      {children}
    </div>
  )
}
