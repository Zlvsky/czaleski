import LinkSVG from '@/assets/icons/common/link2.svg'
import BigContainer from '../layout/BigContainer'

const links = [
  {
    name: 'Privacy Policy',
    link: '/privacy-policy'
  },
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
  },
  {
    name: 'Gumroad',
    link: 'https://czaleski.gumroad.com/'
  },
  {
    name: 'Resume',
    link: 'https://drive.google.com/file/d/16vH538erKi6kTfgIucXa-Kfw4FnMENVe/view?usp=sharing'
  }
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <BigContainer>
      <div className="mt-20 flex flex-col items-center justify-between py-10 md:flex-row">
        <span className="text-sm tracking-tight text-gray7B">
          © {year} Krzysztof Zaleski. All Rights Reserved.
        </span>
        <div className="mt-6 md:mt-0 flex flex-row flex-wrap justify-center items-center gap-5">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-1 text-xs uppercase tracking-tight text-gray7B transition-colors ease-in hover:text-black"
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
