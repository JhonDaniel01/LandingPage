import React from "react";

const Works = () => {
  return (
    <div className="p-8 xl:p-20">
      <div className="mt-8">
        <h1 className="text-[40px] font-bold">
          We create world-clas digital products
        </h1>
        <p className="text-xl text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
        {/* Works */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <img
              src="work1.png"
              className="w-full rounded-3xl h-[600px] object-cover mt-0"
            />
            <p className="text-gray-500">App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">App Desing</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              quo rem molestiae laudantium nam quae alias autem tempora commodi,
              soluta corrupti facere ex accusamus dolorum neque qui.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <img
                src="work2.png"
                className="w-full rounded-3xl h-56 object-cover"
              />
              <p className="text-gray-500">App Design - June 20, 2022</p>
              <h3 className="text-2xl font-bold">Lorem ipsum dolor sit</h3>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src="work3.png"
                className="w-full h-56 object-cover rounded-3xl"
              />
              <p className="text-gray-500">App Design - June 20, 2022</p>
              <h3 className="text-2xl font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src="work4.png"
                className="w-full rounded-3xl h-56 object-cover"
              />
              <p className="text-gray-500">App Design - June 20, 2022</p>
              <h3 className="text-2xl font-bold">App Desing</h3>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src="work5.png"
                className="w-full rounded-3xl h-56 object-cover"
              />
              <p className="text-gray-500">App Design - June 20, 2022</p>
              <h3 className="text-2xl font-bold">
                soluta corrupti facere ex accusamus dolorum neque qui.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
