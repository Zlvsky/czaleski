import NextSVG from '@/assets/icons/offers/nextjs.svg'
import ReactSVG from '@/assets/icons/offers/reactjs.svg'
import TailwindSVG from '@/assets/icons/offers/tailwind.svg'
import BigContainer from '../layout/BigContainer'

const offerData = [
  {
    title: 'Custom Coded Websites',
    description:
      'I create lightning fast, custom coded websites in Next.js using tailwind with any features you want.',
    icons: [NextSVG, TailwindSVG]
  },
  {
    title: 'React Web Apps',
    description: `Whether you're starting from scratch with an MVP or seeking assistance with an ongoing project, I'm here backed by +4 years of experience.`,
    icons: [ReactSVG, NextSVG]
  },
  {
    title: 'Outsourcing',
    description: `I'm available for outsourcing projects, whether you need a developer for a short-term project or a long-term partnership or just to develop a feature.`,
    icons: [ReactSVG, NextSVG]
  }
]

function Offer() {
  return (
    <BigContainer>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2  lg:grid-cols-3 ">
        {offerData.map((offer, index) => (
          <div
            key={index}
            className="flex aspect-square h-full flex-col justify-between rounded-2xl border border-darkborder bg-dark26/60 p-8"
          >
            <div className="">
              <h3 className="mb-4 text-2xl font-medium tracking-tighter text-white">
                {offer.title}
              </h3>
              <p className="text-lg text-gray1">{offer.description}</p>
            </div>
            <div className="flex items-center gap-3">
              {offer.icons.map((Icon, index) => (
                <Icon key={index} width={40} height={40} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </BigContainer>
  )
}

export default Offer
