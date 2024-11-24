import { useState } from "react";
import { Menu, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleNavigation = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleStudentLogin = () => {
    toast({
      title: "Coming Soon",
      description: "Student login functionality will be available soon.",
      duration: 3000,
    });
  };

  const handleEnrollNow = () => {
    toast({
      title: "Enrollment Process",
      description: "Please contact our admissions team to start your enrollment process.",
      duration: 3000,
    });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-primary" />
          <span className="text-xl font-semibold">EduExcel</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleNavigation('courses')} 
            className="text-neutral-600 hover:text-primary transition-colors font-medium"
          >
            Courses
          </button>
          <button 
            onClick={() => handleNavigation('schedule')} 
            className="text-neutral-600 hover:text-primary transition-colors font-medium"
          >
            Schedule
          </button>
          <button 
            onClick={() => handleNavigation('testimonials')} 
            className="text-neutral-600 hover:text-primary transition-colors font-medium"
          >
            Testimonials
          </button>
          <button 
            onClick={() => handleNavigation('contact')} 
            className="text-neutral-600 hover:text-primary transition-colors font-medium"
          >
            Contact
          </button>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={handleStudentLogin}
            className="px-4 py-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Student Login
          </button>
          <button 
            onClick={handleEnrollNow}
            className="button-secondary"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-neutral-200/50 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden glass-panel mt-2 rounded-xl p-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => handleNavigation('courses')}
              className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left"
            >
              Courses
            </button>
            <button 
              onClick={() => handleNavigation('schedule')}
              className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left"
            >
              Schedule
            </button>
            <button 
              onClick={() => handleNavigation('testimonials')}
              className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left"
            >
              Contact
            </button>
            <hr className="border-neutral-200" />
            <button 
              onClick={handleStudentLogin}
              className="text-primary hover:text-primary/80 transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left"
            >
              Student Login
            </button>
            <button 
              onClick={handleEnrollNow}
              className="button-secondary w-full"
            >
              Enroll Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;