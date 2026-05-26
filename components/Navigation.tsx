'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', icon: 'fa-house', id: 'home' },
    { href: '/nests', label: 'Bird Nests', icon: 'fa-dove', id: 'nests' },
    { href: '/about', label: 'About', icon: 'fa-circle-info', id: 'about' },
    { href: '/contact', label: 'Contact', icon: 'fa-envelope', id: 'contact' },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-dove text-white text-xl"></i>
            </div>
            <div className="hidden md:block">
              <div className="text-white font-bold text-lg leading-tight">Birds by Feather</div>
              <div className="text-green-400 text-xs">Live Nest Cameras</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    currentPage === item.id
                      ? 'bg-green-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <i className={`fa-solid ${item.icon} text-sm`}></i>
                  <span>{item.label}</span>
                </button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            {navItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <button
                  className={`w-full px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-3 mb-1 ${
                    currentPage === item.id
                      ? 'bg-green-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className={`fa-solid ${item.icon}`}></i>
                  <span>{item.label}</span>
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
