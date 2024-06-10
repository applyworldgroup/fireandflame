import Image from "next/image";
import { FC } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer: FC = () => {
  return (
    <div className=" flex flex-col items-center">
      <Image
        alt="logo"
        src={"/img/fireandflamehospitality.png"}
        height={200}
        width={200}
        className="scale-75 md:scale-100 "
      />
      <div className="flex flex-col gap-4">

      <div className="flex flex-col items-center  text-sm  text-tertiary gap-4">
        <FaMapLocationDot size={28} />
          <p className="text-center">
            Suite 55/Level 5, 104 Bathurst Street, <br /> Sydney Town Hall NSW 2000,
            Australia
          </p>
        </div>

        <div className="flex flex-col items-center  text-sm  text-tertiary gap-4">
        <FaPhoneAlt size={20}/>
          <p className="text-center">
          +61 291 362 399
          </p>
        </div>

        <div className="flex flex-col items-center  text-sm  text-tertiary gap-4">
        <MdEmail size={28}/>
          <p className="text-center">
            info@fireandflame.com.au
          </p>
        </div>


        <div className="m-4 text-sm italic text-tertiary">
        &copy; {new Date().getFullYear()} Fire and Flame Hospitality. All rights reserved.
      </div>
     
        
      </div>
    </div>
  );
};
