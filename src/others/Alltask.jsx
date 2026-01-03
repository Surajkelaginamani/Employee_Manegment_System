import React, { useContext } from 'react'
import { AuthContext } from '../Context/Authprovider'

const Alltask = () => {
  const auth = useContext(AuthContext)
  console.log("Alltask auth data:", auth)

  return (
    <div className='bg-gray-300 w-full max-w-[900px] h-[70vh] sm:h-[600px] rounded-2xl shadow-2xl mt-4 sm:mt-7 p-4 sm:p-8 overflow-auto mx-auto'>
      
      <h1 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center sm:text-left'>
        All TASK CREATED
      </h1>

      {
        auth?.employeesData?.map((elem, index) => {
          return (
            <div
              key={index}
              className='p-4 sm:p-6 mb-4 bg-blue-500 rounded-2xl'
            >
              {/* Employee Name */}
              <h2 className='text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 text-center sm:text-left'>
                {elem.name}
              </h2>

              {/* Tasks */}
              <div className='space-y-3'>
                {elem.tasks.map((task, i) => (
                  <div
                    key={i}
                    className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-blue-400 px-3 sm:px-4 py-3 rounded-xl text-white'
                  >
                    <span className='text-xs sm:text-sm font-medium'>
                      {task.date}
                    </span>

                    <span className='text-sm sm:text-base font-semibold text-center sm:text-left'>
                      {task.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Alltask
