import React,{useEffect, useRef} from "react";
import gsap from 'gsap';


const Project = () => {
    const project_box = useRef(null)
    const project_box2 = useRef(null)
    const project_box3 = useRef(null)
    useEffect(() => {
        gsap.fromTo(project_box.current,{x:"-100%"},{x:0,scrollTrigger: {trigger: project_box.current,},duration:2}),
        gsap.fromTo(project_box2.current,{y:"-100%"},{y:0,scrollTrigger: {trigger: project_box.current,},duration:3})
        gsap.fromTo(project_box3.current,{x:"100%"},{x:0,scrollTrigger: {trigger: project_box.current,},duration:2})
    
    }, [])
    
  return (
    <div className="h-screen overflow-hidden">
      <h1 className="text-center">Browse My Recent</h1>
      <h1 className="text-[3rem] text-center font-bold">Projects</h1>
      <div className="flex items-center justify-between p-20 gap-10">
        <div className="h-[30vw] w-[30vw] border border-black rounded-md flex flex-col items-center justify-center p-5 m-5" ref={project_box}>
            <img src="image.png" alt="" className="w-[500px] mx-auto m-5 rounded-xl" />
            <h1 className="text-[3rem] text-center font-bold m-10">Fanta Page</h1>
            <div>
            <button className="border border-black w-[200px] h-[50px] m-3 rounded-xl hover:bg-slate-700 hover:text-white hover:transition-all-150 hover:duration-500">Live Demo</button>
            <button className="border border-black w-[200px] h-[50px] m-3  rounded-xl hover:bg-slate-700 hover:text-white hover:transition-all-150 hover:duration-500">Git Hub</button>
            </div>
        </div>
        <div className="h-[30vw] w-[30vw] border border-black rounded-md flex flex-col items-center justify-center p-5 m-5" ref={project_box2}>
            <img src="image.png" alt="" className="w-[500px] mx-auto m-5 rounded-xl" />
            <h1 className="text-[3rem] text-center font-bold m-10">Fanta Page</h1>
            <div>
            <button className="border border-black w-[200px] h-[50px] m-3 rounded-xl hover:bg-slate-700 hover:text-white hover:transition-all-150 hover:duration-500">Live Demo</button>
            <button className="border border-black w-[200px] h-[50px] m-3  rounded-xl hover:bg-slate-700 hover:text-white hover:transition-all-150 hover:duration-500">Git Hub</button>
            </div>
        </div>
        <div className="h-[30vw] w-[30vw] border border-black rounded-md flex flex-col items-center justify-center p-5 m-5" ref={project_box3}>
            <img src="image.png" alt="" className="w-[500px] mx-auto m-5 rounded-xl" />
            <h1 className="text-[3rem] text-center font-bold m-10">Fanta Page</h1>
            <div>
            <button className="border border-black w-[200px] h-[50px] m-3 rounded-xl hover:bg-slate-700 hover:text-white hover:transition-all-150 hover:duration-500">Live Demo</button>
            <button className="border border-black w-[200px] h-[50px] m-3  rounded-xl hover:bg-slate-700 hover:text-white hover:transition-all-150 hover:duration-500">Git Hub</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
