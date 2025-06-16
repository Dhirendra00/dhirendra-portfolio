
import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS, responsive design and modern UI/UX patterns"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Node.js, Express, PostgreSQL, MongoDB, RESTful APIs and server-side architecture"
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end web applications, deployment, and maintenance with modern tech stacks"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive, accessible, and performance-optimized applications for all devices"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My Awesome <span className="text-orange-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recent MSc IT graduate with hands-on experience building modern web applications. 
            Specializing in full-stack development with a focus on creating exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white/70 backdrop-blur-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </Card>
          ))}
        </div>

        {/* Education & Experience */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-600 pl-6">
                <h4 className="font-semibold text-gray-900">MSc Information Technology</h4>
                <p className="text-gray-600">University Name • 2023</p>
                <p className="text-sm text-gray-500 mt-2">
                  Specialized in web development, software engineering, and database management
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Projects</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-600 pl-6">
                <h4 className="font-semibold text-gray-900">Redmud Coffee Website</h4>
                <p className="text-gray-600">Full-Stack Development • 2024</p>
                <p className="text-sm text-gray-500 mt-2">
                  E-commerce platform with modern design and payment integration
                </p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="font-semibold text-gray-900">SARAD Organization</h4>
                <p className="text-gray-600">Web Development • 2024</p>
                <p className="text-sm text-gray-500 mt-2">
                  NGO website with content management and donation system
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
