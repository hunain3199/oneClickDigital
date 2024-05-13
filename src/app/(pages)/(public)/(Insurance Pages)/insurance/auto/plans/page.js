import React from "react";
import Details from "@/app/components/plans/Details";
import Accordian from "@/app/components/autoPlans/AutoAccordian";

const page = () => {
  return (
    <div className=" p-[30px] bg-customBlue">
      <Details />
      <Accordian />
    </div>
  );
};

export default page;