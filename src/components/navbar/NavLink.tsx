
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  
  // Handle section links when not on home page
  if (href.startsWith('#')) {
    const sectionId = href.substring(1);
    
    const handleSectionClick = (e: React.MouseEvent) => {
      e.preventDefault();
      
      if (isHomePage) {
        // If already on home page, just scroll to the section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If not on home page, navigate to home page with the section in the URL
        navigate(`/#${sectionId}`);
      }
      
      // Call the original onClick if provided
      if (onClick) onClick(e);
    };
    
    return (
      <a 
        href={href} 
        className="nav-link font-medium"
        onClick={handleSectionClick}
      >
        {children}
      </a>
    );
  }
  
  // Regular internal link
  else if (href.startsWith('/')) {
    return (
      <Link to={href} className="nav-link font-medium" onClick={onClick}>
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
