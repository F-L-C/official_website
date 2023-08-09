import React from "react";
import HomeComponent from "./Home";

const Main = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-60">
        <div className="bg-white h-full w-3/4 text-black">
          <HomeComponent />
        </div>
      </div>
    </>
  );
};

export default Main;
