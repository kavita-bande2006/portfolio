import { motion } from "framer-motion";
import { FaCode, FaBrain, FaLaptopCode } from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaCode />,
      title: "Full Stack Development",
      description:
        "Building scalable web applications using modern frontend and backend technologies.",
    },

    {
      icon: <FaLaptopCode />,
      title: "Problem Solving",
      description:
        "Practicing Data Structures & Algorithms to improve logical thinking and coding skills.",
    },
  ];


  return (
    <section
      id="about"
      className="py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">


        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <p className="text-green-400 font-mono">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Building software with curiosity
            <br />
            beyond boundaries.
          </h2>

        </motion.div>



        {/* Story */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="
          mt-10
          max-w-4xl
          text-gray-400
          text-lg
          leading-relaxed
          "
        >

          <p>
            I am a B.Tech undergraduate at NIT Raipur who started my journey in Biotechnology
            and discovered my passion for building software solutions.
            Combining analytical thinking from science with programming,
            I enjoy creating full-stack applications and exploring
            AI-driven technologies.
          </p>


          <p className="mt-5">
            Currently, I focus on developing scalable web applications,
            strengthening my Data Structures & Algorithms skills, and
            continuously learning new technologies to solve real-world problems.
          </p>


        </motion.div>




        {/* Cards */}

        <div className="
        grid
        md:grid-cols-3
        gap-6
        mt-14
        ">

          {cards.map((card, index) => (

            <motion.div

              key={card.title}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.5,
                delay:index * 0.15
              }}

              viewport={{
                once:true
              }}

              whileHover={{
                y:-8
              }}

              className="
              p-6
              rounded-2xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-lg
              hover:border-green-400/40
              transition
              "

            >

              <div className="
              text-green-400
              text-3xl
              mb-5
              ">

                {card.icon}

              </div>


              <h3 className="
              text-xl
              font-semibold
              ">

                {card.title}

              </h3>


              <p className="
              text-gray-400
              mt-3
              text-sm
              leading-relaxed
              ">

                {card.description}

              </p>


            </motion.div>

          ))}

        </div>


      </div>

    </section>
  );
};


export default About;