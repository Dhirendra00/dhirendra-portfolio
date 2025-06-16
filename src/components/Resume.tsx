
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, Award, Briefcase } from "lucide-react";

export const Resume = () => {
  const handleDownloadCV = () => {
    // In a real implementation, this would download the actual CV file
    console.log("Downloading CV...");
    // Create a temporary link to simulate download
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual CV file path
    link.download = 'Dhirendra_Baduwal_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perfect Solution <span className="text-orange-600">For Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download my comprehensive CV to learn more about my technical skills, project experience, 
            and professional background in full-stack development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - CV Preview */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-white border-0 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional CV</h3>
                <p className="text-gray-600">Comprehensive overview of skills & experience</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-orange-600" />
                  </div>
                  <span className="text-gray-700">MSc IT Graduate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-orange-600" />
                  </div>
                  <span className="text-gray-700">2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <FileText className="h-4 w-4 text-orange-600" />
                  </div>
                  <span className="text-gray-700">15+ Projects Completed</span>
                </div>
              </div>

              <Button 
                onClick={handleDownloadCV}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </Card>
          </div>

          {/* Right side - Key Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React.js", "Next.js", "TypeScript", "Node.js",
                  "PostgreSQL", "MongoDB", "Tailwind CSS", "Git"
                ].map((skill, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm border">
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Find</h3>
              <div className="space-y-3">
                {[
                  "Complete educational background and certifications",
                  "Detailed project descriptions with tech stacks",
                  "Professional experience and achievements", 
                  "Contact information and references"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Ready to collaborate?</h4>
              <p className="text-gray-600 text-sm">
                I'm available for full-time positions, freelance projects, and consulting opportunities 
                in the UK market. Let's discuss how I can help bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
