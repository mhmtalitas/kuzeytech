import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Anasayfa", path: "/" },
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: "Ürünler", path: "/urunler" },
    { name: "İletişim", path: "/iletisim" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile nav open
  useEffect(() => {
    if (isOpen) document.body.classList.add("nav-open");
    else document.body.classList.remove("nav-open");
    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
      style={scrolled ? {} : { borderBottom: "1px solid transparent" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="Uptexx - Ana sayfa"
          >
            <div className="relative flex-shrink-0">
              <img
                src="/uptexxlogo.png"
                alt="Uptexx Logo"
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span
              className="font-bold text-xl tracking-tight hidden sm:block"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: scrolled ? "hsl(216 100% 12%)" : "hsl(216 100% 12%)",
              }}
            >
              Uptexx
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                id={`nav-${item.path.replace("/", "") || "home"}`}
                className={`relative px-4 py-2 font-medium text-sm transition-colors duration-200 group ${
                  isActive(item.path)
                    ? "text-[hsl(216,100%,12%)]"
                    : "text-[hsl(216,25%,40%)] hover:text-[hsl(216,100%,12%)]"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-1/2 h-[2.5px] -translate-x-1/2 rounded-full transition-all duration-300 ${
                    isActive(item.path)
                      ? "w-8 bg-blue-500"
                      : "w-0 bg-blue-500/40 group-hover:w-4"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/iletisim"
              id="nav-cta-contact"
              className="btn-primary-pro px-5 py-2.5 text-sm rounded-xl font-semibold text-white inline-flex items-center gap-2 transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, hsl(216 100% 14%), hsl(216 90% 20%))",
                boxShadow: "0 2px 8px hsl(216 100% 12% / 0.22)",
              }}
            >
              <span>Ücretsiz Danışmanlık</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.917 7h8.166M8.167 4.083 11.083 7l-2.916 2.917" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="nav-mobile-toggle"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-[hsl(216,100%,12%)] hover:bg-[hsl(216,100%,12%,0.06)] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isOpen}
          >
            <span className="relative w-5 h-5 flex items-center justify-center">
              <span
                className={`absolute transition-all duration-200 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
              >
                <X size={20} />
              </span>
              <span
                className={`absolute transition-all duration-200 ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
              >
                <Menu size={20} />
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute left-0 right-0 top-[68px] transition-all duration-300 ease-out ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
        style={{
          background: "hsl(0 0% 100% / 0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid hsl(216 20% 90%)",
          boxShadow: "0 12px 36px hsl(216 100% 12% / 0.1)",
        }}
        id="mobile-nav-drawer"
      >
        <div className="container mx-auto px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                isActive(item.path)
                  ? "bg-[hsl(216,100%,12%)] text-white"
                  : "text-[hsl(216,25%,40%)] hover:bg-[hsl(216,100%,12%,0.05)] hover:text-[hsl(216,100%,12%)]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-3 pb-2 border-t border-[hsl(213,20%,92%)] mt-2">
            <Link
              to="/iletisim"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, hsl(216 100% 14%), hsl(216 90% 20%))",
              }}
            >
              Ücretsiz Danışmanlık Alın
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.917 7h8.166M8.167 4.083 11.083 7l-2.916 2.917" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;