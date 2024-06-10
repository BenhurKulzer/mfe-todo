import React from "react";

const Header = () => {
  return (
    <div className="relative pt-6">
      <img
        src="https://static.vecteezy.com/system/resources/previews/011/871/707/large_2x/indigo-gradient-abstract-background-use-it-as-a-banner-design-template-for-ads-websites-platforms-free-photo.jpg"
        alt="cover-image"
        className="w-full absolute top-0 left-0 z-0 h-36"
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-start relative z-10 mb-5">
          <img
            src="https://avatars.githubusercontent.com/u/13542306"
            alt="user-avatar-image"
            className="border-4 border-solid border-white w-36 rounded-full"
          />
        </div>

        <div className="flex sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
          <div className="block">
            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1">Benhur Külzer</h3>
            <p className="font-normal text-base leading-7 text-gray-500">Santa Catarina, Brazil</p>
          </div>

          <div className="flex gap-5">
            <button className="rounded-full py-3.5 px-5 flex items-center group bg-indigo-100">
              <span className="px-2 font-medium text-base leading-7 text-gray-700 transition-all duration-500 group-hover:text-indigo-600">
                Frontend Engineer
              </span>
            </button>

            <button className="rounded-full py-3.5 px-5 flex items-center group bg-indigo-100">
              <span className="px-2 font-medium text-base leading-7 text-gray-700 transition-all duration-500 group-hover:text-indigo-600">
                Mobile Engineer
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
