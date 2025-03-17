
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

interface MobileNavItemProps {
  item: NavItem;
  activeDropdown: string | null;
  onDropdownToggle: (name: string) => void;
  onItemClick: (href: string, e: React.MouseEvent) => void;
  onClose: () => void;
}

const MobileNavItem = ({ 
  item, 
  activeDropdown, 
  onDropdownToggle, 
  onItemClick, 
  onClose 
}: MobileNavItemProps) => {
  return (
    <div>
      {item.dropdown ? (
        <div>
          <button
            onClick={() => onDropdownToggle(item.name)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary"
          >
            {item.name}
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          
          {activeDropdown === item.name && (
            <div className="pl-4 py-2 space-y-1">
              {item.dropdown.map((subItem) => (
                <a
                  key={subItem.name}
                  href={subItem.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary"
                  onClick={(e) => {
                    if (subItem.href.startsWith('#')) {
                      onItemClick(subItem.href.substring(1), e);
                    }
                    onClose();
                  }}
                >
                  {subItem.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ) : (
        item.href.startsWith('/') ? (
          <Link
            to={item.href}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary"
            onClick={onClose}
          >
            {item.name}
          </Link>
        ) : (
          <a
            href={item.href}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary"
            onClick={(e) => {
              if (item.href.startsWith('#')) {
                onItemClick(item.href.substring(1), e);
              }
              onClose();
            }}
          >
            {item.name}
          </a>
        )
      )}
    </div>
  );
};

export default MobileNavItem;
