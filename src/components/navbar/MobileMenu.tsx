
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MobileNavItem from "./MobileNavItem";
import { NavItem } from "./NavData";

interface MobileMenuProps {
  isOpen: boolean;
  activeDropdown: string | null;
  navLinks: NavItem[];
  onDropdownToggle: (dropdown: string) => void;
  onSectionScroll: (sectionId: string, e: React.MouseEvent) => void;
  onClose: () => void;
}

const MobileMenu = ({ 
  isOpen, 
  activeDropdown, 
  navLinks, 
  onDropdownToggle, 
  onSectionScroll, 
  onClose 
}: MobileMenuProps) => {
  return (
    <div
      className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 transform",
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navLinks.map((item) => (
          <MobileNavItem
            key={item.name}
            item={item}
            activeDropdown={activeDropdown}
            onDropdownToggle={onDropdownToggle}
            onItemClick={onSectionScroll}
            onClose={onClose}
          />
        ))}
        <div className="pt-4 pb-2">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-md" asChild>
            <Link to="/request-quote" onClick={onClose}>
              Get a Quote
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
