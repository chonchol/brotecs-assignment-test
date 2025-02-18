import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EmployeeListTable from "./pages/EmployeeListTable";

function App() {
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />

        <div className="flex flex-col flex-1 w-full">
          <Navbar />

          <main className="h-full pb-16 overflow-y-auto">
            <EmployeeListTable />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
