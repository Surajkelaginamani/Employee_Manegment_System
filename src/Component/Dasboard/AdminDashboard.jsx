import React from "react";
import Createtask from "../../others/Createtask"; 
import Header from "../../others/Header";
import Alltask from "../../others/Alltask";

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div>
      <Header handleLogout={handleLogout} />

      {/* RESPONSIVE LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-4 p-2">
        
        {/* Create Task Section */}
        <div className="w-full lg:w-[600px] mx-auto lg:mx-0">
          <Createtask />
        </div>

        {/* All Tasks Section */}
        <div className="w-full overflow-x-auto">
          <Alltask />
        </div>

      </div>
    </div>
  );
};
export default AdminDashboard;