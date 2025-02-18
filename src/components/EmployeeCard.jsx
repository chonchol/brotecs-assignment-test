import React from "react";

const EmployeeCard = () => {
  return (
    <>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <img
            src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
            alt=""
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h3 className="text-lg font-bold text-center mt-2">
            Md Chonchol Mahmud
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-300">
            01722323607
          </p>
          <p className="text-center text-gray-600 dark:text-gray-300">
            chonchol57@gmail.com
          </p>
          <p className="text-center text-gray-600 dark:text-gray-300">
            Nikunja-2
          </p>
        </div>
      </div>
    </>
  );
};

export default EmployeeCard;
