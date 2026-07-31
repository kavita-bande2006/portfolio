import { motion } from "framer-motion";
import Terminal from "./Terminal";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>


      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">


        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-green-400 font-mono mb-4">
            Hello, I'm
          </p>


          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Kavita Bande

          </h1>


          <h2 className="mt-5 text-2xl md:text-3xl text-gray-400">

            Full Stack Developer

          </h2>


          <p className="mt-6 max-w-xl text-gray-400 text-lg leading-relaxed">

            I build scalable full-stack applications,
            solve challenging problems with DSA,
            and explore AI-powered technologies.

          </p>



          <div className="flex flex-wrap gap-5 mt-10">


            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="
              px-7 py-3
              rounded-full
              bg-green-400
              text-black
              font-semibold
              "
            >

              View Projects

            </motion.a>



            <motion.a
              href="/kavita_bande_resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="
              px-7 py-3
              rounded-full
              border
              border-white/30
              hover:border-green-400
              transition
              "
            >

              Resume

            </motion.a>


          </div>



          {/* Small Stats */}

          <div className="flex gap-10 mt-12">


            <div>

              <h3 className="text-3xl font-bold">
                350+
              </h3>

              <p className="text-gray-500 text-sm">
                DSA Problems
              </p>

            </div>


            <div>

              <h3 className="text-3xl font-bold">
                3+
              </h3>

              <p className="text-gray-500 text-sm">
                Projects
              </p>

            </div>


            <div>

              <h3 className="text-3xl font-bold">
                1
              </h3>

              <p className="text-gray-500 text-sm">
                Internship
              </p>

            </div>


          </div>


        </motion.div>





        {/* RIGHT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >



          {/* Photo Card */}

          <motion.div
            whileHover={{
              rotateY: 8,
              rotateX: -5,
              scale: 1.03,
            }}

            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}

            className="relative w-72 h-80 md:w-80 md:h-96"
          >


            {/* Glow */}

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-r
              from-green-400
              via-cyan-400
              to-purple-500
              blur-2xl
              opacity-30
              rounded-3xl
              "
            />


            <div
              className="
              relative
              w-full
              h-full
              rounded-3xl
              overflow-hidden
              border
              border-white/20
              backdrop-blur-xl
              "
            >

              <img
                src="/profile.png"
                alt="Kavita Bande"
                className="
                w-full
                h-full
                object-cover
                "
              />


            </div>


          </motion.div>




          {/* Terminal */}

          <div className="mt-8">

            <Terminal />

          </div>



        </motion.div>



      </div>


    </section>
  );
};


export default Hero;