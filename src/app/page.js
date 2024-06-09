"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Typed from "typed.js";
import Exp from "./components/exprence/exp";
import LocomotiveScroll from "locomotive-scroll";
import Project from "./components/projects/project";

export default function Home() {
  const navbarRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const nameRef = useRef(null);
  const scrollRef = useRef(null);
  const proffesionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(navbarRef.current, { y: "200px", duration: 2, ease: "power3.out" });
    gsap.to(imgRef.current, { x: "50vw", duration: 2, opacity: 1 });
    gsap.to(textRef.current, { x: "-90vw", duration: 2, opacity: 1 });

    gsap.to(box1Ref.current, {
      x: "-50vw",
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: box1Ref.current,
      },
    });

    gsap.to(box2Ref.current, {
      x: "50vw",
      opacity: 1,
      duration:2,
      scrollTrigger: {
        trigger: box2Ref.current,
      },
    });

    const typed = new Typed(nameRef.current, {
      strings: ["Shokatshahin"],
      typeSpeed: 150,
      loop: false,
      cursorChar: "",
      startDelay:2000
    });
    const typed2 = new Typed(proffesionRef.current, {
      strings: ["UI-UX Designer","Web-Devloper"],
      typeSpeed: 150,
      loop: false,
      cursorChar: "",
      startDelay:3000,
    });
    // const scroll = new LocomotiveScroll({
    //   el: scrollRef.current,
    //   smooth: true,
    //   getSpeed: 10,
    // });
    return () => {
      typed.destroy();
      typed2.destroy();
      // scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef}>
      <main className="p-10">
        <div ref={navbarRef}>
          <Navbar />
        </div>
        <div className="flex h-[80vh] items-center justify-center gap-10">
          <img
            ref={imgRef}
            src="http://127.0.0.1:3000/profile-pic.jpg"
            alt="Profile Picture"
            className="rounded-full w-[300px] relative left-[-50%]"
          />
          <div className="text-center relative right-[-100%]" ref={textRef}>
            <h1 className="text-xl text-[#55557A] m-4">Hello, I'm</h1>
            <h1 className="text-5xl font-bold m-4" ref={nameRef}></h1>
            <h1 className="text-2xl font-bold text-[#414155] m-4" ref={proffesionRef}>
              
            </h1>
            <div className="flex gap-4 items-center justify-center m-4">
              <button className="border border-black p-2 rounded-full w-[150px] h-[50px] text-black transition duration-300 ease-in-out hover:bg-[#353535] hover:text-white">
                See Resume
              </button>
              <button className="border border-black p-2 rounded-full w-[150px] h-[50px] bg-[#353535] text-white">
                Contact Info
              </button>
            </div>
            <div className="flex gap-2 justify-center">
              <img
                src="http://127.0.0.1:3000/linkedin.png"
                alt="LinkedIn"
                className="w-8"
              />
              <img
                src="http://127.0.0.1:3000/github.png"
                alt="GitHub"
                className="w-8"
              />
            </div>
          </div>
        </div>
      </main>
      <section className="h-screen">
        <div className="text-center">
          <h1>Get To Know More</h1>
          <h1 className="text-[3rem] font-bold">About Me</h1>
        </div>
        <div className="overflow-hidden">
          <div className="flex h-[100%] justify-center gap-10 m-40">
            <div
              ref={box1Ref}
              className="box border border-black w-[500px] flex items-center justify-center flex-col relative right-[-100%] opacity-0"
            >
              <img
                src="http://127.0.0.1:3000/experience.png"
                alt=""
                className="w-10 "
              />
              <h1>Educational Experience</h1>
              <h1>2+ years</h1>
              <h1>Frontend/Backend Development</h1>
            </div>
            <div
              ref={box2Ref}
              className="box border border-black w-[500px] flex items-center justify-center flex-col relative left-[-100%] opacity-0"
            >
              <img
                src="http://127.0.0.1:3000/education.png"
                alt=""
                className="w-10 "
              />
              <h1>Education</h1>
              <h1>Bachelor of Computer Application</h1>
            </div>
          </div>
          <p className="mx-auto w-[60%] para">
            I'm <b>Software Developer</b> from Bangladesh, I build apps with a
            focus on <b>JavaScript React & Redux</b> considering all the aspects
            of <b>UI/UX</b> . I enjoy turning complex problems into simple,
            beautiful and intuitive designs. <br /> A <b>Software Engineer</b> ,
            who loves to solve problems. I am having an experience of building
            high-performing, responsive, beautiful web applications to deliver a
            unique, intuitive user experience that works, also{" "}
            <b>keen interest in UI/UX</b> with some nice designing skills. I am
            a well-trained teammate who loves to share ideas and prioritizes
            communication in order to achieve goals within the set deadlines. I
            enjoy being challenged and working on projects that require me to
            step outside of my comfort zone.
            <br />
          </p>
        </div>
      </section>
      <section>
        <Exp />
      </section>
      <section>
        <Project/>
      </section>
    </div>
  );
}
