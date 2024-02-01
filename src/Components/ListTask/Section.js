import {  useDrop } from 'react-dnd';
import Header from './Header';
import Task from './Task';

const Section = ({status,tasks,setTasks,todos,inProgress,completed})=>{
    const addItemToSection = (id)=>{
        setTasks((prev)=> {
            const modifiedTasks = prev.map((task)=>{
                if(task.id === id){
                    return {...task, status: status}
                }
                return task
            }) 
            localStorage.setItem('tasks', JSON.stringify(modifiedTasks))
            return modifiedTasks
        })
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item)=> addItemToSection(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

    let text = 'TODO'
    let bg = 'bg-slate-500'
    let tasksToMap = todos

    if(status === 'inprogress'){
        text = 'in progress'
        bg = 'bg-purple-500'
        tasksToMap = inProgress
    }
    if(status === 'completed'){
        text = 'completed'
        bg = 'bg-green-500'
        tasksToMap = completed
    }
    return(
        <div className={`w-64 min-h-96 rounded-md ${isOver ? 'bg-slate-200':''}`} ref={drop}>
          <Header text = {text} bg={bg} count = {tasksToMap.length} />
          {tasksToMap.length > 0 && tasksToMap.map((task)=><Task key={task.id} task = {task} tasks={tasks} setTasks = {setTasks} />)}
        </div>
    )
}
export default Section