import GithubSVG from '@/assets/icons/social/github.svg'
import LinkedInSVG from '@/assets/icons/social/linkedin.svg'
import TwitterSVG from '@/assets/icons/social/twitter.svg'

const Socials = () => {
  return (
    <div className="flex items-center gap-4">
      <a href="https://twitter.com/Zlvskyy" target="_blank" rel="noreferrer">
        <TwitterSVG width={20} height={20} />
      </a>
      <a href="https://github.com/Zlvsky" target="_blank" rel="noreferrer">
        <GithubSVG width={20} height={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/krzysztof-zaleski02"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInSVG width={20} height={20} />
      </a>
    </div>
  )
}

const PingDot = () => {
  return (
    <span className="relative flex h-3 w-3">
      <span className="animate-ping duration-150 absolute inline-flex h-full w-full rounded-full bg-green opacity-60"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
    </span>
  )
}

const ConnectButton = () => (
  <a
    href="mailto:zlvsky@icloud.com"
    className="bg-primary text-white px-1 py-2 rounded-md"
  >
    <button className="flex flex-row items-center bg-white/50 hover:bg-grayE8/40 py-3 px-4 border border-grayE8 transition-colors ease-in rounded-xl">
      <PingDot />
      <span className="text-gray2 text-sm ml-3">Send me an email</span>
    </button>
  </a>
)

function Connect() {
  return (
    <div className="flex items-center w-full md:w-auto justify-between md:justify-end gap-4">
      <Socials />
      <ConnectButton />
    </div>
  )
}

export default Connect
