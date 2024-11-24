import { useState } from "react";
import { Menu, GraduationCap, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

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

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    toast({
      title: "Enrollment Request Submitted",
      description: "We'll contact you shortly to complete your enrollment.",
      duration: 5000,
    });
  };

  const EnrollmentForm = () => (
    <form onSubmit={handleEnrollSubmit} className="space-y-4">
      <Input
        placeholder="Full Name"
        value={enrollmentData.name}
        onChange={(e) => setEnrollmentData({ ...enrollmentData, name: e.target.value })}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={enrollmentData.email}
        onChange={(e) => setEnrollmentData({ ...enrollmentData, email: e.target.value })}
        required
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        value={enrollmentData.phone}
        onChange={(e) => setEnrollmentData({ ...enrollmentData, phone: e.target.value })}
        required
      />
      <Input
        placeholder="Preferred Course"
        value={enrollmentData.course}
        onChange={(e) => setEnrollmentData({ ...enrollmentData, course: e.target.value })}
        required
      />
      <Button type="submit" className="w-full">Submit Enrollment</Button>
    </form>
  );

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-[100]">
      <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-primary" />
          <span className="text-xl font-semibold">EduExcel</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-neutral-600 hover:text-primary transition-colors font-medium">
              Courses <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[101]">
              <DropdownMenuItem onClick={() => handleCourseSelect("Mathematics")}>
                Mathematics
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCourseSelect("English")}>
                English Language & Literature
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCourseSelect("Science")}>
                Science (Physics, Chemistry, Biology)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCourseSelect("Computer Science")}>
                Computer Science
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCourseSelect("History")}>
                History & Social Studies
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCourseSelect("Languages")}>
                Foreign Languages
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="button-secondary">
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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left">
                Courses <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-[101]">
                <DropdownMenuItem onClick={() => handleCourseSelect("Mathematics")}>
                  Mathematics
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCourseSelect("English")}>
                  English Language & Literature
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCourseSelect("Science")}>
                  Science (Physics, Chemistry, Biology)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCourseSelect("Computer Science")}>
                  Computer Science
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCourseSelect("History")}>
                  History & Social Studies
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCourseSelect("Languages")}>
                  Foreign Languages
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
    </nav>
  );
};

export default Navigation;
