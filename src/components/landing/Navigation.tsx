import { GraduationCap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import DesktopNav from "./navigation/DesktopNav";
import MobileNav from "./navigation/MobileNav";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 mt-4">
        <div className="flex items-center justify-between h-20 bg-white/80 backdrop-blur-sm rounded-full shadow-lg px-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">EduExcel</span>
          </div>

          <DesktopNav />
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-primary hover:text-primary/90">
              <Search className="w-5 h-5" />
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Sign Up
            </Button>
          </div>

          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;