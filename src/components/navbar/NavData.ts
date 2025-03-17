
export interface NavItem {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

export const navLinks: NavItem[] = [
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
