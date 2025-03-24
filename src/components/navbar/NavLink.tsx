
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  // Handle section links when not on home page
  if (href.startsWith('#')) {
    // If we're not on the homepage and trying to navigate to a section
    const path = isHomePage ? href : `/${href}`;
    
    return (
      <Link 
        to={path} 
        className="nav-link font-medium"
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  
  // Regular internal link
  else if (href.startsWith('/')) {
    return (
      <Link to={href} className="nav-link font-medium">
        {children}
      </Link>
    );
  } 
  // External link
  else {
    return (
      <a 
        href={href} 
        className="nav-link font-medium"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
};

export default NavLink;
