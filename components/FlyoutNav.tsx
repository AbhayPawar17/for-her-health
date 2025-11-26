"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

/* -------------------------------------------------------------------------------------------------
 * TYPES & INTERFACES
 * -----------------------------------------------------------------------------------------------*/

interface FlyoutLinkProps {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
  className?: string;
}

interface MobileMenuProps {
  onClose: () => void;
}

/* -------------------------------------------------------------------------------------------------
 * MAIN COMPONENT
 * -----------------------------------------------------------------------------------------------*/

const FlyoutNav: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-pink-50/90 backdrop-blur-md border-b border-pink-200 py-2 lg:py-4 shadow-sm shadow-pink-100"
            : "bg-transparent py-3 lg:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-neutral-800 z-50"
          >
            <Image
              src="https://forherhealthwomen.com/wp-content/uploads/2022/01/cropped-cropped-450logo.png"
              alt="Logo"
              width={150}
              height={80}
              // Small height on mobile (h-10), Larger on Desktop (lg:h-16)
              className="h-10 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-8 font-semibold text-lg text-neutral-600">
            <FlyoutLink href="/our-care-services">Our Care Services</FlyoutLink>
            <FlyoutLink href="/med-spa">Med Spa</FlyoutLink>
            <FlyoutLink href="/about">About</FlyoutLink>
            <Link
              href="/contact"
              className="hover:text-pink-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* DESKTOP ACTION BUTTONS & LOCATION */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Our Location */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-full text-pink-500">
                {/* Map Pin Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 leading-tight">
                  Our Location
                </span>
                <span className="text-base font-bold text-neutral-600 leading-tight">
                  South Barrington
                </span>
              </div>
            </div>

            <button className="px-5 py-2.5 rounded-md text-base font-semibold bg-pink-500 hover:bg-pink-600 text-white transition-colors shadow-md shadow-pink-300">
              Call Now
            </button>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-neutral-800 z-50 relative"
          >
            {mobileMenuOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Menu Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

/* -------------------------------------------------------------------------------------------------
 * MOBILE MENU COMPONENT
 * -----------------------------------------------------------------------------------------------*/

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      // Adjusted top padding (pt-20) to fit smaller header
      className="fixed inset-0 top-0 z-40 bg-white pt-20 px-6 pb-6 flex flex-col h-screen overflow-y-auto lg:hidden"
    >
      {/* Mobile Links */}
      <div className="flex flex-col space-y-6">
        <Link
          href="/our-care-services"
          onClick={onClose}
          className="text-lg font-semibold text-neutral-600 border-b border-pink-50 pb-4"
        >
          Our Care Services
        </Link>
        <Link
          href="/med-spa"
          onClick={onClose}
          className="text-lg font-semibold text-neutral-600 border-b border-pink-50 pb-4"
        >
          Med Spa
        </Link>
        <Link
          href="/about"
          onClick={onClose}
          className="text-lg font-semibold text-neutral-600 border-b border-pink-50 pb-4"
        >
          About
        </Link>
        <Link
          href="/contact"
          onClick={onClose}
          className="text-lg font-semibold text-neutral-600 border-b border-pink-50 pb-4"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Footer Actions */}
      <div className="mt-auto pt-8 border-t border-pink-100 flex flex-col gap-6">
        {/* Location Info Mobile */}
        <div className="flex items-center gap-3">
          <div className="p-3 bg-pink-50 rounded-full text-pink-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Our Location
            </span>
            <span className="text-base font-bold text-neutral-600">
              South Barrington
            </span>
          </div>
        </div>

        <button className="w-full py-3 rounded-lg font-medium bg-pink-500 hover:bg-pink-600 text-white transition-colors shadow-lg shadow-pink-500/20">
          Call Now
        </button>
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------------------------------
 * DESKTOP FLYOUT LINK COMPONENT
 * -----------------------------------------------------------------------------------------------*/

const FlyoutLink: React.FC<FlyoutLinkProps> = ({
  children,
  href,
  FlyoutContent,
  className,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`relative w-fit h-fit ${className || ""}`}
    >
      <Link
        href={href}
        className={`relative transition-colors inline-block py-4 ${
          open ? "text-pink-600 font-semibold" : "text-neutral-600"
        }`}
      >
        {children}
        <span
          style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-0.5 origin-left scale-x-0 rounded-full bg-pink-500 transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-16 bg-white text-black pt-0 p-6 rounded-xl shadow-xl shadow-pink-500/10 border border-pink-100 -translate-x-1/2 z-50"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white border-l border-t border-pink-100" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutNav;