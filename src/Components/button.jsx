import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";



const Button = (link) => {
  return (
    <a href="Hi%20Mudberry%20Studio!%20%F0%9F%91%8B%20I'm%20interested%20in%20the%20%22Hand%20Building%20Techniques%20for%20Pottery%22%20course.%20%F0%9F%8F%BA%20Can%20you%20provide%20more%20details%20on%20schedule%20and%20enrollment%3F%20%F0%9F%A4%94
    "
      className="group relative px-4 py-2 font-medium hover:text-green-400 text-slate-100 transition-colors duration-[400ms] my-4" >
      <span className="flex items-center ">Book now <FaWhatsapp className="text-[22px]  ml-2" /></span>
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-white transition-all duration-100 group-hover:w-full" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-white transition-all delay-100 duration-100 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-white transition-all delay-200 duration-100 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-white transition-all delay-300 duration-100 group-hover:h-full" />
    </a>
  );
};

export default Button;