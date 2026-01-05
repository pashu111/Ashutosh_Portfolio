import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";


const skills = [
{ name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
{ name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
{ name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
{ name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
{ name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
{ name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
{ name: "Express.js", icon: <SiExpress /> },
{ name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
{ name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
{ name: "Git", icon: <FaGit className="text-red-500" /> },
{ name: "Postman", icon: <SiPostman className="text-orange-600" /> },

];

export default function Skills() {
return (
<section id="skills" className="bg-gray-900 py-20">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-bold mb-8">Skills</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
{skills.map(skill => (
<div
key={skill.name}
className="bg-gray-800 p-6 rounded-xl flex flex-col items-center gap-3 hover:scale-110 transition"
>
<div className="text-4xl">{skill.icon}</div>
<p className="text-gray-200 font-medium">{skill.name}</p>
</div>
))}
</div>
</div>
</section>
);
}