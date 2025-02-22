import React, { useState } from "react";
import Avatar from "../assets/avatar.svg";
import Modal from "./Modal";

const EmployeeTable = ({
  deleteEmployee,
  setFormData,
  setEditEmployee,
  searchName,
}) => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  const handleDeleteClick = (employeeId) => {
    setSelectedEmployeeId(employeeId);
    setIsModalOpen(true);
  };
  // console.log(employees);
  // console.log(localStorage.getItem("employees").employeeName);

  return (
    <>
      <table className="w-full whitespace-no-wrap">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="px-4 py-3">Profile Picture</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Address</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          {employees.length > 0 ? (
            employees
              .filter((emp) =>
                emp.employeeName
                  .toLowerCase()
                  .includes(searchName.toLowerCase())
              )
              .map((employee) => (
                <tr
                  className="text-gray-700 dark:text-gray-400"
                  key={employee.id}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={employee.employeePicture || Avatar}
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold">
                    {employee.employeeName}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {employee.employeePhone}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {employee.employeeEmail}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {employee.employeeAddress}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-4 text-sm">
                      <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray cursor-pointer"
                        aria-label="Edit"
                        onClick={() =>
                          setEditEmployee(employee) || setFormData(employee)
                        }
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                        </svg>
                      </button>
                      <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray cursor-pointer"
                        aria-label="Delete"
                        onClick={() => handleDeleteClick(employee.id)}
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="px-4 py-3 text-center text-sm text-gray-500 dark:text-gray-400"
              >
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {isModalOpen && (
        <Modal
          title="Delete employee"
          description="Are you sure you want to delete this employee? All of your data will be permanently removed. This action cannot be undone."
          onDelete={() => {
            deleteEmployee(selectedEmployeeId);
            setIsModalOpen(false);
          }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default EmployeeTable;
