"use client";

import React, { useState } from "react";
import Link from "next/link";
import Avatar from "./avatar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // NAVIGATION LINKS
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blog" },
    { name: "Create Blog", href: "/create-blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-500/30 group-hover:bg-indigo-500 transition-all duration-300">
              <span className="text-2xl font-bold text-white">B</span>
            </div>

            <span className="text-2xl font-bold text-white tracking-tight">
              Blog<span className="text-indigo-400">Space</span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">
            {/* LOGIN */}
            <Link
              href="/login"
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
            >
              Login
            </Link>

            {/* SIGNUP */}
            <Link
              href="/signup"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Started
            </Link>

            {/* AVATAR */}
            <Link href="/profile">
              <Avatar img="/default-avatar.png" alt="User Profile" />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {menuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-5 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-indigo-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 text-gray-300 hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="mx-3 text-center px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
              >
                Get Started
              </Link>

              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-gray-300"
              >
                <Avatar img="/default-avatar.png" alt="User Profile" />
                My Profile
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
