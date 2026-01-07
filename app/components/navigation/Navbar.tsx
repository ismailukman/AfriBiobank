'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Docs', href: '/docs' },
    { name: 'Toolbox', href: '/ai-tools' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1220]/95 text-gray-200 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/afribiobank_logo_w.svg"
              alt="AfriBiobank Logo"
              width={56}
              height={56}
              className="w-14 h-14"
            />
            <span className="text-xl font-bold text-white">AfriBiobank</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-200 hover:text-white transition-colors font-medium group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              type="button"
              onClick={() => mounted && setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-10 w-10 rounded-full border border-gray-700 text-gray-200 hover:text-white hover:border-gray-600 transition flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {mounted && theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button variant="ghost" className="text-gray-200 hover:text-white hover:bg-gray-800">
              Sign In
            </Button>
            <Button className="bg-white text-gray-900 hover:bg-gray-100">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-200 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-gray-800 hover:text-white hover:translate-x-1 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-800 space-y-2">
              <button
                type="button"
                onClick={() => mounted && setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-full h-11 rounded-xl border border-gray-700 text-gray-200 hover:text-white hover:border-gray-600 transition flex items-center justify-center gap-2"
                aria-label="Toggle dark mode"
              >
                {mounted && theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                {mounted && theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
              <Button variant="ghost" className="w-full text-gray-200 hover:text-white hover:bg-gray-800">
                Sign In
              </Button>
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
