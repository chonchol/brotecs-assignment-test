import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EmployeeListTable from "./pages/EmployeeListTable";
import EmployeeListCard from "./pages/EmployeeListCard";
import { Routes, Route } from "react-router-dom";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {sidebar && <Sidebar />}

        <div className="flex flex-col flex-1 w-full">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />

          <main className="h-full pb-16 overflow-y-auto">
            <Routes>
              <Route path="/" element={<EmployeeListCard />} />
              <Route path="/list" element={<EmployeeListTable />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
