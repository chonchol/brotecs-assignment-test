import React from "react";
import EmployeeTable from "../components/EmployeeTable";
import AddEmployee from "../components/AddEmployee";

const EmployeeListTable = () => {
  return (
    <>
      <div className="container grid px-6 mx-auto">
        <h4 className="my-4 text-lg font-semibold text-gray-600 dark:text-gray-200">
          Add Employee
        </h4>
        <AddEmployee />

        <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          All Employee
        </h4>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <EmployeeTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeListTable;
