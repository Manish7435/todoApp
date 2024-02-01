import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const CreateTask = ({setTasks}) => {
    const [task, setTask]= useState({
        id:"",
        name: "",
        status: "todo"
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(task.name.length<1) return
        
        setTasks((prev)=>{
            const taskList =Array.isArray(prev) ? [...prev, task] : [task];
            localStorage.setItem('tasks', JSON.stringify(taskList))
            return taskList
        })

        setTask({
            id:"",
            name: "",
            status: "todo"
        })
    }
    useEffect(()=>{
        const storedTasks = localStorage.getItem('tasks')
        const renderedTasks = JSON.parse(storedTasks)
        setTasks(renderedTasks)
    },[setTasks])

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Add your task.....' className='outline-none border-b-2 h-8' value={task.name} onChange={(e)=>{
            setTask({...task, id: uuidv4(), name : e.target.value })
        }}/>
        <button type='submit' className='border px-4 py-1 rounded-md bg-emerald-500 text-white ml-2'>Add</button>
    </form>
  )
}

export default CreateTask