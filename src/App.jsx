import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EmployeeListTable from "./pages/EmployeeListTable";
import EmployeeListCard from "./pages/EmployeeListCard";
import { Routes, Route } from "react-router-dom";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [employees, setEmployees] = useState(() => {
    return JSON.parse(localStorage.getItem("employees")) || [];
  });

  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar sidebar={sidebar} />

        <div className="flex flex-col flex-1 w-full">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />

          <main className="h-full pb-16 overflow-y-auto">
            <Routes>
              <Route path="/" element={<EmployeeListCard />} />
              <Route
                path="/list"
                element={
                  <EmployeeListTable
                    addEmployee={addEmployee}
                    updateEmployee={updateEmployee}
                    deleteEmployee={deleteEmployee}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
