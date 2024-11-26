import { useState } from "react";
import { Menu, X, Home, BookOpen, Calendar, Users, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: BookOpen, label: "Courses", href: "/courses" },
    { icon: Calendar, label: "Schedule", href: "/schedule" },
    { icon: Users, label: "Students", href: "/students" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen transition-transform bg-white border-r border-neutral-200",
          isOpen ? "w-64" : "w-16",
          "lg:translate-x-0"
        )}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <span className={cn("font-semibold text-lg", !isOpen && "hidden")}>
              EduExcel
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-neutral-100"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center p-2 text-neutral-600 rounded-lg hover:bg-neutral-100 group"
                >
                  <item.icon className="w-5 h-5" />
                  <span
                    className={cn(
                      "ml-3 transition-opacity",
                      !isOpen && "opacity-0 hidden"
                    )}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-4 w-full left-0 px-3">
            <button
              className={cn(
                "flex items-center w-full p-2 text-neutral-600 rounded-lg hover:bg-neutral-100 group",
                !isOpen && "justify-center"
              )}
            >
              <LogOut className="w-5 h-5" />
              <span
                className={cn(
                  "ml-3 transition-opacity",
                  !isOpen && "opacity-0 hidden"
                )}
              >
                Logout
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div
        className={cn(
          "flex-1 transition-all",
          isOpen ? "ml-64" : "ml-16",
          "p-4"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;