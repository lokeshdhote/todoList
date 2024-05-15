
const Shows= ({tasks,settasks})=>{



  const deleteTasks = (id)=>{
    const updatedDeleteTasks = tasks.filter(tasks => tasks.id !== id);
       settasks(updatedDeleteTasks)
       localStorage.setItem("tasks",JSON.stringify(updatedDeleteTasks))
  }


    return(
        <>
         { tasks.length > 0 ? (
    tasks.map((tasks,index)=>{
      return(
        <li  key={tasks.id}  className=" mt-[2vw] mb-5 flex justify-left gap-[9vw] items-center border rounded-xl p-5" >
        <div className='flex items-center gap-4 pl-[1vw]'  >

          <h2 className={`capitalize text-white text-2xl font-[400]`} >{tasks.title}</h2>
          <h2 className={`capitalize text-white text-2xl font-[400]`} >{tasks.email}</h2>

          <h2 className={`capitalize text-white text-2xl font-[400]`} >{tasks.contact}</h2>

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
    
     }</>

    )
}


export default Shows;