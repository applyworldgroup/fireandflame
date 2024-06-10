import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FC } from "react";

export const Team: FC = () => {
  const ourTeam = [
    {
      name: "Ganesh KC",
      position: "CEO & MD",
      desc: `Our CEO and MD has more than 15 years of experience in hospitality recruitment. He also has founded educational institutions that train and develop aspiring industry newcomers`,
      phone: "0402921687",
      email: "ganesh@fireandflame.com.au",
      image: "/img/ganesh.png",
    },
    {
      name: "Deepak Raj Giri",
      position: "Director of Operations",
      desc: `Meet Deepak, our operations leader. With a decade of experience, he's honed his skills at Taj Dubai and led pre-opening teams for franchises like Bavarian and Enzo's Cucina`,
      phone: "0402141221",
      email: "deepak@fireandflame.com.au",
      image: "/img/deepak.png",
    },
    {
      name: "Bibek Wagle",
      position: "Director of Administration",
      desc: `Meet Bibek, our organization expert. His meticulous attention to detail ensures smooth administrative processes. Before this, he honed his hospitality skills as a Chef at Pier One Sydney Harbour, Novotel Sydney Olympic Park, and Crowne Plaza Hawkesbury Valley`,
      phone: "0414865504",
      email: "bibek@fireandflame.com.au",
      image: "/img/bibek.png",
    },
    {
      name: "David O’Connell",
      position: "Director of Operations",
      desc: `David, our consultant chef is the mastermind behind crafting menus that perfectly suit the venue. Thanks to his extensive expertise in menu planning and design. With 35 years of experience in the kitchen, David has a proven track record of creating sensational dishes that leave a lasting impression on guests.`,
      phone: "0403455560",
      email: "david@fireandflame.com.au",
      image: "/img/david.png",
    },
  ];

  return (
    <div className="flex items-center flex-col gap-8">
      <div>
        <span className="text-3xl font-bold text-tertiary">Our</span>
        <span className="text-3xl font-bold text-primary"> Team</span>
      </div>
      <div className="flex flex-wrap  justify-center gap-8 md:gap-0 ">
        {ourTeam.map((item,index) => {
          return (
            <div className="flex flex-col items-center  gap-4 w-1/2 min-w-[350px] p-4" key={index}>
              <div className=" bg-background rounded-full w-[200px] h-[200px] flex items-center justify-center overflow-hidden">
                <Image
                  alt="logo"
                  src={`${item.image}`}
                  height={180}
                  width={180}
                  className="mt-4 "
                />
              </div>
              <div className="text-tertiary flex flex-col items-center gap-2">
                <div className="flex flex-col items-center">
                  <h1 className="font-bold text-2xl ">{item.name}</h1>
                  <span className="text-primary font-semibold italic">
                    {item.position}
                  </span>
                </div>
                <p className="text-center">{item.desc}</p>
                <div className="flex items-center gap-2 flex-col">
                  <FaPhoneAlt size={20} />
                  <span>{item.phone}</span>
                </div>
                <div className="flex items-center gap-2 flex-col">
                  <MdEmail size={24} />
                  <span>{item.email}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
