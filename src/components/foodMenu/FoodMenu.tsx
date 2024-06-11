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
        Sample Menu
      </button>
      {showFoodMenu && (
        <div className="fixed inset-0 flex items-center justify-center z-30 pb-[5vh] modal">
          <div className="bg-white rounded-md shadow-lg flex flex-col md:flex-row md:max-w-[900px] w-[90vw] h-auto md:h-[90vh] p-8 md:p-0 md:w-[90vw]">
            <div className="h-full w-full md:w-[100%] md:border-r-2">
              <object
                data="assets/foodmenu.pdf"
                type="application/pdf"
                className="w-full h-full hidden md:block rounded-md"
                style={{ border: 0 }}
              >
              </object>
              <div className=" md:hidden flex flex-col items-center justify-center h-full ">
                <p className="text-center mb-4">Explore our Sample menu items.</p>
                <a href="assets/foodmenu.pdf" className="bg-primary px-4 py-2 text-sm text-white rounded-md">
                  Open PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodMenu;
