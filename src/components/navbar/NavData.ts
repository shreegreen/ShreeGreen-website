
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
      { name: "Block Joining Mortar", href: "#aac-panels" }
        ]
  },

  { name: "About",
    href: "#about",
    dropdown: [
      { name: "Our Story", href: "#about" },
      { name: "Our Team", href: "#ourteam" },
      { name: "Our Clients", href: "#ourclients" },
      { name: "Our Certification", href: "#ourcertifications" }
    ]
  },
  { name: "Services", href: "#services" },
  { name: "Carrer", href: "/projects" },
  { name: "Contact", href: "/contact" }
];
