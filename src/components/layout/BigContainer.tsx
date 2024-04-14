import { IChildren } from '@/types/generalTypes'

interface IProps extends IChildren {
  id?: string
}

export default function BigContainer({ children, id }: IProps) {
  return (
    <div id={id} className="mx-auto w-full max-w-7xl px-4">
      {children}
    </div>
  )
}
