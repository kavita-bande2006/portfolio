import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import wonderlustImg from "../assets/projects/wonderlust.png";
import meetsyncImg from "../assets/projects/meetsync.png";

const Projects = () => {

  const projects = [
    {
      title: "WonderLust",
      description:
        "A full-stack Airbnb-inspired platform with authentication, image uploads, and location-based listings.",

      tech: [
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary",
        "Maps"
      ],

      github: "https://github.com/kavita-bande2006/WonderLust-",
      demo: "https://wonderlust-1yza.onrender.com/listings",
      image: wonderlustImg,
    },


    {
      title: "MeetSync",
      description:
        "A real-time video conferencing application enabling seamless communication using modern web technologies.",

      tech: [
        "React",
        "Node.js",
        "WebRTC",
        "Socket.io"
      ],

      github: "https://github.com/kavita-bande2006/MeetSync",
      demo: "https://meet-sync-7get.vercel.app/",
      image: meetsyncImg,
    },
  ];


  return (

    <section
      id="projects"
      className="py-20 px-6"
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
            Projects
          </p>


          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Things I have built
          </h2>

        </motion.div>




        {/* Project Cards */}

        <div className="
        grid
        md:grid-cols-2
        gap-8
        mt-12
        ">


          {projects.map((project,index)=>(


            <motion.div

              key={project.title}

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


              whileHover={{
                y:-8
              }}


              className="
              p-6
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              hover:border-green-400/40
              transition
              "

            >


              {/* Project Image Placeholder */}

              <div className="h-48 overflow-hidden rounded-2xl mb-6">
  <img
    src={project.image}
    alt={project.title}
    className="
      w-full
      h-full
      object-cover
      transition-transform
      duration-500
      hover:scale-105
    "
  />
</div>




              <h3 className="
              text-2xl
              font-semibold
              ">

                {project.title}

              </h3>



              <p className="
              text-gray-400
              mt-3
              text-sm
              leading-relaxed
              ">

                {project.description}

              </p>




              {/* Tech */}

              <div className="
              flex
              flex-wrap
              gap-2
              mt-5
              ">


                {project.tech.map((item)=>(

                  <span
                    key={item}
                    className="
                    px-3
                    py-1
                    rounded-full
                    bg-black/30
                    text-xs
                    text-green-300
                    border
                    border-white/10
                    "
                  >

                    {item}

                  </span>

                ))}


              </div>




              {/* Links */}

              <div className="
              flex
              gap-5
              mt-6
              ">


                <a
                  href={project.github}
                  className="
                  flex
                  items-center
                  gap-2
                  text-gray-300
                  hover:text-green-400
                  transition
                  "
                >

                  <FaGithub />
                  Github

                </a>



                <a
                  href={project.demo}
                  className="
                  flex
                  items-center
                  gap-2
                  text-gray-300
                  hover:text-green-400
                  transition
                  "
                >

                  <FaExternalLinkAlt />
                  Live

                </a>


              </div>



            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );

};


export default Projects;