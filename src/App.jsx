import { useState } from 'react'
import Show from "./components/Shows";
import Header from "./components/Header";
import Create from "./components/Create";

function App() {
  const [tasks, settasks] = useState(JSON.parse(localStorage.getItem("tasks"))||[]);

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
< Create tasks={tasks} settasks={settasks}  />
< Show  tasks={tasks}  settasks={settasks}   />

    </div>


</div>
</div>

    </>
  )
}

export default App