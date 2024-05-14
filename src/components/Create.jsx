import { nanoid } from "nanoid";

import { useState } from 'react'


const Create = ({tasks,settasks })=>{
  const [title,settitle] = useState("")
  const submitform = (e)=>{
    e.preventDefault();
    const newtodo = {id:nanoid(),title,completed:false}
    settasks([...tasks, newtodo]);
    settitle("")
 
    localStorage.setItem("tasks",JSON.stringify([...tasks, newtodo]));
  }

    return(
        <form
         onSubmit={submitform} className=' w-full pl-[1.7vw] pr-[1.7vw] pt-[2vw] flex items-center justify-between ' >
        <input onChange={(e)=>settitle(e.target.value)} value={title} className='w-[17vw] h-[4vw] pl-[2vw] text-white text rounded-full bg-transparent border border-black outline-none placeholder:text-white text-xl ' type="text" placeholder='Title' />
         <button className='capitalize w-[7vw] h-[4vw]  rounded-full text-xl text-white font-[300]' >submit</button>
        </form>
    )
}
export default Create;
