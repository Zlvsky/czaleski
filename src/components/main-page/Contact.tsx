import BigContainer from '../layout/BigContainer'

const PingDot = () => {
  return (
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60 duration-150"></span>
      <span className="relative inline-flex h-3 w-3 rounded-full bg-green"></span>
    </span>
  )
}

function Contact() {
  return (
    <BigContainer id="contact">
      <div className="mt-16 flex flex-col items-center justify-center gap-5 md:mt-28">
        <h3 className="text-xl tracking-tighter text-white md:text-3xl">
          Interested in working together?
        </h3>
        <a
          href="mailto:zlvsky@icloud.com"
          className="bg-primary w-full max-w-64 rounded-md px-1 py-2 text-white"
        >
          <button className="flex w-full max-w-64  flex-row items-center justify-center rounded-xl border  border-darkborder bg-dark30/60 px-4 py-3">
            <PingDot />
            <span className="ml-3 text-lg text-white">Send me an email</span>
          </button>
        </a>
        <span className="tracking-tight text-white/60">Let&apos;s build together! </span>
      </div>
    </BigContainer>
  )
}

export default Contact
