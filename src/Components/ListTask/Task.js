import DeleteIcon from '@material-ui/icons/Delete';
import { useDrag } from 'react-dnd';

const Task = ({task,tasks,setTasks})=>{
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: {id: task.id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))

    const handleDelete = (id)=>{
        const fTasks = tasks?.filter((task)=> task.id!== id)
        setTasks(fTasks)
        localStorage.setItem('tasks', JSON.stringify(fTasks))
    }
    return(
        <div className={`flex h-16 items-center px-4 rounded-md my-2 bg-blue-200 ${isDragging ? 'opacity-50':''}`} ref={drag} >
           <p>{task.name}</p> 
           <DeleteIcon className="text-gray-500 ml-auto cursor-pointer " onClick= {()=>handleDelete(task.id)}/>
        </div>
    )
}

export default Task