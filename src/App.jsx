import { useState } from "react";
import LoadingScreen from "./components/loadingScreen";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {

    const [loading, setLoading] = useState(true);


    return (

        <>
            {
                loading ?

                    <LoadingScreen
                        finishLoading={() => setLoading(false)}
                    />

                    :

                    <div>
                        <Navbar />
                        <Hero />
                        <About />
                        <Skills />
                        <Projects />
                        <Experience />
                        <Contact />
                        <Footer />
                    </div>

            }

        </>

    )

}

export default App;