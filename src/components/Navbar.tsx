import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Users,
  ShieldCheck,
  ShoppingBag,
  Pill,
  Package,
  HeartPulse,
  Edit3,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoImage from "../logo.jpg"; //  <--- IMPORT YOUR LOGO HERE

// Assume navLinks data is defined as before
const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "About Us",
    dropdown: true,
    items: [
      {
        href: "/about",
        label: "About Company",
        subtitle: "Our story",
        icon: Briefcase,
        imgSrc: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
      },
      {
        href: "/vision-mission",
        label: "Vision & Mission",
        subtitle: "Our goals",
        icon: Users,
        imgSrc: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
      },
      {
        href: "/quality",
        label: "Quality Assurance",
        subtitle: "Our standards",
        icon: ShieldCheck,
        imgSrc: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      },
    ],
  },
  {
    label: "Products",
    dropdown: true,
    items: [
      {
        href: "/products",
        label: "All Products",
        subtitle: "Complete range",
        icon: ShoppingBag,
        imgSrc:
          "https://www.servocarelifesciences.in/wp-content/uploads/2020/03/medicine-all.jpg",
      },
      {
        href: "/products/lexprate-cr",
        label: "Lexprate-CR",
        subtitle: "Cardiovascular",
        icon: Pill,
        imgSrc: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
      },
      {
        href: "/products/calvilux",
        label: "Calvilux",
        subtitle: "Bone Health",
        icon: Package,
        imgSrc: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063",
      },
      {
        href: "/products/multilux",
        label: "Multilux",
        subtitle: "Multivitamin",
        icon: Pill,
        imgSrc: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
      },
    ],
  },
  { href: "/therapies", label: "Our Therapies", icon: HeartPulse },
  { href: "/events", label: "Events", icon: Edit3 },
  { href: "/contact", label: "Contact", icon: PhoneCall },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const navbarRef = useRef(null);
  const mobileDrawerRef = useRef(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsDrawerVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDesktopDropdown(null);
      }
      if (
        isMobileMenuOpen &&
        mobileDrawerRef.current &&
        !mobileDrawerRef.current.contains(event.target) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        handleToggleMobileMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleDesktopDropdownEnter = (label) => setOpenDesktopDropdown(label);
  const handleDesktopDropdownLeave = () => setOpenDesktopDropdown(null);
  const toggleMobileSubmenu = (label) =>
    setOpenMobileSubmenu(openMobileSubmenu === label ? null : label);

  const handleToggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else {
      setIsDrawerVisible(true);
      setIsMobileMenuOpen(true);
    }
  };

  const closeMobileMenuAndSubmenus = () => {
    handleToggleMobileMenu();
    setOpenMobileSubmenu(null);
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className="bg-white/90 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-slate-200/80"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {" "}
            {/* Navbar height is h-20 (5rem) */}
            <Link
              to="/"
              className="flex items-center shrink-0"
              onClick={
                isMobileMenuOpen ? closeMobileMenuAndSubmenus : undefined
              }
            >
              {/* --- LOGO --- */}
              <img
                src={logoImage}
                alt="Madrid Pharmaceuticals Logo"
                className="h-12 w-auto mr-3" // Adjust h-12 as needed to fit your logo
              />
              {/* --- END LOGO --- */}
              <h1 className="text-2xl font-bold hidden sm:block">
                {" "}
                {/* Hide text on very small screens if logo is enough */}
              </h1>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleDesktopDropdownEnter(link.label)}
                    onMouseLeave={handleDesktopDropdownLeave}
                  >
                    <button className="flex items-center text-slate-700 hover:text-pharma-blue px-4 py-2 rounded-md font-medium transition-colors duration-200 group">
                      {link.label}
                      <ChevronDown
                        className={`ml-1.5 h-4 w-4 transition-transform duration-200 ${openDesktopDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDesktopDropdown === link.label &&
                      Array.isArray(link.items) && (
                        <div
                          className={`absolute top-full ${link.label === "Products" ? "left-1/2 -translate-x-1/2" : "left-0"} mt-2 w-max min-w-[20rem] max-w-md bg-white/95 backdrop-blur-md shadow-2xl border border-slate-200/70 rounded-xl p-2 z-[51] animate-fade-in-scale origin-top-left`}
                        >
                          <div
                            className={`grid ${link.items.length > 2 ? "grid-cols-2" : "grid-cols-1"} gap-1`}
                          >
                            {link.items.map(
                              (item, index) =>
                                item && (
                                  <Link
                                    key={item.href || index}
                                    to={item.href}
                                    onClick={() => setOpenDesktopDropdown(null)}
                                    className="flex items-center p-3 rounded-lg hover:bg-pharma-blue/10 transition-all group/item"
                                  >
                                    {item.imgSrc ? (
                                      <img
                                        src={item.imgSrc}
                                        alt={item.label}
                                        className="w-10 h-10 rounded-md object-cover mr-3 shrink-0"
                                      />
                                    ) : item.icon ? (
                                      <item.icon className="w-6 h-6 text-pharma-blue mr-3 shrink-0" />
                                    ) : (
                                      <div className="w-10 h-10 mr-3 shrink-0"></div>
                                    )}
                                    <div>
                                      <div className="font-semibold text-slate-800 group-hover/item:text-pharma-blue text-sm">
                                        {item.label || "No Label"}
                                      </div>
                                      {item.subtitle && (
                                        <div className="text-xs text-slate-500">
                                          {item.subtitle}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                )
                            )}
                          </div>
                        </div>
                      )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="relative text-slate-700 hover:text-pharma-blue px-4 py-2 rounded-md font-medium transition-colors duration-200 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pharma-blue to-pharma-green group-hover:w-3/4 transition-all duration-300"></span>
                  </Link>
                )
              )}
              <Link to="/contact" className="ml-4">
                <Button className="bg-gradient-to-r from-pharma-blue to-pharma-green hover:from-pharma-blue/90 hover:to-pharma-green/90 text-white px-6 py-2.5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>
            {/* Mobile menu button (part of the sticky nav) */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleToggleMobileMenu}
                className="text-slate-700 hover:bg-pharma-blue/10 focus:ring-2 focus:ring-pharma-blue/50 relative z-[51]"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isDrawerVisible && (
        <>
          {/* Backdrop */}
          <div
            onClick={handleToggleMobileMenu}
            className={`lg:hidden fixed inset-0 bg-black/40 z-30 ${isMobileMenuOpen ? "animate-fade-in" : "animate-fade-out pointer-events-none"}`}
          ></div>

          {/* Drawer Panel */}
          <div
            ref={mobileDrawerRef}
            className={`lg:hidden fixed top-20 right-0 bottom-auto w-full max-w-sm bg-white z-40 shadow-2xl flex flex-col
                        transform transition-transform duration-300 ease-in-out 
                        ${isMobileMenuOpen ? "translate-x-0 animate-slide-in-right" : "translate-x-full animate-slide-out-right"}`}
            style={{ maxHeight: "calc(100vh - 5rem - 2rem)" }}
            onAnimationEnd={() => {
              if (!isMobileMenuOpen) setIsDrawerVisible(false);
            }}
          >
            <div className="flex-grow overflow-y-auto py-6 px-4 sm:px-6">
              <div className="space-y-2">
                {navLinks.map(
                  (link) =>
                    link && (
                      <div
                        key={link.label || link.href}
                        className="border-b border-slate-200/70 last:border-b-0"
                      >
                        {link.dropdown && Array.isArray(link.items) ? (
                          <>
                            <button
                              onClick={() => toggleMobileSubmenu(link.label)}
                              className="w-full flex justify-between items-center text-left text-lg font-semibold text-pharma-darkBlue py-3.5 transition-colors"
                            >
                              <span>{link.label}</span>
                              {openMobileSubmenu === link.label ? (
                                <ChevronUp className="w-5 h-5 text-pharma-blue" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-slate-500" />
                              )}
                            </button>
                            {openMobileSubmenu === link.label && (
                              <div className="pl-5 py-2 space-y-1 bg-slate-50/70 rounded-md my-1">
                                {link.items.map(
                                  (item, itemIndex) =>
                                    item && (
                                      <Link
                                        key={item.href || itemIndex}
                                        to={item.href}
                                        onClick={closeMobileMenuAndSubmenus}
                                        className="flex items-center text-md font-medium text-slate-700 hover:text-pharma-blue rounded-md py-2.5 group transition-colors"
                                      >
                                        {item.icon && (
                                          <item.icon
                                            className={`w-5 h-5 mr-3 text-pharma-blue/80 group-hover:text-pharma-blue transition-colors`}
                                          />
                                        )}
                                        {item.label || "No Label"}
                                      </Link>
                                    )
                                )}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            to={link.href}
                            onClick={closeMobileMenuAndSubmenus}
                            className="block text-lg font-semibold text-pharma-darkBlue hover:text-pharma-blue py-3.5 transition-colors"
                          >
                            {link.label}
                          </Link>
                        )}
                      </div>
                    )
                )}
                <div className="pt-8">
                  <Link to="/contact" onClick={closeMobileMenuAndSubmenus}>
                    <Button className="w-full bg-gradient-to-r from-pharma-blue to-pharma-green hover:from-pharma-blue/90 hover:to-pharma-green/90 text-white px-6 py-3.5 rounded-lg shadow-lg text-lg font-semibold">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
