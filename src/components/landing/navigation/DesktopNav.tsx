import { ChevronDown } from "lucide-react";
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

const DesktopNav = () => {
  const { toast } = useToast();

  const handleNavigation = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
    <div className="hidden md:flex items-center gap-8">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-neutral-600 hover:text-primary transition-colors font-medium">
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

      <div className="flex items-center gap-4">
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
    </div>
  );
};

export default DesktopNav;