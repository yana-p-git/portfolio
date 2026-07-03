import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <span className="text-xl font-bold text-white">Y</span>
            </div>
            <span className="text-xl font-semibold">{t("name")}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              {t("nav.about")}
            </Link>
            <Link to="/portfolio" className="hover:text-primary transition-colors">
              {t("nav.portfolio")}
            </Link>
            {/*<Link to="/contact" className="hover:text-primary transition-colors">
              {t("nav.contact")}
            </Link>*/}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/about"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/portfolio"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.portfolio")}
            </Link>
            {/*<Link
              to="/contact"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.contact")}
            </Link>*/}
          </div>
        )}
      </div>
    </nav>
  );
}
