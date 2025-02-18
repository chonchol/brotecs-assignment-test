import React from "react";

const AddEmployee = () => {
  return (
    <>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <label className="block text-sm">
          <span className="text-gray-700 dark:text-gray-400">Name</span>
          <input
            className="block w-full mt-1 text-sm border-red-600 dark:text-gray-300 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red form-input py-2 pl-2"
            placeholder="Jane Doe"
          />
        </label>

        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Email</span>
          <input
            className="block w-full mt-1 text-sm border-green-600 dark:text-gray-300 dark:bg-gray-700 focus:border-green-400 focus:outline-none focus:shadow-outline-green form-input py-2 pl-2"
            placeholder="Enter email address"
          />
        </label>

        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Phone Number</span>
          <input
            className="block w-full mt-1 text-sm border-green-600 dark:text-gray-300 dark:bg-gray-700 focus:border-green-400 focus:outline-none focus:shadow-outline-green form-input py-2 pl-2"
            placeholder="Enter phone number"
          />
        </label>

        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            Upload Profile Picture
          </span>
          <input
            className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input py-2 pl-2"
            type="file"
          />
        </label>

        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Address</span>
          <textarea
            className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray pl-2"
            rows="3"
            placeholder="Enter your address"
          ></textarea>
        </label>
        <label className="block mt-4 text-sm">
          <button className="button-lg px-8 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple cursor-pointer">
            Submit
          </button>
        </label>
      </div>
    </>
  );
};

export default AddEmployee;
