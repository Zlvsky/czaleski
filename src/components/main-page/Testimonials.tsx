import StarSvg from '@/assets/icons/common/star.svg'
import IwonaImage from '@/assets/images/clients/iwona.png'
import PawelImage from '@/assets/images/clients/pawel.png'
import SkrzynkaImage from '@/assets/images/clients/skrzynk.png'
import TomaszImage from '@/assets/images/clients/tomaszmichno.png'
import WbhaleImage from '@/assets/images/clients/wbhale.png'
import Image, { StaticImageData } from 'next/image'
import BigContainer from '../layout/BigContainer'

const testimonials = [
  {
    name: 'Aleksanda Łukaszenia',
    company: 'Skrzynka Synka',
    text: `I recommend Christopher services. Full professionalism and commitment! Quick implementation!`,
    image: SkrzynkaImage
  },
  {
    name: 'Iwona Troc',
    company: 'Mental Coach',
    text: `I recommend working with Christopher. I commissioned a website and I am very satisfied. Full professionalism, reliability, quick execution. Big plus for flexibility and communicativeness.`,
    image: IwonaImage
  },
  {
    name: 'Michał W.',
    company: 'EuroOil',
    text: `I recommend working with Chris. Very good contact. Quick implementation. The best offer I got when looking for a contractor, recommend!`
  },
  {
    name: 'Paweł Oliwa',
    company: 'PMI Geodezja',
    text: `I recommend Christopher's services. Very good contact. Quick implementation. Affordable prices. The best offer I found.`,
    image: PawelImage
  },
  {
    name: 'Wojciech B.',
    company: 'WB Hale',
    text: `I highly recommend working with Chris. Everything went through smoothly, even after the work was done there was no problem with further contact and performing further services.`,
    image: WbhaleImage
  },
  {
    name: 'Tomasz M.',
    company: 'Nagrobki Michno',
    text: `Christopher's execution of the commissioned work went smoothly. I highly recommend his services.`,
    image: TomaszImage
  }
]

const TestimonialBox = ({
  name,
  company,
  text,
  image
}: {
  name: string
  company: string
  text: string
  image?: StaticImageData
}) => {
  const FakeAvatar = () => (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black font-bold text-white">
      {name[0]}
    </div>
  )

  return (
    <div className="flex aspect-auto flex-col items-start gap-2 rounded-xl border border-darkborder bg-dark26/60 p-4">
      <div className="flex items-center gap-2">
        {image ? (
          <Image src={image} alt={name} height={40} width={40} className="rounded-full" />
        ) : (
          <FakeAvatar />
        )}
        <div className="flex flex-col">
          <h3 className="mb-0 text-base font-medium leading-none text-white">{name}</h3>
          <p className="text-sm text-white/80">{company}</p>
        </div>
      </div>
      <div className="items-left flex gap-0.5">
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
      </div>
      <p className="text-left text-white">{text}</p>
    </div>
  )
}

function Testimonials() {
  return (
    <BigContainer>
      <h2 className="mt-28 text-center text-4xl tracking-tighter text-white">
        Clients Testimonials
      </h2>
      <div className="mt-10">
        <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialBox key={'testimonial_' + index} {...testimonial} />
          ))}
        </div>
      </div>
    </BigContainer>
  )
}

export default Testimonials
