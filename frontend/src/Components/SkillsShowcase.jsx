import React from "react";

const SkillsShowcase = () => {
  const skills = [
    { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React Js", "Bootstrap CSS" , "Tailwind CSS"] },
    { category: "Backend", skills: ["ASP.NET Core", "Entity Framework", "SQL Server"] },
    { category: "Testing & Analysis", skills: ["Manual Testing", "Test Scenarios", "Business Analysis"] },
    { category: "Design", skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator"] },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl p-6 rounded-2xl">
        <h2 className="text-3xl text-center mb-6">Yeteneklerim</h2>
        <br />
        <div className="p-6 border border-gray-300 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-4 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <span key={i} className="badge badge-primary badge-lg">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcase;
