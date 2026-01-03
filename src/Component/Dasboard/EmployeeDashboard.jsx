import React from 'react'
import Header from '../../others/Header'
import Taskcards from '../../others/Taskcards'
import Tasklist from '../../TaskList/Tasklist'

const EmployeeDashboard = ({ handleLogout, data }) => {
  return (
    <div className='min-h-screen bg-[url("https://i.pinimg.com/1200x/c7/d8/f4/c7d8f4f7f39a880bb1ae0758cee2bb30.jpg")] bg-cover bg-center'>
      
      <div>
        <Header handleLogout={handleLogout} data={data} />
      </div>

      {/* RESPONSIVE FIX HERE */}
      <div className='flex flex-wrap gap-4 m-4 justify-center sm:justify-start'>
        <Taskcards data={data} />
      </div>
<div className='px-2 sm:px-4 overflow-x-auto scrollbar-hide scroll-smooth'>
  <Tasklist data={data} />
</div>
    </div>
  )
}

export default EmployeeDashboard
