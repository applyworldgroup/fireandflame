import { FC } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const BusinessEnquiry: FC = () => {
  return (
    <div className="flex flex-col items-center gap-4" id="about">
      <div>
        <span className="text-3xl font-bold text-primary">Business</span>
        <span className="text-3xl font-bold text-tertiary"> Enquiry</span>
      </div>
      <div className="text-tertiary text-center flex flex-col gap-6 ">
        <span className="italic">For Direct Business Enquiries</span>
        <div className="flex gap-8 flex-col md:flex-row">
          <a
            className="flex items-center gap-2 justify-center  px-4 py-1 rounded-md bg-secondary/90  transform transition duration-300 hover:scale-105  text-white hover:bg-secondary hover:top-20"
            href={`tel:0404000345`}
          >
            <FaPhoneAlt size={28} />
            <div className="flex flex-col items-start">
              <span className="text-sm">Ted Elsayed</span>
              <span>0404000345</span>
            </div>
          </a>
          <a
            className="flex items-center gap-2 justify-center  px-4 py-1 rounded-md bg-secondary/90  transform transition duration-300 hover:scale-105  text-white hover:bg-secondary"
            href={`tel:0404000345`}
          >
            <FaPhoneAlt size={28} />
            <div className="flex flex-col items-start">
              <span className="text-sm">Michel Farah</span>
              <span>0415601464</span>
            </div>
          </a>
      
        </div>
        <a
            className="flex items-center gap-2 justify-center"
            href={`mailto:info@fireandflame.com.au`}
          >
            <MdEmail size={24} />
            <span>info@fireandflame.com.au</span>
          </a>
      </div>
    </div>
  );
};
