import { FC } from "react";

export const About: FC = () => {
  return (
    <div className="flex flex-col items-center gap-8" id="about">
        <div>    
      <span className="text-3xl font-bold text-primary">About</span>
      <span className="text-3xl font-bold text-tertiary"> Us</span>
        </div>
      <p className="text-tertiary text-center">
        We are a dynamic catering company led by experienced culinary
        professionals providing topquality catering services. We offer a range
        of options from intimate dinners to large VIP events. Fire and Flame is
        known for exceeding customer expectations, they cater to various needs
        including corporate office catering, individual meal boxes, and buffet
        setups. Our exceptional menus cater to modern, relaxed dining
        experiences, perfect for reconnecting with friends, memorable family
        gatherings, special occasions, and satisfying work lunches or dinners.
      </p>
    </div>
  );
};
