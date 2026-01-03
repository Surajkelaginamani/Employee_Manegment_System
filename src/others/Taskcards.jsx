import React from 'react'

const Taskcards = ({ data }) => {
  return (
    <div className='flex flex-wrap gap-4 '>
        <div className=' w-[200px] h-[100px] p-5 rounded-4xl bg-[#0600AB]'>
          <h2 className='text-2xl text-white'>{data?.taskCount?.newTask}</h2>
          <h1 className='text-xl text-white'>NEW TASK</h1>
        </div>
           <div className=' w-[200px] h-[100px] p-5 rounded-4xl bg-violet-700'>
          <h2 className='text-2xl text-white'>{data?.taskCount?.active}</h2>
          <h1 className='text-xl text-white'>ACTIVE  TASK</h1>
        </div>
           <div className=' w-[200px] h-[100px] p-5 rounded-4xl bg-green-700'>
          <h2 className='text-2xl text-white'>{data?.taskCount?.completed}</h2>
          <h1 className='text-xl text-white'>COMPLETED TASK</h1>
        </div>
          <div className=' w-[200px] h-[100px] p-5 rounded-4xl bg-red-700'>
          <h2 className='text-2xl text-white'>{data?.taskCount?.failed}</h2>
          <h1 className='text-xl text-white'>FAILED TASK</h1>
        </div>

    </div>
  )
}

export default Taskcards
