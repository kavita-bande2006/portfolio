import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ finishLoading }) => {

  const messages = [
    "Initializing Kavita....",
    "Loading Biotechnology background 🧬",
    "Transitioning into Software Engineering 💻",
    "Building Full Stack Applications ⚡",
    "Exploring AI Systems 🤖",
    "Portfolio Ready 🚀"
  ];

  const [index,setIndex] = useState(0);
  const [progress,setProgress] = useState(0);


  useEffect(()=>{

    const interval = setInterval(()=>{

      setIndex(prev => {

        if(prev === messages.length-1){

          clearInterval(interval);

          setTimeout(()=>{
            finishLoading();
          },1000);

          return prev;
        }

        return prev+1;

      });


      setProgress(prev => Math.min(prev+20,100));


    },700);


    return ()=>clearInterval(interval);

  },[]);



return (

<motion.div

className="fixed inset-0 bg-black text-green-400 flex items-center justify-center z-50 font-mono"

initial={{opacity:1}}

exit={{opacity:0}}

>


<div className="w-[350px]">


<motion.h1

className="text-5xl text-white text-center mb-10"

initial={{scale:0.8,opacity:0}}

animate={{scale:1,opacity:1}}

>

Kavita Bande

</motion.h1>



<div className="border border-green-400 p-5 rounded-lg">


<p>

{">"} {messages[index]}

<span className="animate-pulse">_</span>

</p>



<div className="mt-6 h-2 bg-gray-700 rounded">


<motion.div

className="h-full bg-green-400 rounded"

animate={{width:`${progress}%`}}

transition={{duration:0.5}}

/>


</div>


<p className="text-right mt-2 text-sm">

{progress}%

</p>


</div>


</div>


</motion.div>

)

}

export default LoadingScreen;