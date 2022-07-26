/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../assets/images/Logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import visalogo from "../assets/images/VisaLogo.svg";
import paypal from "../assets/images/PayPal.svg";
import AmericanExpress from "../assets/images/AmericanExpress.svg";
import mclogo from "../assets/images/mclogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F5F4FD]">
      <div className="mx-5 md:mx-5 md:flex md:justify-between lg:justify-center lg:space-x-24">
        <div className="md:w-[250px] lg:w-[300px]">
          <img src={Logo} alt="Logo" className="pt-[60px]" />
          <p className="font-Lato text-base font-normal pt-[30px]">
            Our mission is to help you build a massive connection with your fans
            and followers and monetise them in one place.
          </p>
          <h1 className="font-Lato font-bold text-lg pt-[40px]">Contact Us</h1>
          <a
            href="#222"
            className="font-Lato font-normal  text-bcolor text-base pt-[15px]"
          >
            hello@nadet.co
          </a>
          <div className="space-x-5 mt-[15px]">
            <a href="#444">
              <FacebookIcon />
            </a>
            <a href="#444">
              <TwitterIcon />
            </a>
            <a href="#444">
              <LinkedInIcon />
            </a>
            <a href="#444">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="flex flex-col font-Lato text-base font-normal space-y-3 mt-[60px]">
          <h1 className="font-Lato text-lg font-bold">Sell with Nadet </h1>
          <Link to={"/products"}>Courses & Memberships</Link>
          <Link to={"/products"}>Ebooks & Programs</Link>
          <Link to={"/live-sessions"}>LIVE Sessions</Link>
          <Link to={"/products"}>Event Tickets </Link>
          <Link to={"/products"}>Subscriptions & Services</Link>
          <Link to={"/affiliates"}>Affiliate Program</Link>
          <Link to={"/refer"}>Refer a friend</Link>
        </div>
        <div className="mt-[60px] md:mt-[35px] flex justify-between lg:space-x-16">
          <div className="flex flex-col font-Lato text-base font-normal space-y-3 mt-[25px] md:hidden lg:flex">
            <h1 className="font-Lato text-lg font-bold">Company</h1>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/company-values"}>Company Values</Link>
            <Link to={"/"}>Careers</Link>
            <Link to={"/pricing"}>Pricing</Link>
            <Link to={"/faqs"}>FAQs</Link>
            <Link to={"/events"}>Events</Link>
          </div>

          <div className="lg:flex lg:flex-col">
            <div className="flex flex-col font-Lato text-base font-normal space-y-3 mt-[25px]">
              <h1 className="font-Lato text-lg font-bold">Legal</h1>
              <Link to={"/terms-&-condition"}>Terms of Services</Link>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
              <Link to={"/affiliate-agreement"}>Affiliate Agreement</Link>
            </div>
            <div className="flex flex-col font-Lato text-base font-normal space-y-3 mt-[30px] ">
              <h1 className="font-Lato text-lg font-bold">Learn</h1>
              <Link to={"/"}>Blog</Link>
              <Link to={"/"}>Guides</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-center">
        <hr className="bg-bcolor border-[1px] lg:w-[1000px] mt-[70px] mx-5 md:mx-[30px]" />
      </div>
      <div className="md:flex md:justify-between lg:justify-center lg:space-x-[400px] md:mx-[30px]">
        <p className="font-Lato font-normal text-base text-center pt-[20px] pb-[30px] md:pt-[25px]">
          © 2021 Nadet. All Rights Reserved.
        </p>
        <div className="flex justify-center items-center space-x-3 md:space-x-5 pb-[35px] md:pt-[25px]">
          <img src={visalogo} alt="logo" />
          <img src={paypal} alt="logo" />
          <img src={AmericanExpress} alt="logo" />
          <img src={mclogo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
