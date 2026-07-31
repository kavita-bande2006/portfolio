import { motion } from "framer-motion";
import { FaBriefcase, FaCodeBranch } from "react-icons/fa";

const Experience = () => {

  const experiences = [
    {
      icon: <FaBriefcase />,
      title: "SDE Intern",
      company: "Infotact Solutions",
      duration: "Jan 2026 - March 2026",
      description:
        "Developed and enhanced full-stack web applications by working on frontend components, backend APIs, and application features. Gained hands-on experience with modern development practices, debugging, and building scalable solutions while collaborating with the team."
    },

    {
      icon: <FaCodeBranch />,
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      duration: "May 2026 - Aug 2026",
      description:
        "Contributed to open-source projects through GSSoC by working on feature enhancements, documentation improvements, and code contributions. Collaborated using Git/GitHub workflows, reviewed project structures, and gained experience working with real-world codebases.",
    },
  ];


  return (
    <section
      id="experience"
      className="py-20 px-6"
    >

      <div className="max-w-5xl mx-auto">


        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
        >

          <p className="text-green-400 font-mono">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My journey so far
          </h2>

        </motion.div>



        <div className="mt-12 relative">


          {/* Line */}

          <div className="
          absolute
          left-5
          top-0
          h-full
          w-px
          bg-white/20
          " />



          {experiences.map((item,index)=>(

            <motion.div

              key={item.title}

              initial={{
                opacity:0,
                x:-30
              }}

              whileInView={{
                opacity:1,
                x:0
              }}

              transition={{
                delay:index*0.2
              }}

              viewport={{
                once:true
              }}

              className="
              relative
              pl-16
              mb-10
              "

            >


              {/* Icon */}

              <div className="
              absolute
              left-0
              top-1
              w-10
              h-10
              rounded-full
              bg-green-400
              text-black
              flex
              items-center
              justify-center
              ">

                {item.icon}

              </div>



              <div className="
              p-6
              rounded-2xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              ">


                <div className="
                flex
                flex-wrap
                justify-between
                gap-3
                ">

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>


                  <span className="text-green-400 text-sm">
                    {item.duration}
                  </span>

                </div>



                <p className="text-gray-300 mt-2">
                  {item.company}
                </p>



                <p className="
                text-gray-400
                mt-3
                text-sm
                leading-relaxed
                ">

                  {item.description}

                </p>


              </div>


            </motion.div>


          ))}


        </div>


      </div>

    </section>
  );
};


export default Experience;