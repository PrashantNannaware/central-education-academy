import { GraduationCap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import DesktopNav from "./navigation/DesktopNav";
import MobileNav from "./navigation/MobileNav";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#8B1A1A] to-[#6B1515]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">EduExcel</span>
          </div>

          <DesktopNav />
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-white/90">
              <Search className="w-5 h-5" />
            </Button>
            <Button className="bg-white text-[#8B1A1A] hover:bg-white/90">
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