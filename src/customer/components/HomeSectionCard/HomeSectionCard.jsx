import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[18rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70"
          alt=""
        />
      </div>

      <div className="p-4">
         <h3 className="text-lg font-medium text-gray-900">NoFilter</h3>
         <p className="mt-2 text-sm text-gray-500">Men Solid Pure White Shirt</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
