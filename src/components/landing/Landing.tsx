import { FC } from "react";

export const Landing: FC = () => {
  return (
    <div className="flex flex-col items-center gap-16 ">
      <h1 className="text-2xl md:text-3xl font-bold text-primary text-center">Catering | Restaurant | Cafe Operations</h1>
      <div className="flex gap-8">
        <button className="bg-primary px-4 py-2 text-sm text-white rounded-md">
            Menu
        </button>
        <button className="border border-primary px-4 py-2 text-sm text-black rounded-md">
            Contact
        </button>
      </div>
    </div>
  );
};
