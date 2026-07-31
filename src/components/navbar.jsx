import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0b0b]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold cursor-pointer select-none"
        >
          <span className="text-white">My</span>
          <span className="text-green-400">Portfolio</span>
        </motion.h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8 text-gray-300">

          {navLinks.map((item) => (

            <li key={item}>

              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-green-400"
                className="cursor-pointer transition hover:text-green-400"
              >
                {item}
              </Link>

            </li>

          ))}

        </ul>

        {/* Resume Button */}

        <a
          href="/kavita_bande_resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block px-5 py-2 rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition duration-300"
        >
          Resume
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#111] border-t border-white/10"
        >

          {navLinks.map((item) => (

            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 border-b border-white/5 cursor-pointer hover:text-green-400"
            >
              {item}
            </Link>

          ))}

          <a
            href="/kavita_bande_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="block px-6 py-4 text-green-400"
          >
            Resume
          </a>

        </motion.div>

      )}

    </motion.nav>
  );
};

export default Navbar;