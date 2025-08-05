'use client';

import React, { useState } from 'react';
import Container from './container';
import Logo from './logo';
import Link from 'next/link';
import {
  Heart,
  ShoppingCart,
  User,
  Search,
  Menu,
  X,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Button } from './ui/button';

const links = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/hotDeals', label: 'Hot Deals' },
];

function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 py-4 sticky top-0 z-50">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'relative py-1.5 px-3 font-bold text-lg rounded-lg transition-all duration-300 hover:text-green-600 dark:hover:text-green-400',
                  isActive
                    ? 'text-green-600 dark:text-green-400 font-medium'
                    : 'text-gray-600 dark:text-gray-300'
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-green-500 dark:bg-green-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group">
            <Search className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </button>

          <button className="p-2 relative rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group">
            <Heart className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-red-500" />
            <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-xs text-white rounded-full">3</span>
          </button>

          <button className="p-2 relative rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group">
            <ShoppingCart className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-blue-500 text-xs text-white rounded-full">2</span>
          </button>

          <Link href="/sign-in">
            <Button variant="ghost" className="p-2 ml-5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group cursor-pointer">
              <span className=' text-lg '>Login</span>
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 ml-1 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu with smooth animation */}
      <div
        className={clsx(
          'lg:hidden overflow-hidden transition-all duration-700 ease-in-out',
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 pb-4 pt-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 space-y-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'block py-2 px-3 rounded-md text-base font-medium transition-colors duration-300',
                  isActive
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-300'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
                
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
