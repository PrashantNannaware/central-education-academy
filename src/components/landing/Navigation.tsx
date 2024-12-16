import { GraduationCap, Search, LogIn, Menu, BookOpen, Users, BookMarked, School, ChevronDown, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EnrollmentForm from "./navigation/EnrollmentForm";
import StudentLoginForm from "./navigation/StudentLoginForm";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { toast } = useToast();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 mt-4">
        <div className="flex items-center justify-between h-20 bg-white/80 backdrop-blur-sm rounded-full shadow-lg px-8">
          {/* Brand and Logo */}
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <div className="absolute inset-0 bg-white rounded-full border-2 border-[#003D4C] shadow-lg"></div>
              <div className="absolute inset-0">
                <div className="w-full h-full border-t-4 border-r-4 border-[#F97316] rounded-full transform rotate-45 scale-90"></div>
              </div>
              <div className="absolute inset-0">
                <div className="w-full h-full border-b-4 border-l-4 border-[#22C55E] rounded-full transform -rotate-45 scale-90"></div>
              </div>
              <span className="relative text-2xl font-bold text-[#003D4C] tracking-tight z-10">CEA</span>
            </div>
            
            <div className="flex flex-col items-start">
              <span className="text-lg font-semibold text-[#003D4C] tracking-tight leading-tight">
                Central Educational Academy
              </span>
              <span className="text-sm text-neutral-600 font-medium">
                Your Career is Our Aim
              </span>
            </div>
          </div>

          {/* Navigation Dropdowns */}
          <div className="hidden md:flex items-center gap-6">
            {/* Courses Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Courses
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>
                  <Link to="/courses/medical" className="flex items-center gap-2">
                    Medical Entrance
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/courses/engineering" className="flex items-center gap-2">
                    Engineering Entrance
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/courses/foundation" className="flex items-center gap-2">
                    Foundation Courses
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Admissions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Admissions
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>
                  <Link to="/admissions/process" className="flex items-center gap-2">
                    Admission Process
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/admissions/requirements" className="flex items-center gap-2">
                    Requirements
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/admissions/fees" className="flex items-center gap-2">
                    Fee Structure
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* FAQs Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  FAQs
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>
                  <Link to="/faqs/general" className="flex items-center gap-2">
                    General FAQs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/faqs/courses" className="flex items-center gap-2">
                    Course FAQs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/faqs/admissions" className="flex items-center gap-2">
                    Admission FAQs
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="text-neutral-600 hover:text-primary hover:bg-neutral-100"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Student Login Button with Drawer */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button 
                  variant="outline"
                  className="flex items-center gap-2 text-primary hover:text-primary/90"
                >
                  <LogIn className="w-4 h-4" />
                  Student Login
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[95vh] p-6">
                <DrawerHeader>
                  <DrawerTitle className="text-2xl font-bold">Student Login</DrawerTitle>
                </DrawerHeader>
                <div className="overflow-y-auto max-h-[calc(95vh-100px)]">
                  <StudentLoginForm />
                </div>
              </DrawerContent>
            </Drawer>

            {/* Enroll Now Button with Drawer */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button 
                  className="bg-primary text-white hover:bg-primary/90 px-6"
                >
                  Enroll Now
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[95vh] p-6">
                <DrawerHeader>
                  <DrawerTitle className="text-2xl font-bold">Enroll in a Course</DrawerTitle>
                </DrawerHeader>
                <div className="overflow-y-auto max-h-[calc(95vh-100px)]">
                  <EnrollmentForm />
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost"
            className="md:hidden"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;