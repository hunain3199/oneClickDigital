import React from "react";
import { Mail } from "./Icons";

const Button = ({ icon, children }) => {
  return (
    <>
      <button
        type="submit"
        className="p-[10px] md:py-[12px] md:px-[18px] text-[14px] hover:bg-lightYellow md:text-[18px] rounded-md bg-yellow gap-3 text-black  flex items-center justify-center "
      >
        {icon === "true" && <Mail />}
        {children}
      </button>
    </>
  );
};

export default Button;