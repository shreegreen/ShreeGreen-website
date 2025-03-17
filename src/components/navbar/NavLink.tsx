
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  if (href.startsWith('/')) {
    return (
      <Link to={href} className="nav-link font-medium">
        {children}
      </Link>
    );
  } else {
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
