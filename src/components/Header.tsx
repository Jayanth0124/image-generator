// src/components/Header.tsx
import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/generator', label: 'Generator' },
    { href: '/gallery', label: 'Gallery' },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 font-light text-sm transition-all duration-300 rounded-md ${
      isActive
        ? 'text-purple-600 bg-purple-100/80 shadow-sm'
        : 'text-gray-600 hover:text-purple-500 hover:bg-purple-50/60'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2.5 font-light text-base transition-all duration-300 rounded-lg ${
      isActive
        ? 'text-purple-600 bg-purple-100 shadow-sm'
        : 'text-gray-600 hover:bg-purple-50 hover:text-purple-500'
    }`;

  return (
    <header className="bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-white/40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:rotate-6"
            />
            <span className="font-semibold text-xl text-gray-800 tracking-tight group-hover:text-purple-600 transition-colors">
              Dream<span className="text-purple-600">Render</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.href} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-purple-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 animate-slideDown">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={mobileLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
