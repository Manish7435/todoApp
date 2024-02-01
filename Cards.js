// import React from 'react'
// import DeleteIcon from '@material-ui/icons/Delete';
// import {useDrag} from 'react-dnd'

// const Cards = ({task, deleteTask, onDropTask}) => {

//   const [{ isDragging }, dragRef] = useDrag({
//     type: 'task',
//     item: () => ({task }),
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   });

//   console.log(isDragging)

  

//   const handleDeleteTask = ()=>{
//     deleteTask(task.id)
//   }

//   return (
//     <div className='flex h-16 items-center justify-start rounded-md bg-sky-100 px-4'
//     ref={dragRef}>
//     {task.task}
//     <button className='ml-auto' onClick={handleDeleteTask}><DeleteIcon className="text-gray-500 " /></button>
//   </div> 
//   )
// }

// export default Cards