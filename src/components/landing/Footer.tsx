import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-100">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container-padding">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span className="text-xl font-semibold">EduExcel</span>
            </div>
            <p className="text-neutral-600 text-sm">
              Empowering students with quality education since 2010
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#courses" className="text-neutral-600 hover:text-primary transition-colors">Courses</a></li>
              <li><a href="#schedule" className="text-neutral-600 hover:text-primary transition-colors">Class Schedule</a></li>
              <li><a href="#testimonials" className="text-neutral-600 hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="text-neutral-600 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-neutral-600">
              <li>123 Education Street</li>
              <li>contact@eduexcel.com</li>
              <li>+1 234 567 890</li>
            </ul>
          </div>
        </div>
        
        <div className="container-padding mt-12 pt-8 border-t border-neutral-200">
          <p className="text-center text-neutral-600 text-sm">
            © {new Date().getFullYear()} EduExcel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;