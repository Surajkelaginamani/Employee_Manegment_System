import React from "react";
import Createtask from "../../others/Createtask"; 
import Header from "../../others/Header";
import Alltask from "../../others/Alltask";

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div className='min-h-screen bg-[url("https://i.pinimg.com/1200x/c7/d8/f4/c7d8f4f7f39a880bb1ae0758cee2bb30.jpg")] bg-cover bg-center'>
      
      {/* Dark overlay */}
      <div className='min-h-screen bg-black/40 backdrop-blur-sm'>
        
        {/* Header */}
        <Header handleLogout={handleLogout} />

        {/* Main Container */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          
          <div className='flex flex-col lg:flex-row gap-6'>
            
            {/* Create Task Section */}
            <div className='w-full lg:w-[420px]'>
              <div className='bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6'>
                <h2 className='text-white text-lg font-semibold mb-4'>
                  Create New Task
                </h2>
                <Createtask />
              </div>
            </div>

            {/* All Tasks Section */}
            <div className='flex-1'>
              <div className='bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6'>
                <h2 className='text-white text-lg font-semibold mb-4'>
                  All Assigned Tasks
                </h2>
                <div className='overflow-x-auto scrollbar-hide'>
                  <Alltask />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
