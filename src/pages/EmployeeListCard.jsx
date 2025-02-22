import EmployeeCard from "../components/EmployeeCard";
const EmployeeListCard = ({ searchName }) => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  return (
    <>
      <div className="container grid px-6 mx-auto">
        <h4 className="my-4 text-lg font-semibold text-gray-600 dark:text-gray-200">
          Employee List
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {employees.length > 0 ? (
            employees
              .filter((emp) =>
                emp.employeeName
                  .toLowerCase()
                  .includes(searchName.toLowerCase())
              )
              .map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
              ))
          ) : (
            <h1 className="py-3 text-sm text-gray-500 dark:text-gray-400">
              No Employee Found
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployeeListCard;
