
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavLink from "./NavLink";
import NavDropdown from "./NavDropdown";
import { NavItem } from "./NavData";

interface DesktopMenuProps {
  navLinks: NavItem[];
  activeDropdown: string | null;
  onDropdownToggle: (dropdown: string) => void;
  onSectionScroll: (sectionId: string, e: React.MouseEvent) => void;
}

const DesktopMenu = ({ navLinks, activeDropdown, onDropdownToggle, onSectionScroll }: DesktopMenuProps) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        <div key={link.name} className="relative group">
          {link.dropdown ? (
            <NavDropdown
              name={link.name}
              items={link.dropdown}
              isActive={activeDropdown === link.name}
              onToggle={() => onDropdownToggle(link.name)}
              onItemClick={(href, e) => href.startsWith('#') ? onSectionScroll(href.substring(1), e) : undefined}
            />
          ) : (
            <NavLink 
              href={link.href} 
              onClick={(e) => link.href.startsWith('#') ? onSectionScroll(link.href.substring(1), e) : undefined}
            >
              {link.name}
            </NavLink>
          )}
        </div>
      ))}
      <Button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-md" asChild>
        <Link to="/request-quote">
          Get a Quote
        </Link>
      </Button>
    </div>
  );
};

export default DesktopMenu;
