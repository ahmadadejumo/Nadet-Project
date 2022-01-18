import React from "react";
import Navbar from "../../components/Navbar";
import image10 from "../../assets/images/image10.png";
import dropdown from "../../assets/images/dropdown.svg";
import PriceCard from "./PriceCard";
import vector15 from "../../assets/images/vector15.svg";
import {
  starterPlanList,
  basicPlanList,
  proPlanList,
  premiumPlanList,
} from "./Data";

const Pricing = () => {
  return (
    <div>
      <div className="bg-[#FFF8E8]">
        <Navbar />
        <h1 className="font-Lato font-extrabold text-[28px] md:text-3xl lg:text-4xl text-center pt-[197px] mx-2">
          Our pricing is simple and fair
        </h1>
        <p className="font-Lato font-semibold text-lg text-center pt-5 mx-10 pb-[51px]">
          It’s completely free to get started.{" "}
          <p className="text-bcolor">Save 10% with annual billing</p>
        </p>
      </div>
      <div className="md:flex md:justify-center md:items-center">
        <div className="flex justify-center mt-[50px]">
          <div className="container border border-bcolor w-[150px] h-[50px] flex justify-evenly rounded-lg items-center">
            <img
              src={image10}
              alt="img"
              className="object-contain h-[26px] w-[44px]"
            />
            <div className="border-l h-[26px] border-bcolor" />
            <p>USD</p>
            <img src={dropdown} alt="img" className="h-[7px] w-[11px]" />
          </div>
        </div>
        <div className="mx-5 mt-5 md:mt-12">
          <div className="border border-bcolor rounded-lg h-[50px] md:w-[360px] flex">
            <button className="bg-bcolor h-[50px] w-full rounded-lg">
              Pay monthly
            </button>
            <button className="h-[50px] w-full  rounded-lg">
              Pay yearly (10% off)
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[50px]">
        <PriceCard
          header="Starter plan"
          text="Share what you know. Get started on Nadet with our free set of features"
          display="hidden"
          subHeading="FREE"
          listPlan={starterPlanList.map(({ id, title }) => (
            <div className="flex pt-[25px] items-center space-x-3">
              <img src={vector15} alt="img" />
              <h1 key={id}>{title}</h1>
            </div>
          ))}
        />
        <PriceCard
          header="Basic Plan"
          text="Grow your business. Upgrade from the free plan with a more advanced feature. Includes everything in Starter Plan"
          subHeading="$29 {10% off for Annual}"
          listPlan={basicPlanList.map(({ id, title }) => (
            <div className="flex pt-[25px] items-center space-x-3">
              <img src={vector15} alt="img" />
              <h1 key={id}>{title}</h1>
            </div>
          ))}
        />
        <PriceCard
          header="Premium Plan"
          text="Scale your business with our most powerful set of features Includes everything in Starter, Basic & Pro Plan"
          subHeading="$99 {10% off for Annual} "
          display={"hidden"}
          listPlan={premiumPlanList.map(({ id, title }) => (
            <div className="flex pt-[25px] items-center space-x-3">
              <img src={vector15} alt="img" />
              <h1 key={id}>{title}</h1>
            </div>
          ))}
        />
      </div>
    </div>
  );
};

export default Pricing;
