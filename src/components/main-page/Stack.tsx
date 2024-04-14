import DockerSVG from '@/assets/icons/stack/docker.svg'
import FigmaSVG from '@/assets/icons/stack/figma.svg'
import FirebaseSVG from '@/assets/icons/stack/firebase.svg'
import GitSVG from '@/assets/icons/stack/git.svg'
import MongoSVG from '@/assets/icons/stack/mongo.svg'
import NextjsSVG from '@/assets/icons/stack/nextjs.svg'
import NodeSVG from '@/assets/icons/stack/node.svg'
import ReactSVG from '@/assets/icons/stack/react.svg'
import TailwindSVG from '@/assets/icons/stack/tailwind.svg'
import TypescriptSVG from '@/assets/icons/stack/typescript.svg'
import BigContainer from '../layout/BigContainer'

function Stack() {
  const stack = [
    { name: 'React.js', icon: ReactSVG },
    { name: 'Next.js', icon: NextjsSVG },
    { name: 'Typescript', icon: TypescriptSVG },
    { name: 'TailwindCSS', icon: TailwindSVG },
    { name: 'Node.js', icon: NodeSVG },
    { name: 'MongoDB', icon: MongoSVG },
    { name: 'Docker', icon: DockerSVG },
    { name: 'Firebase', icon: FirebaseSVG },
    { name: 'Git', icon: GitSVG },
    { name: 'Figma', icon: FigmaSVG }
  ]

  const SingleStack = ({ data }: { data: { name: string; icon: any } }) => (
    <div className="group relative flex min-w-20 flex-col items-center justify-center rounded-full border border-darkborder bg-dark26 px-5 py-1.5">
      <data.icon />
      <div className="absolute -top-12 mb-5 flex flex-col items-center opacity-0 drop-shadow-sm transition-opacity ease-in group-hover:opacity-100">
        <span className="whitespace-no-wrap relative z-10 rounded-md bg-[#111928] p-3 text-xs leading-none tracking-tight text-white shadow-lg">
          {data.name}
        </span>
        <div className="-mt-2 h-3 w-3 rotate-45 bg-[#111928]"></div>
      </div>
    </div>
  )

  return (
    <BigContainer id="skills">
      <div className="mt-10 flex w-full flex-col gap-4">
        <h3 className="text-center text-base tracking-tight text-white/60">
          Tech stack I work with
        </h3>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-2">
          {stack.map((item, index) => (
            <SingleStack key={index} data={item} />
          ))}
        </div>
      </div>
    </BigContainer>
  )
}

export default Stack
