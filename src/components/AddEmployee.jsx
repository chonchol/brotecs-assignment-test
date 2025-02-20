import React, { useState } from "react";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    id: "",
    employeeName: "",
    employeeEmail: "",
    employeePhone: "",
    employeePicture: "",
    employeeAddress: "",
  });

  const handleChange = (event) => {
    console.log(event.target.name);

    console.log(event.target.value.length);

    // if (event.target.value.length < 8) {
    //   alert("enter many");
    // }

    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("employees", JSON.stringify(formData));
    console.log(formData);
  };

  return (
    <>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-start gap-10">
            <label className="block text-sm w-full">
              <span className="text-gray-700 dark:text-gray-400">Name</span>
              <input
                className="block w-full mt-1 text-sm border rounded border-gray-300 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-red form-input py-2 pl-2"
                placeholder="Jane Doe"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
              />
            </label>

            <label className="block text-sm w-full">
              <span className="text-gray-700 dark:text-gray-400">Email</span>
              <input
                className="block w-full mt-1 text-sm border rounded border-gray-300 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-green form-input py-2 pl-2"
                placeholder="Enter email address"
                type="email"
                name="employeeEmail"
                value={formData.employeeEmail}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex justify-start gap-10 mt-4">
            <label className="block text-sm w-full">
              <span className="text-gray-700 dark:text-gray-400">
                Phone Number
              </span>
              <input
                className="block w-full mt-1 text-sm border rounded border-gray-300 dark:border-gray-600 dark:text-gray-300 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-green form-input py-2 pl-2"
                placeholder="Enter phone number"
                type="number"
                name="employeePhone"
                value={formData.employeePhone}
                onChange={handleChange}
              />
            </label>

            <label className="block text-sm w-full">
              <span className="text-gray-700 dark:text-gray-400">
                Upload Profile Picture
              </span>
              <input
                className="block w-full mt-1 text-sm border rounded border-gray-300 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input py-2 pl-2"
                type="file"
                name="employeePicture"
                value={formData.employeePicture}
                onChange={handleChange}
              />
            </label>
          </div>

          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">Address</span>
            <textarea
              className="block w-full mt-1 text-sm border rounded border-gray-300 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray pl-2"
              rows="3"
              placeholder="Enter your address"
              name="employeeAddress"
              value={formData.employeeAddress}
              onChange={handleChange}
            ></textarea>
          </label>
          <label className="block mt-4 text-sm">
            <button
              className="button-lg px-8 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </label>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
