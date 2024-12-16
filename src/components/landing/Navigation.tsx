import { GraduationCap, Search, LogIn, Menu, BookOpen, Users, BookMarked, School } from "lucide-react";
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost"
                className="bg-white/50 hover:bg-white/80 text-primary hover:text-primary/90 
                         flex items-center gap-2 px-6 py-2 rounded-full 
                         shadow-sm hover:shadow-md transition-all duration-300
                         border border-neutral-200/50 hover:border-neutral-300/50
                         transform hover:scale-105"
              >
                <Menu className="w-5 h-5" />
                <span className="text-sm font-medium">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-2 p-2 bg-white/95 backdrop-blur-sm border border-neutral-200/50 rounded-xl shadow-xl">
              <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                <BookOpen className="w-4 h-4 text-primary" />
                <span>Courses</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                <Users className="w-4 h-4 text-primary" />
                <span>Community</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-2 border-neutral-200/70" />
              <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                <BookMarked className="w-4 h-4 text-primary" />
                <span>Resources</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-neutral-100/80 transition-colors">
                <School className="w-4 h-4 text-primary" />
                <span>Campus</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Brand and Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              {/* Border */}
              <div className="absolute inset-0 border-2 border-[#003D4C] rounded-lg"></div>
              
              {/* CEA Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-[#003D4C]">CEA</span>
              </div>
              
              {/* Orange Arc */}
              <div className="absolute inset-0">
                <div className="w-full h-full border-t-4 border-r-4 border-[#F97316] rounded-tr-lg transform rotate-45"></div>
              </div>
              
              {/* Green Arc */}
              <div className="absolute inset-0">
                <div className="w-full h-full border-b-4 border-l-4 border-[#22C55E] rounded-bl-lg transform -rotate-45"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary tracking-tight">CEA</span>
              <span className="text-xs text-neutral-600">Central Educational Academy</span>
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