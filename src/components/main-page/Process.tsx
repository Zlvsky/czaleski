import DeliverySVG from '@/assets/icons/workflow/delivery.svg'
import DevelopmentSVG from '@/assets/icons/workflow/development.svg'
import SlackSVG from '@/assets/icons/workflow/slack.svg'
import SpecificationsSVG from '@/assets/icons/workflow/specifications.svg'
import StripeSVG from '@/assets/icons/workflow/stripe.svg'
import YoutrackSVG from '@/assets/icons/workflow/youtrack.svg'
import BigContainer from '../layout/BigContainer'

const WorkflowStack = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-6">
      <div className="flex flex-row items-center gap-2">
        <span className="text-sm tracking-tight text-white/60">
          Payments done via Stripe
        </span>
        <StripeSVG />
      </div>
      <span className="hidden text-white md:block">-</span>
      <div className="flex flex-row items-center gap-2">
        <span className="text-sm tracking-tight text-white/60">
          Communication via Slack
        </span>
        <SlackSVG />
      </div>
      <span className="hidden text-white md:block">-</span>
      <div className="flex flex-row items-center gap-2">
        <span className="text-sm tracking-tight text-white/60">
          Hours & Tasks on YouTrack
        </span>
        <YoutrackSVG />
      </div>
    </div>
  )
}

function Process() {
  return (
    <div className="z-10 mt-10 h-full w-full md:pt-14">
      <BigContainer>
        <h2 className="text-center text-4xl text-white">Workflow</h2>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-20">
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
            <SpecificationsSVG />
            <h4 className="text-2xl text-white">Specifications</h4>
            <p className="text-[#A3A3A3]">
              Define the project&apos;s requirements, goals, and features in detail.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 text-center">
            <DevelopmentSVG />
            <h4 className="text-2xl text-white">Development</h4>
            <p className="text-[#A3A3A3]">
              Progress updates will be shared on Slack, and tasks will be logged on
              YouTrack, ensuring clarity and accountability throughout the development
              cycle.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 text-center md:items-end md:text-right">
            <DeliverySVG />
            <h4 className="text-2xl text-white ">Delivery</h4>
            <p className="text-[#A3A3A3]">
              After approvement and testing, code or deployment will be delivered.
            </p>
          </div>
        </div>
        <WorkflowStack />
      </BigContainer>
    </div>
  )
}

export default Process
