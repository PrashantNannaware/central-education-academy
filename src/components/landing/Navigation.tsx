import { GraduationCap, Search, LogIn, Menu, BookOpen, Users, BookMarked, School, Info, FileQuestion, ScrollText } from "lucide-react";
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

const Navigation = () => {
  const { toast } = useToast();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 mt-4">
        <div className="flex items-center justify-between h-20 bg-white/80 backdrop-blur-sm rounded-full shadow-lg px-8">
          {/* Menu Button with Dropdown */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost"
                  className="bg-white/50 hover:bg-white/80 text-primary hover:text-primary/90 
                           flex items-center gap-2 px-6 py-2 rounded-full 
                           shadow-sm hover:shadow-md transition-all duration-300
                           border border-neutral-200/50 hover:border-neutral-300/50"
                >
                  <Menu className="w-5 h-5" />
                  <span className="text-sm font-medium">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-2 p-2 bg-white/95 backdrop-blur-sm border border-neutral-200/50 rounded-xl shadow-xl">
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>About Us</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Our Team</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                  <School className="w-4 h-4 text-primary" />
                  <span>Campus</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Courses Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost"
                  className="bg-white/50 hover:bg-white/80 text-primary hover:text-primary/90 
                           flex items-center gap-2 px-6 py-2 rounded-full 
                           shadow-sm hover:shadow-md transition-all duration-300
                           border border-neutral-200/50 hover:border-neutral-300/50"
                >
                  <BookMarked className="w-5 h-5" />
                  <span className="text-sm font-medium">Courses</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 mt-2 p-2 bg-white/95 backdrop-blur-sm border border-neutral-200/50 rounded-xl shadow-xl">
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>NEET Preparation</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                  <GraduationCap className="w-4 h-4 text-secondary" />
                  <span>JEE Main & Advanced</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                  <GraduationCap className="w-4 h-4 text-accent-green" />
                  <span>Foundation Courses</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Admissions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost"
                  className="bg-white/50 hover:bg-white/80 text-primary hover:text-primary/90 
                           flex items-center gap-2 px-6 py-2 rounded-full 
                           shadow-sm hover:shadow-md transition-all duration-300
                           border border-neutral-200/50 hover:border-neutral-300/50"
                >
                  <ScrollText className="w-5 h-5" />
                  <span className="text-sm font-medium">Admissions</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 mt-2 p-2 bg-white/95 backdrop-blur-sm border border-neutral-200/50 rounded-xl shadow-xl">
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Admission Process</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                  <ScrollText className="w-4 h-4 text-primary" />
                  <span>Required Documents</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Fee Structure</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* FAQs Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost"
                  className="bg-white/50 hover:bg-white/80 text-primary hover:text-primary/90 
                           flex items-center gap-2 px-6 py-2 rounded-full 
                           shadow-sm hover:shadow-md transition-all duration-300
                           border border-neutral-200/50 hover:border-neutral-300/50"
                >
                  <FileQuestion className="w-5 h-5" />
                  <span className="text-sm font-medium">FAQs</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 mt-2 p-2 bg-white/95 backdrop-blur-sm border border-neutral-200/50 rounded-xl shadow-xl">
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                  <FileQuestion className="w-4 h-4 text-primary" />
                  <span>General FAQs</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                  <FileQuestion className="w-4 h-4 text-primary" />
                  <span>Course-specific FAQs</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                  <FileQuestion className="w-4 h-4 text-primary" />
                  <span>Admission FAQs</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Brand and Logo */}
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 flex items-center justify-center">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-white rounded-full border-2 border-[#003D4C] shadow-lg"></div>
              
              {/* Orange Arc */}
              <div className="absolute inset-0">
                <div className="w-full h-full border-t-4 border-r-4 border-[#F97316] rounded-full transform rotate-45 scale-90"></div>
              </div>
              
              {/* Green Arc */}
              <div className="absolute inset-0">
                <div className="w-full h-full border-b-4 border-l-4 border-[#22C55E] rounded-full transform -rotate-45 scale-90"></div>
              </div>
              
              {/* CEA Text */}
              <span className="relative text-2xl font-bold text-[#003D4C] tracking-tight z-10">CEA</span>
            </div>
            
            {/* Tagline */}
            <div className="flex flex-col items-start">
              <span className="text-lg font-semibold text-[#003D4C] tracking-tight leading-tight">
                Central Educational Academy
              </span>
              <span className="text-sm text-neutral-600 font-medium">
                Your Career is Our Aim
              </span>
            </div>
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;