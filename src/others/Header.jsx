import React from 'react'

const Header = ({ handleLogout, data }) => {
  return (
    <div >
       <div className='justify-between py-7 px-10 m-2 rounded-2xl h-[100px] bg-gradient-to-r from-[#00033D] via-[#0600AB] to-[#0033FF] flex'>
      <h1 className='font-bold font-serif p-2 text-white text-xl'> Hello, {data?.name} 👋</h1>
      <button onClick={handleLogout} className=' bg-red-400 hover:bg-red-700 px-4 rounded-lg text-white h-10 items-center justify-center'>LOG_OUT</button>
    </div>
    </div>
  )
}

export default Header
