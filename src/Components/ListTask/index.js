import React, { useEffect, useState } from 'react'
import Section from './Section';

function ListTasks({tasks, setTasks}) {
    const [todos, setTodos] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [completed, setCompleted] = useState([])

    useEffect(()=>{
        const fTodos = tasks?.filter((task)=> task.status === 'todo')
        const fInProgress = tasks?.filter((task)=> task.status === 'inprogress')
        const fCompleted = tasks?.filter((task)=> task.status === 'completed')

        setTodos(fTodos)
        setInProgress(fInProgress)
        setCompleted(fCompleted)
    },[tasks])

    const statuses = ['todo','inprogress','completed']

  return (
    <div className='flex gap-16'>
       {statuses.map((status, index)=> (<Section key = {index} status={status} tasks= {tasks} setTasks = {setTasks} todos={todos} inProgress = {inProgress} completed = {completed}/>))}
    </div>
  )
}

export default ListTasks




