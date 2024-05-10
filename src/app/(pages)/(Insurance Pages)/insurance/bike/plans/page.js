import React from "react";
import Accordian from "@/app/components/plans/Accordian/Accordian";
import Details from "@/app/components/plans/Details";
// import Call from "@/app/components/plans/Call";

const page = () => {
  return (
    <div className=" p-[30px] bg-white">
      <Details />
      <Accordian />
      {/* <Call /> */}
    </div>
  );
};

export default page;
