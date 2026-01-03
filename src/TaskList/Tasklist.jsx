import React from 'react'
import Accepct from './Accepct'
import Newtask from './Newtask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const Tasklist = ({data}) => {
    console.log("Tasklist data:", data);
  return (
   
    <div className=' overflow-x-auto flex gap-4 h-[400px] w-screen p-4 text-white h-[45%] '>
        {data.tasks.map((elem) => {
            if(elem.active) {
                  return <Accepct key={elem.id} task={elem}/>
        }
         if (elem.newTask) {
            return <Newtask key={elem.id} task={elem}  />
        } 
        if (elem.failed) {
            return <FailedTask key={elem.id} task={elem} />
        } 
         if (elem.completed) {
            return <CompleteTask key={elem.id} task={elem} />
        }
    } )
}        
    </div>
  )
}

export default Tasklist
