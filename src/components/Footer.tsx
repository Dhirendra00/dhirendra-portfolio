
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Dhirendra Baduwal</h3>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer passionate about creating exceptional digital experiences. 
              Available for freelance projects and full-time opportunities.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:dhirendra@example.com" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-orange-400 transition-colors">Projects</a></li>
              <li><a href="#resume" className="text-gray-400 hover:text-orange-400 transition-colors">Resume</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Web Development</span></li>
              <li><span className="text-gray-400">Full-Stack Solutions</span></li>
              <li><span className="text-gray-400">API Development</span></li>
              <li><span className="text-gray-400">Consulting</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Dhirendra Baduwal © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};
