import React from "react";
import HeaderWithText from "../common/HeaderWithText";
import BigContainer from "../layout/BigContainer";
import dashed from "@/assets/images/dashed.svg";

function Process() {
  return (
    <div className="z-10 w-full h-full pt-14">
      <BigContainer>
        <HeaderWithText
          headerFirst="Clear & Simple"
          headerSecond="Process"
        ></HeaderWithText>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 mt-20">
          <div className="items-start flex flex-col gap-6">
            <h4 className="text-white text-2xl">Gathering Information</h4>
            <p className="text-[#A3A3A3]">
              Explore your market, get to know your competitors inside out, and
              uncover what your customers truly crave.
            </p>
          </div>
          <div className="items-center flex flex-col text-center gap-6">
            <h4 className="text-white text-2xl">Design & Develop</h4>
            <p className="text-[#A3A3A3]">
              Let&apos;s start designing and developing. We&apos;ll brainstorm
              ideas, refine them, and bring them to life
            </p>
          </div>
          <div className="items-end flex flex-col text-right gap-6">
            <h4 className="text-white text-2xl ">Launch & Scale</h4>
            <p className="text-[#A3A3A3]">
              Launch your site and watch your business thrive with continuous
              support and optimization.
            </p>
          </div>
        </div>
        <div
          className="hidden relative w-full md:flex flex-row justify-between mt-10"
          style={{ backgroundImage: `url${dashed}`}}
        >
          <div className="w-7 h-7 rounded-full bg-white"></div>
          <div className="w-7 h-7 rounded-full bg-white"></div>
          <div className="w-7 h-7 rounded-full bg-white"></div>
        </div>
      </BigContainer>
    </div>
  );
}

export default Process;
