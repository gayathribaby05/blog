import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { useTheme } from "@/context/theme-provider";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-2xl">🐾</span>
            <span>PawsomeBreeds</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/breeds"
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              All Breeds
            </NavLink>
            <NavLink
              to="/funny"
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              Funny Dogs
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-4 animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md transition ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-primary/5"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/breeds"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md transition ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-primary/5"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Breeds
              </NavLink>
              <NavLink
                to="/funny"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md transition ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-primary/5"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Funny Dogs
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md transition ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-primary/5"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md transition ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-primary/5"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}