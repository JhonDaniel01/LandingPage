import React from "react";

const Clients = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20">
      <h1 className="text-2xl font-medium text-center text-gray-800">
        Trusted by greatest companies
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap items-center gap-20">
        <img src="google.png" className="w-40" />
        <img src="airbnb.png" className="w-40" />
        <img src="amazon.png" className="w-40" />
        <img src="shopify.png" className="w-40" />
        <img src="google.png" className="w-40" />
      </div>
    </div>
  );
};

export default Clients;
