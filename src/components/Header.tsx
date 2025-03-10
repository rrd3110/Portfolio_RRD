import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Portfolio
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex justify-center space-x-6 pt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const NavLinks = () => (
  <>
    {['Home', 'Projects', 'About', 'Contact'].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        {item}
      </a>
    ))}
  </>
);

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <a href="https://github.com/rrd3110" className="text-gray-600 hover:text-gray-900 transition-colors">
      <Github size={20} />
    </a>
    <a href="https://linkedin.com/in/rituraj-deb-b2b2b81b8" className="text-gray-600 hover:text-gray-900 transition-colors">
      <Linkedin size={20} />
    </a>
    <a href="mailto:riturajdeb7@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
      <Mail size={20} />
    </a>
  </div>
);