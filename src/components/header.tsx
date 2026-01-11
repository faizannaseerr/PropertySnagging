import React from "react";
import { MessageCircle01 } from "@untitledui/icons";

const Header = () => {
  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Coverage", href: "#coverage" },
    { name: "Certifications", href: "#certifications" },
    { name: "Testimonies", href: "#testimonies" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  // fixed top-0 left-0 z-10 backdrop-blur-sm bg-white/80 shadow-sm -- for fixed header
  return (
    <div className="mx-auto w-full flex items-center justify-between px-4 py-2 font-inter bg-gray-50">
      {/* Navigation Links */}
      <nav className="flex items-center gap-4">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium hover:underline hover:opacity-50 transition-all duration-200"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* CTAs */}
      <div className="flex items-center gap-0.5 border-1 border-black/40 rounded-sm p-0.5">
        <button className="cursor-pointer px-6 py-1 text-sm text-white bg-black font-medium border-1 border-black/40 rounded-sm hover:bg-black/85 transition-all duration-200">
          Request Inspection
        </button>
        <button className="cursor-pointer flex items-center justify-center p-2 rounded-sm border-1 border-black/40 hover:bg-black/5 transition-all duration-200">
          <MessageCircle01 className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Header;
