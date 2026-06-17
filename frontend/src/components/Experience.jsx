// export default function Experience() {
//   const internships = [
//     {
//       company: "SakRobotics Lab Pvt. Ltd., Bhubaneswar, Odisha",
//       designation: "Software Engineer Intern",
//       duration: "Oct 2025 - Mar 2026",
//       work: "Developed responsive and dynamic user interfaces to enhance usability and performance. Collaborated with cross-functional teams using version control tools and agile methodologies. Gained practical exposure to software development.",
//     },
//     {
//       company: "Striving Squad Pvt Ltd, Bhubaneswar",
//       designation: "Intern Trainee",
//       duration: "June 2024 - July 2024",
//       work: "Worked on a car rental web app using ReactJS and TailwindCSS. Implemented car listings, booking form, and a user-friendly UI.",
//     },
//     {
//       company: "SDI Bhubaneswar",
//       designation: "Embedded Systems Analyst Trainee",
//       duration: "July 2023 - Aug 2023",
//       work: "Worked on a smart home automation system using sensors like PIR, LDR, temperature sensor, and relay modules.",
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 scroll-mt-24"
//     >
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
//         <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
//       </div>
//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="flex flex-col gap-2 mb-10">
//           <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
//             Experience
//           </p>
         
//         </div>

//         <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
//           {internships.map((item, index) => (
//             <div
//               key={index}
//               className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-5 shadow-[0_15px_35px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:p-6"
//             >
//               <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4">
//                 <div>
//                   <h3 className="text-lg font-semibold text-white sm:text-xl">
//                     {item.company}
//                   </h3>
//                   <p className="mt-1 text-sm font-medium text-cyan-300/90">
//                     {item.designation}
//                   </p>
//                 </div>
               
//               </div>
//               <p className="mt-3 text-sm text-slate-400">{item.duration}</p>
//               <p className="mt-4 text-slate-300 leading-relaxed">{item.work}</p>
             
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// export default function Experience() {
//   const experiences = [
//     {
//       company: "SakRobotics Lab Pvt. Ltd.",
//       role: "Software Engineer Intern",
//       duration: "Oct 2025 - Present ",
//       location: "Bhubaneswar, Odisha, India",
      
//     },
//     {
//       company: "Striving Squad Pvt Ltd",
//       role: "Intern Trainee",
//       duration: "Jun 2024 - Jul 2024 · ",
//       location: "Bhubaneswar, Odisha, India",
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       className="bg-slate-950 py-16 px-4 sm:px-6"
//     >
//       <div className="max-w-4xl mx-auto">
//         {/* Heading */}
//         <div className="mb-12">
//           <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
//             Experience
//           </p>

//           <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
//             Work Experience
//           </h2>
//         </div>

//         {/* Timeline */}
//         <div className="relative border-l border-slate-700 ml-5 space-y-10">
//           {experiences.map((item, index) => (
//             <div key={index} className="relative pl-10">
//               {/* Dot */}
//               <div className="absolute -left-[11px] top-2 h-5 w-5 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-500/40"></div>

//               {/* Card */}
//               <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1">
//                 {/* Company */}
//                 <div className="flex items-start gap-4">
//                   {/* Logo */}
//                   <div className="h-14 w-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 font-bold text-xl">
//                     E
//                   </div>

//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-white">
//                       {item.role}
//                     </h3>

//                     <p className="text-slate-300 font-medium mt-1">
//                       {item.company}
//                     </p>

//                     <p className="text-sm text-slate-400 mt-1">
//                       {item.duration}
//                     </p>

//                     {item.location && (
//                       <p className="text-sm text-slate-500 mt-1">
//                         {item.location}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Skills */}
                
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









import { Briefcase, MapPin, CalendarDays } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "SakRobotics Lab Pvt. Ltd.",
      role: "Software Engineer Intern",
      duration: "Oct 2025 - Present",
      location: "Bhubaneswar, Odisha, India",
      logo: "S",
      color: "from-cyan-500 to-blue-500",
    },
    {
      company: "Striving Squad Pvt Ltd",
      role: "Intern Trainee",
      duration: "Jun 2024 - Jul 2024",
      location: "Bhubaneswar, Odisha, India",
      logo: "S",
      color: "from-purple-500 to-pink-500",
    },
     {
      company: "SDI Bhubaneswar",
      role: "Intern Trainee",
      duration: "Jul 2023 - Aug-2023",
      location: "Bhubaneswar, Odisha, India",
      logo: "S",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-20 px-4 sm:px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-semibold">
            EXPERIENCE
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            My Professional Journey
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Building modern web applications, collaborating with teams,
            and creating impactful digital experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 group"
              >
                {/* Timeline Dot */}
                <div
                  className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r ${item.color} shadow-lg shadow-cyan-500/30 ring-4 ring-slate-950`}
                >
                  <Briefcase className="w-5 h-5 text-white" />
                </div>

                {/* Card */}
                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Top */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Logo */}
                      <div
                        className={`h-14 w-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}
                      >
                        {item.logo}
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {item.role}
                        </h3>

                        <p className="text-cyan-300 font-medium mt-1">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                      <CalendarDays className="w-4 h-4" />
                      {item.duration}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mt-5 flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>

                  {/* Bottom Glow */}
                  <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-cyan-500/40 via-blue-500/20 to-transparent" />

                  {/* Optional Description */}
                  <p className="mt-5 text-slate-300 leading-relaxed">
                    Worked on modern web technologies, collaborated with teams,
                    and contributed to building responsive and scalable
                    applications with clean UI/UX experiences.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}