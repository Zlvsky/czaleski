import BigContainer from '../layout/BigContainer'

const PingDot = () => {
  return (
    <span className="relative flex h-3 w-3">
      <span className="animate-ping duration-150 absolute inline-flex h-full w-full rounded-full bg-green opacity-60"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
    </span>
  )
}

function Contact() {
  return (
    <BigContainer id="contact">
      <div className="flex flex-col items-center justify-center gap-5 mt-16 md:mt-28">
        <h3 className="text-xl md:text-3xl tracking-tighter text-black">
          Interested in working together?
        </h3>
        <a
          href="mailto:zlvsky@icloud.com"
          className="bg-primary w-full max-w-64 text-white px-1 py-2 rounded-md"
        >
          <button className="flex flex-row w-full  max-w-64 justify-center items-center bg-white/50 hover:bg-grayE8/40 py-3 px-4 border border-grayE8 transition-colors ease-in rounded-xl">
            <PingDot />
            <span className="text-gray2 text-lg ml-3">Send me an email</span>
          </button>
        </a>
        <span className="tracking-tight text-gray7B">Let&apos;s build together! </span>
      </div>
    </BigContainer>
  )
}

export default Contact
