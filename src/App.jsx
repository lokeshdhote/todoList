import { useState } from 'react'
import Show from "./components/Shows";
import Header from "./components/Header";
import Create from "./components/Create";

/////hello//
function App() {
  const [tasks, settasks] = useState(JSON.parse(localStorage.getItem("tasks"))||[]);

  const clearAll = () => {
    localStorage.removeItem("tasks");
    settasks([]);
};
 
  return (
    
    < >


< Header tasks={tasks} />
<div><h1  onClick={clearAll} className="capitalize text-white text-2xl font-[400]  text-center mt-4" >remove all the user </h1></div>

   <div className='w-[100%] flex items-center justify-between mt-[2vw] '>

<div className='w-[50%] flex justify-between items-center flex-colgap-[2vw]  ' >
< Create tasks={tasks} settasks={settasks}  />

    </div>
<div className='w-[50%]   ' >
< Show  tasks={tasks}  settasks={settasks}   />

</div>
</div>


    </>
  )
}

export default App
