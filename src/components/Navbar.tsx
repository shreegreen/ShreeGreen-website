
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "#products",
      dropdown: [
        { name: "AAC Blocks", href: "#aac-blocks" },
        { name: "AAC Panels", href: "#aac-panels" },
        { name: "Special Solutions", href: "#special-solutions" }
      ]
    },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="sr-only">BlockCrete</span>
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">BC</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">BlockCrete</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(link.name)}
                    className="flex items-center nav-link font-medium"
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  link.href.startsWith('/') ? (
                    <Link to={link.href} className="nav-link font-medium">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="nav-link font-medium">
                      {link.name}
                    </a>
                  )
                )}

                {link.dropdown && (
                  <div className={cn(
                    "absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top-left",
                    activeDropdown === link.name 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-95 pointer-events-none"
                  )}>
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-md" asChild>
              <Link to="/request-quote">
                Get a Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 transform",
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => handleDropdownToggle(link.name)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary"
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {activeDropdown === link.name && (
                    <div className="pl-4 py-2 space-y-1">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary"
                          onClick={toggleMenu}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          ))}
          <div className="pt-4 pb-2">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-md" asChild>
              <Link to="/request-quote" onClick={toggleMenu}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
