import React from "react";
import BigContainer from "../layout/BigContainer";
import dashed from "@/assets/images/dashed.svg";
import SpecificationsSVG from "@/assets/icons/workflow/specifications.svg";
import DevelopmentSVG from "@/assets/icons/workflow/development.svg";
import DeliverySVG from "@/assets/icons/workflow/delivery.svg";
import StripeSVG from "@/assets/icons/workflow/stripe.svg";
import YoutrackSVG from "@/assets/icons/workflow/youtrack.svg";
import SlackSVG from "@/assets/icons/workflow/slack.svg";


const WorkflowStack = () => {
  return (
    <div className="mt-10 flex flex-row items-center justify-center gap-6">
      <div className="flex flex-row items-center gap-2">
        <span className="text-sm tracking-tight text-white/60">
          Payments done via Stripe
        </span>
        <StripeSVG />
      </div>
      <span className="text-white">-</span>
      <div className="flex flex-row items-center gap-2">
        <span className="text-sm tracking-tight text-white/60">
          Communication via Slack
        </span>
        <SlackSVG />
      </div>
      <span className="text-white">-</span>
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
    <div className="z-10 h-full w-full pt-14 mt-20">
      <BigContainer>
        <h2 className="text-center text-4xl text-white">Workflow</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 md:gap-20">
          <div className="flex flex-col items-start gap-6">
            <SpecificationsSVG />
            <h4 className="text-2xl text-white">Specifications</h4>
            <p className="text-[#A3A3A3]">
              Explore your market, get to know your competitors inside out, and uncover
              what your customers truly crave.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 text-center">
            <DevelopmentSVG />
            <h4 className="text-2xl text-white">Development</h4>
            <p className="text-[#A3A3A3]">
              Let&apos;s start designing and developing. We&apos;ll brainstorm ideas,
              refine them, and bring them to life
            </p>
          </div>
          <div className="flex flex-col items-end gap-6 text-right">
            <DeliverySVG />
            <h4 className="text-2xl text-white ">Delivery</h4>
            <p className="text-[#A3A3A3]">
              Launch your site and watch your business thrive with continuous support and
              optimization.
            </p>
          </div>
        </div>
        <WorkflowStack />
      </BigContainer>
    </div>
  )
}

export default Process;
