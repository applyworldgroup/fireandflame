import React, { FC, useState, useEffect } from "react";

interface FoodMenu {}

const FoodMenu: FC<FoodMenu> = ({}) => {
  const [showFoodMenu, setShowFoodMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (showFoodMenu && e.target.classList.contains("modal")) {
        setShowFoodMenu(false);
      }
    };

    if (showFoodMenu) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showFoodMenu]);

  return (
    <div>
      <button
        className="bg-primary px-4 py-2 text-sm text-white rounded-md"
        onClick={() => setShowFoodMenu(true)}
      >
        FoodMenu
      </button>
      {showFoodMenu && (
        <div className="fixed top-0 left-0 flex items-center justify-center h-[100vh] w-[100vw] z-30 pb-[5vh] modal">
          <div className="h-[80vh] w-[90vw] md:max-w-[900px] rounded-md flex flex-col md:flex-row shadow-lg bg-white">
            <div className="h-full w-full md:w-[100%] md:border-r-2">
              <iframe
                src={"assets/foodmenu.pdf"}
                className="w-full h-full"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodMenu;
