import React from "react";
// import DataForm from "./components/Form/DataForm";
import DataForm from './components/Form/DataForm' 
import DataTable from "./components/Table/DataTable";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Contact Management System
      </h1>
      
      {/* Contact Entry Form */}
      <DataForm />

      {/* Data Table */}
      <div className="mt-10">
        <DataTable />
      </div>
    </div>
  );
};

export default App;
