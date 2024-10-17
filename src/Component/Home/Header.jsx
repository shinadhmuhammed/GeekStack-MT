import React from "react";

const Header = () => {
  return (
    <div className=" text-white p-6 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-4xl font-light mb-2">
          <span className="text-gray-500">Vanakkam, this is </span>
          <span className="text-white">coimbatore</span>
          <span className="text-yellow-500">.ai</span>
        </h1>
      </div>
      <p className="text-3xl text-gray-500 font-light">
        How can I help you today?
      </p>
    </div>
  );
};

export default Header;
