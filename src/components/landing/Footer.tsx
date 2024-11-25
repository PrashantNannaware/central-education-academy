import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import SubscriptionForm from "./SubscriptionForm";

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
            <p className="text-neutral-600 text-sm mb-6">
              Empowering students with quality education since 2010
            </p>
            <SubscriptionForm />
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#courses" className="text-neutral-600 hover:text-primary transition-colors">Courses</a></li>
              <li><a href="#schedule" className="text-neutral-600 hover:text-primary transition-colors">Class Schedule</a></li>
              <li><a href="#testimonials" className="text-neutral-600 hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="text-neutral-600 hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#faq" className="text-neutral-600 hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-neutral-600 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="text-neutral-600">
              <p>123 Education Street</p>
              <p>contact@eduexcel.com</p>
              <p>+1 234 567 890</p>
            </div>
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