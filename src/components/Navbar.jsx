import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'education', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home', href: '#home' },
    { id: 'skills', name: 'Skills', href: '#skills' },
    { id: 'education', name: 'Education', href: '#education' },
    { id: 'experience', name: 'Experience', href: '#experience' },
    { id: 'projects', name: 'Projects', href: '#projects' },
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md w-full fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                PK
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeLink === link.id
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {link.name}
                  {activeLink === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`relative block px-3 py-2 rounded-md text-base font-medium ${
                  activeLink === link.id
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <div className="flex items-center">
                  {link.name}
                  {activeLink === link.id && (
                    <span className="ml-2 h-2 w-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;