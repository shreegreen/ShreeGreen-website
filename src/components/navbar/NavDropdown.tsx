
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownItem {
  name: string;
  href: string;
}

interface NavDropdownProps {
  name: string;
  items: DropdownItem[];
  isActive: boolean;
  onToggle: () => void;
  onItemClick: (href: string, e: React.MouseEvent) => void;
}

const NavDropdown = ({ name, items, isActive, onToggle, onItemClick }: NavDropdownProps) => {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="flex items-center nav-link font-medium"
      >
        {name}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      <div className={cn(
        "absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top-left",
        isActive 
          ? "opacity-100 scale-100" 
          : "opacity-0 scale-95 pointer-events-none"
      )}>
        <div className="py-2">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={(e) => onItemClick(item.href, e)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
