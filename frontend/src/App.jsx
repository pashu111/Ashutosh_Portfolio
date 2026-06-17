import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
const [dark, setDark] = useState(true);


return (
<div className={dark ? "dark" : ""}>
<div className="dark:bg-gray-950 bg-gray-100 dark:text-white text-gray-900 min-h-screen">
<Navbar dark={dark} setDark={setDark} />
<Hero />
<About />
<Skills />
<Experience />
<Projects />
<Contact />
<Footer />
</div>
</div>
);
}