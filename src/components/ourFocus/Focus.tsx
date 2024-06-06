import Image from "next/image";
import { FC } from "react";

export const Focus: FC = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div>
        <span className="text-3xl font-bold text-tertiary">Our</span>
        <span className="text-3xl font-bold text-primary"> Focus</span>
      </div>

      <div className="flex items-stretch flex-wrap max-w-screen-lg mx-auto gap-8 md:gap-0">

        <div className=" md:w-1/3  flex flex-col items-center gap-8 :px-4 ">
          <Image
            src={"/img/quality.png"}
            alt="quality"
            height={150}
            width={240}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-primary font-bold text-xl">Quality</h2>
            <p className="text-tertiary text-center">
              Offering a range of the freshest and highest quality everyday
              meals with great value specials cooked to order is our first
              priority.
            </p>
          </div>
        </div>

        <div className="md:w-1/3  flex flex-col items-center gap-8 px-4 ">
          <Image
            src={"/img/community.jpg"}
            alt="quality"
            height={150}
            width={240}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-primary font-bold text-xl">Community</h2>
            <p className="text-tertiary text-center">
              Celebrating our vibrant community, we bring people together with
              the joy of delicious food and shared experiences.
            </p>
          </div>
        </div>

        <div className="md:w-1/3  flex flex-col items-center gap-8 px-4 ">
          <Image
            src={"/img/culture.png"}
            alt="quality"
            height={150}
            width={240}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-primary font-bold text-xl">Culture</h2>
            <p className="text-tertiary text-center">
              Embracing diverse cultures, our menu showcases a fusion of global
              flavors and culinary traditions
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
