import { nanoid } from "nanoid";
import { useState } from 'react'

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
<div className='w-[22vw] h-[10vw] rounded-full bg-red-500 flex items-center justify-between pl-[2vw] pr-[1vw] ml-[38vw] mt-[3vw] ' >
  <div> <h1 className='text-white text-2xl font-[400] gilroy ' >Todo List</h1></div>
  <div className='w-[8vw] h-[8vw] rounded-full bg-black flex items-center justify-center' >
<h1 className='text-white text-3xl font-[300] gilroy' >{tasks.filter((t)=> t.completed === true).length}/{tasks.length}</h1>
  </div>
 
   </div >
   <div><h1  onClick={clearAll} className="text-white text-2xl font-[400]  text-center mt-4" >Clear tasks</h1></div>
   <div className='w-screen flex items-center justify-center mt-[2vw]'>
   <div className='w-[30vw] h-fit rounded border border-white'>
<div className='flex justify-between items-center flex-col ' >
 <form onSubmit={submitform} className=' w-full pl-[1.7vw] pr-[1.7vw] pt-[2vw] flex items-center justify-between ' >
 <input onChange={(e)=>settitle(e.target.value)}value={title} className='w-[17vw] h-[4vw] pl-[2vw] text-white text rounded-full bg-transparent border border-black outline-none placeholder:text-white text-xl ' type="text" placeholder='Title' />
  <button className='capitalize w-[7vw] h-[4vw]  rounded-full text-xl text-white font-[300]' >submit</button>
 </form>
 {/* <div className='  flex  items-center justify-between pl-[1vw] pr-[1vw] mt-[2vw]' > */}
 { 
 tasks.length > 0 ? (
tasks.map((tasks,index)=>{
  return(
    <li  key={tasks.id}  className=" mt-[2vw] mb-5 flex justify-left gap-[9vw] items-center border rounded-xl p-5" >
    <div className='flex items-center gap-4 pl-[1vw]'  >
      <div onClick={()=> complete(index)} 
      className={ `${tasks.completed ? "bg-green-600" :"border" } w-7 h-7 rounded-full  border-yellow-200 cursor-pointer`} ></div>
      <h2 className={`${tasks.completed ? "line-through" : ""} capitalize text-white text-2xl font-[400]`} >{tasks.title}</h2>
    </div>
    <div className=' flex items-center gap-4 pr-[1vw]'>
    <i   className="ri-file-edit-line text-white text-2xl cursor-pointer "></i>
    <i  onClick={()=> deleteTasks(tasks.id)} className="ri-delete-bin-6-line text-white text-2xl cursor-pointer "></i>
    
    </div>
  </li>

  )
})
 ):(
<h1 className="mt-[2vw] mb-[1vw] text-center text-white text-3xl">
                        No Pending Tasks
                    </h1>
 )

 }

    </div>


</div>
</div>



    </>
      
  
  )
}

export default App
