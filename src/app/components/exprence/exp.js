import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

const Exp = () => {
  const exp1 = useRef(null);
  const exp2 = useRef(null);
  const exp3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); 

    // Define animations with ScrollTrigger
    gsap.fromTo(exp1.current, { x: "-100%" }, { x: 0, duration: 2, scrollTrigger: { trigger: exp1.current, start: "top 80%" } });
    gsap.fromTo(exp2.current, { y: "100%" }, { y: 0, duration: 2, scrollTrigger: { trigger: exp1.current, start: "top 80%" } });
    gsap.fromTo(exp3.current, { x: "100%" }, { x: 0, duration: 2, scrollTrigger: { trigger: exp1.current, start: "top 80%" } });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex flex-col items-center">
        <h1>Explore My</h1>
        <h1 className="text-[3rem] font-bold">Experience</h1>
      </div>
      <div className="flex justify-between p-[100px]">
        <div className="h-[500px]  w-[30rem] border border-black rounded-lg " ref={exp1}>
          <h1 className="text-center m-[2rem] font-[600] text-[1.5rem] text-[#555555] ">Front-End Development</h1>
          <ul className="flex flex-wrap justify-center gap-5">
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">HTML5</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">CSS3</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">JavaScript</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">React</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">Redux</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">Tailwind Css</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">Boot-Strap</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">LocomotiveJs</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">Gsap</h1></li>
          </ul>
        </div>
        <div className="h-[500px]  w-[30rem] border border-black rounded-lg " ref={exp2}>
          <h1 className="text-center m-[2rem] font-[600] text-[1.5rem] text-[#555555] ">Back-end Development</h1>
          <ul className="flex flex-wrap justify-center gap-20">
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">Mongo DataBase</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">Node.Js</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">Express.Js</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2"></h1>Next.Js</li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2"></h1>MERN Stack</li>
          </ul>
        </div>
        <div className="h-[500px]  w-[30rem] border border-black rounded-lg " ref={exp3}>
          <h1 className="text-center m-[2rem] font-[600] text-[1.5rem] text-[#555555] ">Development Tools & Softwares</h1>
          <ul className="flex flex-wrap justify-center gap-20">
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">Git</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">GitHub</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">Figma</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">Canva</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">Netlify</h1></li>
            <li className="flex items-center m-4"><img src="http://127.0.0.1:3000/checkmark.png" alt="" className="w-8"/> <h1 className="mx-2">VS Code</h1></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Exp;
