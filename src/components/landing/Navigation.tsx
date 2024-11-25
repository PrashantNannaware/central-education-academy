import { GraduationCap, Search, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EnrollmentForm from "./navigation/EnrollmentForm";
import { useToast } from "@/components/ui/use-toast";

const Navigation = () => {
  const { toast } = useToast();

  const handleStudentLogin = () => {
    toast({
      title: "Coming Soon",
      description: "Student login functionality will be available soon.",
      duration: 3000,
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 mt-4">
        <div className="flex items-center justify-between h-20 bg-white/80 backdrop-blur-sm rounded-full shadow-lg px-8">
          {/* Brand and Logo */}
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary tracking-tight">EduExcel</span>
          </div>

          {/* Main Navigation Items */}
          <div className="flex items-center gap-6">
            {/* Search Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="text-neutral-600 hover:text-primary hover:bg-neutral-100"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Student Login Button */}
            <Button 
              variant="outline"
              onClick={handleStudentLogin}
              className="flex items-center gap-2 text-primary hover:text-primary/90"
            >
              <LogIn className="w-4 h-4" />
              Student Login
            </Button>

            {/* Enroll Now Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-primary text-white hover:bg-primary/90 px-6"
                >
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
      </div>
    </nav>
  );
};

export default Navigation;