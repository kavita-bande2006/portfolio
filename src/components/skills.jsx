import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithubAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";


const Skills = () => {


  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          icon: <FaReact />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
        },
        {
          name: "HTML",
          icon: <SiHtml5 />,
        },
      ],
    },


    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs />,
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
        },
      ],
    },


    {
      title: "Languages",
      skills: [
        {
          name: "Java",
          icon: <FaJava />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
        },
      ],
    },


    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt />,
        },
        {
          name: "Github",
          icon: <FaGithubAlt />,
        },
      ],
    },
  ];



  return (

    <section
      id="skills"
      className="py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

        >

          <p className="text-green-400 font-mono">
            Skills
          </p>


          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technologies I work with
          </h2>


        </motion.div>




        {/* Skill Groups */}


        <div className="
        grid
        md:grid-cols-2
        gap-8
        mt-14
        ">


          {skillGroups.map((group,index)=>(


            <motion.div

              key={group.title}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:index*0.15
              }}

              viewport={{
                once:true
              }}


              className="
              p-7
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              "

            >


              <h3 className="
              text-2xl
              font-semibold
              mb-6
              ">

                {group.title}

              </h3>



              <div className="
              flex
              flex-wrap
              gap-4
              ">


                {group.skills.map(skill=>(


                  <motion.div

                    key={skill.name}

                    whileHover={{
                      scale:1.05,
                      y:-5
                    }}

                    className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    bg-black/30
                    border
                    border-white/10
                    "

                  >

                    <span className="text-green-400 text-xl">
                      {skill.icon}
                    </span>


                    <span className="text-gray-300">
                      {skill.name}
                    </span>


                  </motion.div>


                ))}


              </div>


            </motion.div>


          ))}


        </div>



      </div>


    </section>

  );
};


export default Skills;