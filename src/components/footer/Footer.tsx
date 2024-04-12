import LinkSVG from '@/assets/icons/common/link2.svg'
import BigContainer from '../layout/BigContainer'

const links = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/zlvskyy'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/Zlvsky'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/krzysztof-zaleski02/'
  }
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <BigContainer>
      <div className="flex flex-col md:flex-row items-center justify-between py-10 mt-20">
        <span className="text-sm text-gray7B tracking-tight">
          © {year} Krzysztof Zaleski. All Rights Reserved.
        </span>
        <div className="flex flex-row gap-5 items-center">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row gap-1 items-center text-xs uppercase text-gray7B tracking-tight hover:text-black transition-colors ease-in"
            >
              {link.name} <LinkSVG />
            </a>
          ))}
        </div>
      </div>
    </BigContainer>
  )
}

export default Footer
