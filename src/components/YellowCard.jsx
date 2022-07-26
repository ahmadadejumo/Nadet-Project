import React from "react";
import arrow from "../assets/images/arrow.svg";
import { Link } from "react-router-dom";

const LpSection9 = () => {
  return (
    <div className="mx-5 flex justify-center lg:mx-[140px]">
      <div className="rounded-lg container bg-bcolor w-full">
        <div className="pt-[50px] pb-[50px] mx-8 md:mx-20 lg:mx-28">
          <h1 className="font-Lato font-bold text-2xl md:text-[26px] lg:text-4xl text-center ">
            Nadet is everything you need, to start selling and increase your
            income massively
          </h1>
          <p className="font-Lato text-base font-normal text-center lg:px-[140px] pt-[15px]">
            Create a free account in less than 5 minutes to begin your journey
            to massive success!
          </p>
          <Link to={"/signup"} className="flex justify-center mt-[15px]">
            <button className=" bg-white pr-5 font-Lato tracking-wide font-semibold text-base flex items-center justify-around  rounded-md h-14 w-64 md:w-72 px-5">
              Start Selling With Nadet
              <img src={arrow} alt="arrow" className=" pl-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LpSection9;
