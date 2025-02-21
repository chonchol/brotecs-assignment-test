import React, { useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import AddEmployee from "../components/AddEmployee";

const EmployeeListTable = ({
  addEmployee,
  updateEmployee,
  deleteEmployee,
  searchName,
}) => {
  const [formData, setFormData] = useState({
    id: "",
    employeeName: "",
    employeeEmail: "",
    employeePhone: "",
    employeePicture: "",
    employeeAddress: "",
  });
  const [editEmployee, setEditEmployee] = useState(null);
  return (
    <>
      <div className="container grid px-6 mx-auto">
        <h4 className="my-4 text-lg font-semibold text-gray-600 dark:text-gray-200">
          Add Employee
        </h4>
        <AddEmployee
          addEmployee={addEmployee}
          updateEmployee={updateEmployee}
          formData={formData}
          setFormData={setFormData}
          editEmployee={editEmployee}
          setEditEmployee={setEditEmployee}
        />

        <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          All Employee
        </h4>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <EmployeeTable
              deleteEmployee={deleteEmployee}
              setEditEmployee={setEditEmployee}
              setFormData={setFormData}
              searchName={searchName}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeListTable;
