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
        `px-4 py-2 font-light transition-colors duration-300 rounded-md ${isActive
            ? 'text-purple-600 bg-purple-100/80'
            : 'text-gray-600 hover:text-purple-500'
        }`;

    const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
        `block px-4 py-2.5 font-light transition-colors duration-300 rounded-lg ${isActive
            ? 'text-purple-600 bg-purple-100'
            : 'text-gray-600 hover:bg-purple-50'
        }`;

    return (
        <header className="bg-white/70 backdrop-blur-sm sticky top-0 z-50 border-b border-white/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="public/logo.png"
                            alt="Logo"
                            className="w-12 h-12 object-contain"
                        />
                        <span className="font-semibold text-xl text-gray-800">DreamRender</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <NavLink key={link.label} to={link.href} className={linkClass}>
                                {link.label}
                            </NavLink>
                        ))}
                        {/* Login and Sign Up buttons removed from here */}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden pb-4 px-4 space-y-2">
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
                    {/* Login and Sign Up buttons removed from the mobile menu */}
                </nav>
            )}
        </header>
    );
};

export default Header;