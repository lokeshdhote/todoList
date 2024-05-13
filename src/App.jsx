import { nanoid } from "nanoid";
import { useState } from 'react'
import Show from "./components/Shows";
import Header from "./components/Header";
import Create from "./components/Create";

function App() {
  const [tasks, settasks] = useState(JSON.parse(localStorage.getItem("tasks"))||[]);
  const [title,settitle] = useState()

  const submitform = (e)=>{
    e.preventDefault();
    const newtodo = {id:nanoid(),title,completed:false}
    settasks([...tasks, newtodo]);
    settitle("")
 
    localStorage.setItem("tasks",JSON.stringify([...tasks, newtodo]));
  }
  console.log(tasks);

  const complete = (index)=>{
const copytasks = [...tasks]
copytasks[index].completed = !copytasks[index].completed
settasks(copytasks)

localStorage.setItem("tasks",JSON.stringify(copytasks))
  }
  const deleteTasks = (id)=>{
    const updatedDeleteTasks = tasks.filter(tasks => tasks.id !== id);
       settasks(updatedDeleteTasks)
       localStorage.setItem("tasks",JSON.stringify(updatedDeleteTasks))
  }

  const clearAll = () => {
    localStorage.removeItem("tasks");
    settasks([]);
};
 
  return (
    
    < >


< Header tasks={tasks} />
<div><h1  onClick={clearAll} className="text-white text-2xl font-[400]  text-center mt-4" >Clear tasks</h1></div>

   <div className='w-screen flex items-center justify-center mt-[2vw]'>
   <div className='w-[30vw] h-fit rounded border border-white'>
<div className='flex justify-between items-center flex-col ' >
< Create   onSubmit={submitform} title={title} settitle={settitle}  />
< Show  tasks={tasks} onClick1={complete} onClick2={deleteTasks} />

    </div>


</div>
</div>

    </>
  )
}

export default App
