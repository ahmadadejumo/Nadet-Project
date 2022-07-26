import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Add from "../assets/images/Add.svg";
import StatCard from "../components/StatCard";
import analysis from "../assets/images/analysis.svg";
import receipt from "../assets/images/receipt.svg";
import users from "../assets/images/users.svg";
// import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState();
  const useAxiosPrivate = useAxios();
  // const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await useAxiosPrivate.get("/auth/user/", {
          signal: controller.signal,
          withCredentials: false,
        });
        isMounted && setUser(response.data);
      } catch (err) {
        // console.error(err);
        // navigate("/signin", { state: { from: location }, replace: true });
      }
    };

    getUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  });
  return (
    <div className="font-Lato px-5 md:px-10 lg:px-[100px]">
      <div className="lg:flex lg:justify-between lg:items-center">
        <div>
          <h1
            key={user?.pk}
            className="text-center text-[25px] md:text-3xl lg:text-[28px] font-bold pt-[44px]"
          >
            Welcome back, {user?.username}!
          </h1>
          <p className="font-normal text-center text-base md:text-lg lg:text-base md:pt-3 lg:pt-0">
            What would you like to do today again?
          </p>
        </div>
        <div className="flex justify-center pt-[24px]">
          <button className="flex justify-between text-base font-semibold items-center bg-bcolor w-[205px] h-[50px] rounded-lg px-7">
            <img src={Add} alt="addIcon" />
            ADD PRODUCTS
          </button>
        </div>
      </div>
      <p className="text-lg md:text-xl lg:text-lg font-bold pt-[44px]">
        Statistics
      </p>
      <div className="pt-[24px] grid gap-y-[16px] md:grid-cols-3 md:gap-x-5">
        <StatCard
          image={analysis}
          number="#2,670"
          textB="Earnings"
          text="this month"
        />
        <StatCard image={receipt} number="20" textB="Sales" text="in total" />
        <StatCard image={users} number="0" textB="Customers" text="in total" />
      </div>
      <div className="md:flex md:space-x-10 lg:space-x-[30px] md:pt-16 lg:pt-[51px] md:pb-96 lg:pb-[100px]">
        <div className="md:flex-[2]">
          <p className="text-lg md:text-xl font-bold pt-[44px]">Earnings</p>
          <div className="bg-white rounded-[4px] w-full h-[115px] md:h-[130px] lg:h-[225px] mt-[24px] flex justify-center items-center font-bold text-xl">
            Chart will be out soon!!!
          </div>
        </div>
        <div className="md:flex-1">
          <p className="text-lg md:text-xl font-bold pt-[44px]">Transactions</p>
          <div className="bg-white rounded-[4px] w-full h-[119px] md:h-[130px] lg:h-[225px] mt-[24px] flex justify-center items-center font-normal text-base mb-[33px] shadow-[0_2px_15px_rgba(34,34,34,0.08)]">
            No transaction found
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
