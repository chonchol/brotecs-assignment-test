import React from "react";
import Avatar from "../assets/avatar.svg";

const EmployeeCard = (employee) => {
  // console.log(employee.employee);
  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <img
          src={employee.employee.employeePicture || Avatar}
          alt=""
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h3 className="text-lg font-bold text-center mt-2 text-gray-700 dark:text-gray-400">
          {employee.employee.employeeName}
        </h3>
        <p className="text-center text-gray-700 dark:text-gray-400">
          {employee.employee.employeePhone}
        </p>
        <p className="text-center text-gray-700 dark:text-gray-400">
          {employee.employee.employeeEmail}
        </p>
        <p className="text-center text-gray-700 dark:text-gray-400">
          {employee.employee.employeeAddress}
        </p>
      </div>
    </>
  );
};

export default EmployeeCard;
