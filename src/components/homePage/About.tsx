import RevealOnScroll from "../RevealOnScroll";

function About() {

    const frontendSkills = ["React", "Tailwind CSS", "JavaScript", "TypeScript", "HTML", "CSS"];
    const backendSkills = ["Python", "MySQL", "MongoDB", "SQLite", "C/C++", "C#"];



  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>

        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I am a passionate software engineer with a strong background in web development and a keen interest in creating innovative solutions. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies. My goal is to build user-friendly applications that solve real-world problems and enhance the user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="rounded-xl p-6 hove:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                        <div className="flex flex-wrap gap-2">  
                            {frontendSkills.map((tech, key) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" key={key}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hove:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend </h3>
                        <div className="flex flex-wrap gap-2">  
                            {backendSkills.map((tech, key) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" key={key}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li> 
                            <strong> B.S in Computer Science </strong> - University of San Carlos (2020 - 2024)
                        </li>

                        <li> 
                            Relevant Coursework: Data Structures, Web Development, Database Management Systems, Software Engineering
                        </li>

                    </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                    <div className="space-y-4 text-gray-300">
                    <div>
                            <h4 className="font-semibold">
                                Software Engineer - Tech Company (2023 - Present)
                            </h4>
                            <p> Deloped and maintened web applications and cloud services </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">
                                Intern at Software Company (2022 - 2023)
                            </h4>
                            <p> Assisted on building front-end components and APIs </p>
                        </div>


                    </div>
                </div>

            </div>
        </div>

        </RevealOnScroll>
    </section>
  );
}

export default About;