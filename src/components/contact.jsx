import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const Contact = () => {

  return (
    <section
      id="contact"
      className="py-24 px-6"
    >

      <div className="max-w-4xl mx-auto text-center">


        <motion.div

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

        >

          <p className="text-green-400 font-mono">
            Contact
          </p>


          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          mt-4
          ">

            Let's build something together

          </h2>


          <p className="
          text-gray-400
          mt-5
          text-lg
          ">

            I'm always open to discussing new opportunities,
            interesting projects, and collaborations.

          </p>


        </motion.div>




        <motion.a

          href="https://mail.google.com/mail/?view=cm&fs=1&to=kavitabande2006@gmail.com"
          target="_blank"
          rel="noopener noreferrer"

          initial={{
            opacity: 0,
            scale: 0.9
          }}

          whileInView={{
            opacity: 1,
            scale: 1
          }}

          viewport={{
            once: true
          }}

          whileHover={{
            scale: 1.05
          }}

          className="
          inline-flex
          items-center
          gap-3
          mt-10
          px-8
          py-4
          rounded-full
          bg-green-400
          text-black
          font-semibold
          "

        >

          <FaEnvelope />

          Email Me

        </motion.a>





        <div className="
        flex
        justify-center
        gap-8
        mt-10
        ">


          <a
            href="https://github.com/kavita-bande2006"
            className="
            text-3xl
            text-gray-400
            hover:text-green-400
            transition
            "
          >

            <FaGithub />

          </a>



          <a
            href="https://www.linkedin.com/in/kavita-bande-983a5836a/"
            className="
            text-3xl
            text-gray-400
            hover:text-green-400
            transition
            "
          >

            <FaLinkedin />

          </a>


        </div>



      </div>


    </section>
  );
};


export default Contact;