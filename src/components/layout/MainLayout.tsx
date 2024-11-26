import { useState } from "react";
import { Menu, X, Home, BookOpen, Calendar, Users, Settings, LogOut, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

interface MenuItem {
  icon: React.ElementType;
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { icon: Home, label: "Dashboard", href: "/" },
    { 
      icon: BookOpen, 
      label: "Courses", 
      href: "/courses",
      subItems: [
        { label: "Mathematics", href: "/courses/math" },
        { label: "Science", href: "/courses/science" },
        { label: "English", href: "/courses/english" }
      ]
    },
    { icon: Calendar, label: "Schedule", href: "/schedule" },
    { icon: Users, label: "Students", href: "/students" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-neutral-100 flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen transition-all duration-300 bg-white border-r border-neutral-200",
          isOpen ? "w-64" : "w-16",
          "lg:translate-x-0"
        )}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <span className={cn("font-semibold text-lg text-primary", !isOpen && "hidden")}>
              EduExcel
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-neutral-100 text-neutral-600"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <div className="flex flex-col">
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center p-2 rounded-lg group transition-colors duration-200",
                      isActive(item.href) 
                        ? "bg-primary text-white" 
                        : "text-neutral-600 hover:bg-neutral-100",
                    )}
                    onClick={(e) => {
                      if (item.subItems) {
                        e.preventDefault();
                        setExpandedItem(expandedItem === item.label ? null : item.label);
                      }
                    }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span
                      className={cn(
                        "ml-3 transition-opacity duration-200",
                        !isOpen && "opacity-0 hidden"
                      )}
                    >
                      {item.label}
                    </span>
                    {item.subItems && isOpen && (
                      <ChevronRight 
                        className={cn(
                          "w-4 h-4 ml-auto transition-transform duration-200",
                          expandedItem === item.label && "transform rotate-90"
                        )} 
                      />
                    )}
                  </a>
                  
                  {/* Sub-items */}
                  {item.subItems && isOpen && expandedItem === item.label && (
                    <div className="ml-4 mt-2 space-y-1 animate-fade-in">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className={cn(
                            "flex items-center p-2 rounded-lg text-sm transition-colors duration-200",
                            isActive(subItem.href)
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-neutral-600 hover:bg-neutral-100"
                          )}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-4 w-full left-0 px-3">
            <button
              className={cn(
                "flex items-center w-full p-2 text-neutral-600 rounded-lg hover:bg-neutral-100 group transition-colors duration-200",
                !isOpen && "justify-center"
              )}
            >
              <LogOut className="w-5 h-5" />
              <span
                className={cn(
                  "ml-3 transition-opacity duration-200",
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
          "flex-1 transition-all duration-300",
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