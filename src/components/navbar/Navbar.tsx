"use client"
import Image from "next/image";
import { FC } from "react";

export const Navbar: FC = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <Image
        alt="logo"
        src={"/img/FireandFlameHospitality.png"}
        height={300}
        width={300}
        className="scale-75 md:scale-100"
      />
      <ul className="flex gap-8 text-primary font-semibold">
        <li className="cursor-pointer hover:text-secondary hover:underline">Home</li>
        <li 
          className="cursor-pointer hover:text-secondary hover:underline" 
          onClick={() => handleScroll('about')}
        >
          About
        </li>
      </ul>
    </div>
  );
};
