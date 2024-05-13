const Create = ({onSubmit,title,settitle })=>{
    return(
        <form
         onSubmit={onSubmit} className=' w-full pl-[1.7vw] pr-[1.7vw] pt-[2vw] flex items-center justify-between ' >
        <input onChange={(e)=>settitle(e.target.value)} value={title} className='w-[17vw] h-[4vw] pl-[2vw] text-white text rounded-full bg-transparent border border-black outline-none placeholder:text-white text-xl ' type="text" placeholder='Title' />
         <button className='capitalize w-[7vw] h-[4vw]  rounded-full text-xl text-white font-[300]' >submit</button>
        </form>
    )
}
export default Create;
