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
    <div className="group relative flex flex-col items-center justify-center bg-white rounded-full border border-grayE8 py-1.5 px-5 min-w-20">
      <data.icon />
      <div className="absolute -top-12 flex-col items-center flex opacity-0 drop-shadow-sm mb-5 transition-opacity group-hover:opacity-100 ease-in">
        <span className="relative rounded-md z-10 p-3 text-xs leading-none tracking-tight text-white whitespace-no-wrap bg-[#111928] shadow-lg">
          {data.name}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-[#111928]"></div>
      </div>
    </div>
  )

  return (
    <BigContainer id="skills">
      <div className="flex flex-col gap-4 mt-10 w-full">
        <h3 className="text-center text-lg text-gray7B tracking-tight">
          Tech stack I work with
        </h3>
        <div className="flex flex-row flex-wrap justify-center items-center gap-2 w-full">
          {stack.map((item, index) => (
            <SingleStack key={index} data={item} />
          ))}
        </div>
      </div>
    </BigContainer>
  )
}

export default Stack
