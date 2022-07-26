import React from "react";
import LpSection4Item from "./LpSection4Item";
import vector5 from "../../../assets/images/vector5.svg";
import vector6 from "../../../assets/images/vector6.svg";
import vector7 from "../../../assets/images/vector7.svg";
import vector8 from "../../../assets/images/vector8.svg";
import vector16 from "../../../assets/images/vector16.svg";
import vector17 from "../../../assets/images/vector17.svg";

const LpSection4 = () => {
  return (
    <div>
      <div className="mx-7 text-center mt-20">
        <h1 className="font-Lato font-bold text-2xl md:text-[26px]">
          Why choose us over other platforms?
        </h1>
        <p className="font-Lato font-normal text-base text-tcolor pt-4 md:mx-24 tracking-normal lg:mx-96">
          Our users record the best success rates with their product sales. This
          is why over 1000+ use Nadet as their trusted marketplace for selling
          their digital products.
        </p>
      </div>
      <div className="mx-2 flex justify-center md:mx-[30px] lg:mx-[70px]">
        <div className="pt-10 grid gap-y-5 md:grid-cols-2 md:gap-x-[30px] md:gap-y-6 lg:grid-cols-3">
          <LpSection4Item
            heading="Reviews & Ratings"
            text="Creators understand the customer's evaluation of their products and learn new ways to improve the product."
            image={vector5}
          />
          <LpSection4Item
            heading="LIVE Sessions"
            text="Conduct workshops, go LIVE with your members, have a one-on-one interaction with your audience and do much more."
            image={vector6}
          />
          <LpSection4Item
            heading="Product listing"
            text="Use our simple listing tools to add your product and the enhanced content feature to display product information."
            image={vector17}
          />
          <LpSection4Item
            heading="Seemless Payments"
            text="We make it easy for you to collect payment from your customers and get paid instantly and directly into your account."
            image={vector7}
          />
          <LpSection4Item
            heading="Content Security"
            text="We give all sellers access to tools needed to protect intellectual property and report violations of your contents."
            image={vector16}
          />
          <LpSection4Item
            heading="Automated Follow-ups"
            text="Communicate with your customers with a more advanced and automated reminder emails to personalize thier experience."
            image={vector8}
          />
        </div>
      </div>

      <div className="pt-10 pb-20 flex justify-center">
        <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[199px] ">
          Get Started Today!
        </button>
      </div>
    </div>
  );
};

export default LpSection4;
