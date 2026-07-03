import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <span className="text-xl font-bold text-white">Y</span>
              </div>
              <span className="text-xl font-semibold">{t("name")}</span>
            </Link>
            <p className="text-muted-foreground text-sm">{t("footer.tagline")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.quick_links")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.portfolio")}
                </Link>
              </li>
              {/*<li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>*/}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.connect")}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+79154455658"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +7 (915) 445-56-58
                </a>
              </li>
              <li>
                <a
                  href="mailto:yanapoymanova@mail.ru"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  yanapoymanova@mail.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}