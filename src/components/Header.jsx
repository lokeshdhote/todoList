const Header= ({tasks})=>{
    return(
        <div className='w-[22vw] h-[10vw] rounded-full bg-red-500 flex items-center justify-between pl-[2vw] pr-[1vw] ml-[38vw] mt-[3vw] ' >
      <div> <h1 className='text-white text-2xl font-[400] gilroy ' >Todo List</h1></div>
      <div className='w-[8vw] h-[8vw] rounded-full bg-black flex items-center justify-center' >
    <h1 className='text-white text-3xl font-[300] gilroy' >{tasks.filter((t)=> t.completed === true).length}/{tasks.length}</h1>
      </div>
     
       </div >
    )
    }
    
    
    
    export default Header;