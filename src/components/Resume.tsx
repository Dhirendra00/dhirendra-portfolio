
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, Award, Briefcase, Eye, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import jsPDF from 'jspdf';

export const Resume = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownloadCV = () => {
    setIsDialogOpen(true);
  };

  const handlePreview = () => {
    setIsDialogOpen(false);
    setIsPreviewOpen(true);
  };

  const handleDownload = () => {
    setIsDialogOpen(false);
    generateAndDownloadPDF();
  };

  const generateAndDownloadPDF = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Create new images for the CV pages
    const img1 = new Image();
    const img2 = new Image();
    
    img1.crossOrigin = 'anonymous';
    img2.crossOrigin = 'anonymous';
    
    img1.onload = () => {
      // Add first page
      const canvas1 = document.createElement('canvas');
      const ctx1 = canvas1.getContext('2d');
      canvas1.width = img1.width;
      canvas1.height = img1.height;
      ctx1?.drawImage(img1, 0, 0);
      
      const imgData1 = canvas1.toDataURL('image/jpeg', 1.0);
      pdf.addImage(imgData1, 'JPEG', 0, 0, 210, 297);
      
      // Load second image
      img2.onload = () => {
        const canvas2 = document.createElement('canvas');
        const ctx2 = canvas2.getContext('2d');
        canvas2.width = img2.width;
        canvas2.height = img2.height;
        ctx2?.drawImage(img2, 0, 0);
        
        const imgData2 = canvas2.toDataURL('image/jpeg', 1.0);
        pdf.addPage();
        pdf.addImage(imgData2, 'JPEG', 0, 0, 210, 297);
        
        // Download the PDF
        pdf.save('Dhirendra_Baduwal_CV.pdf');
      };
      
      img2.src = '/lovable-uploads/abde7b37-9b58-4e74-bc0c-80f30117deb2.png';
    };
    
    img1.src = '/lovable-uploads/bb33e202-2069-4d77-b1f0-311513ec2acc.png';
  };

  return (
    <>
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

      {/* Download/Preview Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-gray-900">
              Download CV
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Choose how you'd like to access my CV
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col gap-4 mt-6">
            <Button
              onClick={handlePreview}
              variant="outline"
              className="w-full py-6 text-lg border-orange-200 hover:bg-orange-50 hover:border-orange-300"
            >
              <Eye className="mr-2 h-5 w-5" />
              Preview CV
            </Button>
            
            <Button
              onClick={handleDownload}
              className="w-full py-6 text-lg bg-orange-600 hover:bg-orange-700"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* CV Preview Dialog */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-gray-900">
              CV Preview
            </DialogTitle>
            <Button
              onClick={() => setIsPreviewOpen(false)}
              variant="ghost"
              size="sm"
              className="absolute right-4 top-4"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/bb33e202-2069-4d77-b1f0-311513ec2acc.png" 
                alt="CV Page 1" 
                className="w-full h-auto"
              />
            </div>
            <div className="border rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/abde7b37-9b58-4e74-bc0c-80f30117deb2.png" 
                alt="CV Page 2" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <Button
              onClick={handleDownload}
              className="bg-orange-600 hover:bg-orange-700"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
