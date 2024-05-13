import { PreviousIcon } from "@/app/components/Reauseable/Icons";
import Link from "next/link";
import React from "react";
import Details from "@/app/components/autoPlans/Buy/Details";
import BuyForm from "@/app/components/autoPlans/Buy/BuyForm";

const Buy = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-customBlue ">
      <Details />
      <BuyForm />
    </div>
  );
};

export default Buy;