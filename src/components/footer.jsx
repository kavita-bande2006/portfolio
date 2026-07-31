import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/10">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">


        <p className="text-gray-500 text-sm">
          © 2026 Kavita Bande. All rights reserved.
        </p>



        <p className="text-gray-500 text-sm">
          Built with React & Tailwind CSS
        </p>



        <div className="flex gap-5">

          <a
            href="https://github.com/kavita-bande2006"
            target="_blank"
            rel="noreferrer"
            className="
            text-gray-400
            hover:text-green-400
            transition
            "
          >
            <FaGithub size={20}/>
          </a>


          <a
            href="https://www.linkedin.com/in/kavita-bande-983a5836a/"
            target="_blank"
            rel="noreferrer"
            className="
            text-gray-400
            hover:text-green-400
            transition
            "
          >
            <FaLinkedin size={20}/>
          </a>

        </div>


      </div>

    </footer>
  );
};

export default Footer;