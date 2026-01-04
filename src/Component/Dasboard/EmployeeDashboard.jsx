import React from 'react'
import Header from '../../others/Header'
import Taskcards from '../../others/Taskcards'
import Tasklist from '../../TaskList/Tasklist'

const EmployeeDashboard = ({ handleLogout, data }) => {
  return (
    <div className='min-h-screen bg-[url("https://i.pinimg.com/1200x/c7/d8/f4/c7d8f4f7f39a880bb1ae0758cee2bb30.jpg")] bg-cover bg-center'>
      
      {/* Dark overlay for professional look */}
      <div className='min-h-screen bg-black/40 backdrop-blur-sm'>
        
        {/* Header */}
        <Header handleLogout={handleLogout} data={data} />

        {/* Main Content Wrapper */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6'>
          
          {/* Task Cards Section */}
          <div className='bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6'>
            <h2 className='text-white text-lg font-semibold mb-4'>
              Task Overview
            </h2>

            <div className='flex flex-wrap gap-4 justify-center sm:justify-start'>
              <Taskcards data={data} />
            </div>
          </div>

          {/* Task List Section */}
          <div className='bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6'>
            <h2 className='text-white text-lg font-semibold mb-4'>
              Your Tasks
            </h2>

            <div className='overflow-x-auto scrollbar-hide'>
              <Tasklist data={data} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
