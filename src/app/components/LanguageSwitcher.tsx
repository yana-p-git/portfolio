import { useLanguage } from "../contexts/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm"
      aria-label="Switch language"
    >
      {language === "ru" ? "RU" : "EN"}
    </button>
  );
}
