import React, { useState } from 'react'
import CreateTask from './CreateTask'
import ListTasks from './ListTask'
function Todo() {

  const [tasks, setTasks]= useState([])
  return (
    <>
    <h2 className='p-2 font-bold bg-clip-text text-transparent max-w-64 bg-gradient-to-t from-blue-500 via-green-500 to-emerald-500 text-xl'>TASK MANAGER</h2>
    <div className='flex flex-col items-center mt-[100px] ' >
      <CreateTask tasks={tasks} setTasks={setTasks}/>
      <div className='mt-32'>
          <ListTasks tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
    </>
  )
}

export default Todo















// import { useEffect, useState } from 'react'
// import Cards from './Cards'
// import { v4 as uuidv4 } from 'uuid'
// import { useDrop } from 'react-dnd'

// const Todo = () => {

//   const [todo, setTodo]= useState([])
//   const [inProgressTask, setInProgressTask]= useState([])
//   const [completedTask, setCompletedTask]= useState([])

//   const addTaskToOthers = (item)=>{
//     console.log('item dropped',item)
//   }


//   const [{ isOver }, drop] = useDrop({
//     accept: 'task',
//     drop: (item) => addTaskToOthers(item),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   const handleChange = (text) => {
//     setTodo((prevTodo) => {
//       const updatedTodo = [...prevTodo, { id: uuidv4(), task: text, status: 'pending' }];
//       localStorage.setItem('tasks', JSON.stringify(updatedTodo));
//       return updatedTodo;
//     });
//   };

//   const handleAddTask = ()=>{
//     const taskText = document.querySelector('.taskInput').value
//     if(taskText) handleChange(taskText)
//     document.querySelector('.taskInput').value = ""
//   }

//   const handleDeleteTask = (taskId)=>{
//     setTodo((prev)=>{
//       const updatedTodo = prev.filter((task)=> task.id !== taskId)
//       localStorage.setItem('tasks',JSON.stringify(updatedTodo))
//       return updatedTodo
//     })
//   }
  
//   useEffect(()=>{
//     const storedTodos = localStorage.getItem('tasks')
//     setTodo(JSON.parse(storedTodos))
//   },[])

//   // const pending = todo.filter((task)=>task.status === 'pending')
//   // const inProgress = todo.filter((task)=>task.status === 'inProgress')
//   // const completed = todo.filter((task)=>task.status === 'complete')
  
//   return (
//   <div className='flex justify-center pt-[150px]' >
//     <div className='flex items-center flex-col w-full'>
//       <div className='text-4xl'>Tasks</div>
//       <div>
//         <input type = 'text' placeholder='write your task......' className='taskInput border-b-2 outline-none mt-10'/>
//         <button className='ml-6 border bg-cyan-500 h px-4 py-1 rounded-md' onClick={handleAddTask}> Add </button>
//       </div>
      
//       <div className='flex gap-10 w-full pr-52 pl-52 mt-12' ref={drop}>
//         <div className='flex-1'>
//           <div className='flex justify-center border bg-teal-400 py-2 rounded-md'>ToDos</div>   
//           <div className='mt-4'>
//             {
//               todo.map((item)=>{
//                 return(
//                   <div className='mt-2' key = {item.id}>
//                      <Cards task = {item} deleteTask={handleDeleteTask} />
//                     </div>
//                 )
//               })
//             }
//           </div>
//         </div>
//         <div className='flex-1'>
//             <div className='flex justify-center bg-amber-300 py-2 rounded-md'>InProgress</div>
//             <div className='mt-4'>
//             {
//               inProgressTask.map((item)=>{
//                 return(
//                   <div className='mt-2' key = {item.id}>
//                      <Cards task = {item} deleteTask={handleDeleteTask}  />
//                     </div>
//                 )
//               })
//             }
          
//           </div>
//         </div>
//         <div className='flex-1'>
//             <div className='flex justify-center bg-emerald-400 py-2 rounded-md'>Completed</div>
//             <div className='mt-4'>
//             {
//               completedTask.map((item)=>{
//                 return(
//                   <div className='mt-2' key = {item.id}>
//                      <Cards task = {item} deleteTask={handleDeleteTask}/>
//                     </div>
//                 )
//               })
//             }
//           </div>
//         </div>
//       </div>
//      </div>
     
//   </div>
//   )
// }

// export default Todo