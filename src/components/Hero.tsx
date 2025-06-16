
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-200 rounded-full opacity-60 animate-pulse delay-2000"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <p className="text-orange-600 font-medium text-lg">Hey! I Am</p>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Dhirendra<br />
              <span className="text-orange-600">Baduwal</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Full-Stack Developer with MSc IT graduate specializing in modern web technologies. 
              Passionate about creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('resume')}
              className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start">
            <a href="https://github.com" className="text-gray-600 hover:text-orange-600 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-orange-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Client logos */}
          <div className="pt-8">
            <p className="text-sm text-gray-500 mb-4">Work For All Time Brand & Client</p>
            <div className="flex gap-8 items-center justify-center lg:justify-start opacity-60">
              <div className="w-16 h-8 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">SARAD</div>
              <div className="w-16 h-8 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">Redmud</div>
              <div className="w-16 h-8 bg-gray-300 rounded flex items-center justify-center text-xs">Portfolio</div>
            </div>
          </div>
        </div>

        {/* Right content - Profile image placeholder */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              DB
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg animate-bounce">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Available</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
              <div className="text-center">
                <div className="text-orange-600 font-bold text-lg">2+</div>
                <div className="text-xs text-gray-500">Years Exp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
