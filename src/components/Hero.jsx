import React from "react";

const Hero = () => {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/*  */}
      <div className="bg-red-400 md:col-span-5 flex items-center justify-center p-8">
        <div>
          <h1 className="text-7xl font-bold">
            Web Design Impactful Digital{" "}
            <span className="text-primary p-2 border-8 border-primary">
              Products
            </span>
          </h1>
          <p>Description</p>
          <p>Butons</p>
        </div>
      </div>
      <div className="bg-red-600  md:col-span-3">Image</div>
    </section>
  );
};

export default Hero;
