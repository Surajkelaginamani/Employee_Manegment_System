import React from 'react'

const CompleteTask = ({ task }) => {
  return (
    <div>
        <div className='bg-green-600 flex-shrink-0 w-[300px] h-full rounded-lg'>
            <div className='flex justify-between p-4'>
                <h1 className='bg-blue-300 p-1 rounded-lg '>{task.category}</h1>
                <h1 className=' text-xs'>{task.date}</h1>
            </div>
            <div className='p-4'>
                <h1 className='text-2xl font-bold'> 
                  {task.title}
                </h1>
                <h2 className=' text-base'>
                    {task.description}
                </h2>
            </div>
            <div className='p-4 flex justify-between'>
                <button className=' bg-green-500 px-4 py-2 rounded-lg mr-4'>Task Completed</button>
               
        </div>
    </div>
    </div>
  )
}

export default CompleteTask
