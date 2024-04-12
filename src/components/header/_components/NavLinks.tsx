interface ISingleLink {
  href: string
  text: string
}

const ahrefs = [
  { href: '#works', text: 'Works' },
  { href: '#skills', text: 'Skills' },
  { href: '#about', text: 'About me' },
  { href: '#contact', text: 'Contact' }
]

const SingleLink: React.FC<ISingleLink> = ({ href, text }) => {
  return (
      <a href={href} className="text-sm text-gray2 ">
    <li className="bg-transparent hover:bg-grayE8/40 transition-colors ease-in cursor-pointer rounded-md px-2 py-1.5">
        {text}
    </li>
      </a>
  )
}

const NavLinks = () => {
  return (
    <ul className="hidden lg:flex flex-row items-center gap-2">
      {ahrefs.map((link, index) => (
        <SingleLink key={index} {...link} />
      ))}
    </ul>
  )
}

export default NavLinks
