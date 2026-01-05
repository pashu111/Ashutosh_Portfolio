export default function Experience() {
  const internships = [
    {
      company: "Striving Squad Pvt Ltd, Bhubaneswar",
      designation: "React Developer Intern",
      duration: "June 2024 – July 2024",
      work: "Worked on a Car Rental Web App using ReactJS and TailwindCSS. Implemented car listings, booking form, and user-friendly UI."
    },
    {
      company: "SDI Bhubaneswar",
      designation: "Embedded Systems Analyst",
      duration: "July 2023 – Aug 2023",
      work: "Worked on Smart Home Automation System using sensors like PIR, LDR, temperature sensor, and relay modules."
    }
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>

        <div className="space-y-6">
          {internships.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition transform duration-300"
            >
              <h3 className="text-xl font-semibold text-white">{item.company}</h3>
              <p className="text-md font-medium text-blue-400">{item.designation}</p>
              <p className="text-sm text-gray-400">{item.duration}</p>
              <p className="mt-2 text-gray-300">{item.work}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
