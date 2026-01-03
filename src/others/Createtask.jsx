import React, { useState } from 'react'
const Createtask = () => {
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [completionDate, setCompletionDate] = useState("")
  const [assignedTo, setAssignedTo] = useState("")
  const [taskType, setTaskType] = useState("")

  
  // build and persist a task object, update task counts and notify listeners
  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      title: taskTitle,
      description: taskDescription,
      date: completionDate,
      category: taskType
    };

    const data = JSON.parse(localStorage.getItem("employees")) || [];
    const assignedName = assignedTo.trim();
    let found = false;

    const updatedData = data.map((elem) => {
      if (elem.name === assignedName) {
        found = true;
        const updatedTasks = [...(elem.tasks || []), newTask];
        const updatedTaskCount = {
          ...elem.taskCount,
          total: (elem.taskCount?.total || 0) + 1,
          newTask: (elem.taskCount?.newTask || 0) + 1
        };
        console.log("Updated Employee Data:", { ...elem, tasks: updatedTasks, taskCount: updatedTaskCount });
        return { ...elem, tasks: updatedTasks, taskCount: updatedTaskCount };
      }
      return elem;
    });

    if (!found) {
      alert("Assigned employee not found. Please check the name.");
      return;
    }

    localStorage.setItem("employees", JSON.stringify(updatedData));
    // notify other components in the same window
    window.dispatchEvent(new Event("employeesUpdated"));

    setTaskTitle("");
    setTaskDescription("");
    setCompletionDate("");
    setAssignedTo("");
    setTaskType("");
  }
  return (
    <div className='mt-0.5'>
      <div className="bg-white w-full max-w-2xl  rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create New Task
        </h2>

        <form className="space-y-5" onSubmit={submitHandler}>

          <input
            type="text"
            placeholder="Enter task title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <textarea
            rows="4"
            placeholder="Enter task description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="date"
            value={completionDate}
            onChange={(e) => setCompletionDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="text"
            placeholder="Employee name"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="text"
            placeholder="Development, Design, Testing"
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold"
          >
            Create Task
          </button>

        </form>
      </div>
    </div>
  )
}

export default Createtask
