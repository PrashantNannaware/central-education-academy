import { Menu, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EnrollmentForm from "./EnrollmentForm";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleNavigation = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleCourseSelect = (course: string) => {
    toast({
      title: `${course} Course`,
      description: `You selected the ${course} course. Contact us for more information.`,
      duration: 3000,
    });
  };

  const handleStudentLogin = () => {
    toast({
      title: "Coming Soon",
      description: "Student login functionality will be available soon.",
      duration: 3000,
    });
  };

  return (
    <>
      <button 
        className="md:hidden p-2 hover:bg-neutral-200/50 rounded-full transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden glass-panel mt-2 rounded-xl p-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left">
                Courses <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleCourseSelect("Mathematics")}>
                  Mathematics
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCourseSelect("English")}>
                  English Language & Literature
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCourseSelect("Science")}>
                  Science (Physics, Chemistry, Biology)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="w-full">
                  Enroll Now
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Enroll in a Course</DialogTitle>
                </DialogHeader>
                <EnrollmentForm />
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MobileNav;