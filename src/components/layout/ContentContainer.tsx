import { IChildren } from '@/types/generalTypes'
import bgtile from "@/assets/images/texture.png";

interface IProps extends IChildren {
  id?: string
}

export default function ContentContainer({ children, id }: IProps) {
  return (
    <div id={id} className="w-full max-w-[90rem] rounded-[2.25rem] bg-darkbg px-4 mx-auto" style={{
      backgroundImage: `url(${bgtile.src})`,
      backgroundSize: '70px',
      backgroundRepeat: 'repeat',
    }}>
      {children}
    </div>
  )
}
