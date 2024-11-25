import { GraduationCap } from "lucide-react";
import DesktopNav from "./navigation/DesktopNav";
import MobileNav from "./navigation/MobileNav";

const Navigation = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-[100]">
      <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between shadow-lg backdrop-blur-md bg-gradient-to-r from-white/80 to-neutral-50/80">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-primary" />
          <span className="text-xl font-semibold">EduExcel</span>
        </div>
        
        <DesktopNav />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navigation;