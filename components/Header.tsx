import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowLeft } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
          ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3 border-b border-gray-100'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 z-50">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
            <div className={`relative p-2 rounded-xl transition-all duration-300 ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 shadow-lg'}`}>
              <FileText size={24} strokeWidth={2.5} />
            </div>
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-slate-800'}`}>
            معالج <span className="text-blue-600">الأعمال</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-gray-200/50 shadow-sm">
          {[
            { label: 'الرئيسية', href: '#' },
            { label: 'المميزات', href: '#features' },
            { label: 'لماذا نحن؟', href: '#why' },
            { label: 'الأسعار', href: '#pricing' }
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="px-5 py-2 text-slate-600 hover:text-blue-700 hover:bg-white rounded-full font-medium transition-all duration-200 text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-slate-600 hover:text-blue-700 font-bold px-4 py-2 transition-colors text-sm">
            تسجيل الدخول
          </button>
          <button className="group bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-0.5 text-sm flex items-center gap-2">
            ابدأ مجانًا
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-800 z-50 p-2.5 hover:bg-slate-100 rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-28 px-6 transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        <div className="flex flex-col gap-2 text-lg font-medium text-center">
          {[
            { label: 'الرئيسية', href: '#' },
            { label: 'المميزات', href: '#features' },
            { label: 'لماذا نحن؟', href: '#why' },
            { label: 'الأسعار', href: '#pricing' }
          ].map((item, idx) => (
            <a key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="py-4 border-b border-gray-50 text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
              {item.label}
            </a>
          ))}
        </div>

        <div className="mt-auto mb-8 flex flex-col gap-4">
          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2">
            إنشاء حساب مجاني
            <ArrowLeft size={20} />
          </button>
          <button className="w-full text-slate-600 font-bold py-4 rounded-xl border border-gray-200 hover:bg-gray-50">
            تسجيل الدخول
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;