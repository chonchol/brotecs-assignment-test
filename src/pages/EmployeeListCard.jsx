import EmployeeCard from "../components/EmployeeCard";
const EmployeeListCard = () => {
  return (
    <>
      <div className="container grid px-6 mx-auto">
        <h4 className="my-4 text-lg font-semibold text-gray-600 dark:text-gray-200">
          Employee List
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
        </div>
      </div>
    </>
  );
};

export default EmployeeListCard;
