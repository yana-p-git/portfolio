import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Heart, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { images } from "../../constants/images";

export function About() {
  const { t } = useLanguage();

  const skills = [
    "Adobe Creative Suite",
    "Figma",
    "Tilda",
    "Procreate",
    "Illustration",
    "Branding",
    "Graphic Design",
    "Web Design",
    "LLM / AI APIs",
    "Figma Make",
    "Visual Studio",
    "n8n",
  ];

  return (
    <div>
{/* Hero Section */}
<section className="py-8 px-6 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Градиентный прямоугольник с закруглениями */}
    <div className="bg-gradient-to-br from-primary/50 via-secondary/30 to-accent/40 rounded-4xl p-8 md:p-16 lg:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Текст */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("about.title")}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            {t("about.intro_1")}
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            {t("about.intro_2")}
          </p>
          <p className="text-lg text-muted-foreground">
            {t("about.intro_3")}
          </p>
        </div>

        {/* Фото */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm md:max-w-xs">
            <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-primary to-secondary rounded-3xl"></div>
            <ImageWithFallback
              src={images.about.profile}
              alt="Yana Poymanova"
              className="relative rounded-3xl w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Values Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">{t("about.values_title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-primary/50 border border-primary/80 flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="mb-3">{t("about.innovation")}</h3>
              <p className="text-muted-foreground">
                {t("about.innovation_desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-secondary to-secondary/50 border-secondary/80 flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="mb-3">{t("about.passion")}</h3>
              <p className="text-muted-foreground">
                {t("about.passion_desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-accent to-accent/50 border-accenty/80 flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="mb-3">{t("about.excellence")}</h3>
              <p className="text-muted-foreground">
                {t("about.excellence_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">{t("about.skills_title")}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-linear-to-br from-primary/30 to-secondary/20 border border-primary/40 rounded-full hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">{t("about.experience_title")}</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <div className="text-sm text-muted-foreground mb-1">2021 - 2023</div>
              <h3 className="mb-2">{t("about.manager_position")}</h3>
              <p className="text-muted-foreground mb-2">{t("about.manager_company")}</p>
              <p className="text-muted-foreground">
                {t("about.manager_desc")}
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <div className="text-sm text-muted-foreground mb-1">2021 - 2023</div>
              <h3 className="mb-2">{t("about.senior_position")}</h3>
              <p className="text-muted-foreground mb-2">{t("about.senior_company")}</p>
              <p className="text-muted-foreground">
                {t("about.senior_desc")}
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <div className="text-sm text-muted-foreground mb-1">2020 - 2021</div>
              <h3 className="mb-2">{t("about.designer_position")}</h3>
              <p className="text-muted-foreground mb-2">{t("about.designer_company")}</p>
              <p className="text-muted-foreground">
                {t("about.designer_desc")}
              </p>
            </div>

            <div className="border-l-4 border-grey pl-6">
              <div className="text-sm text-muted-foreground mb-1">2018 - 2020</div>
              <h3 className="mb-2">{t("about.junior_position")}</h3>
              <p className="text-muted-foreground mb-2">{t("about.junior_company")}</p>
              <p className="text-muted-foreground">
                {t("about.junior_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

          {/* Education Section */}
      <section className="py-12 px-4 sm:px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">{t("about.education_title")}</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <div className="text-sm text-muted-foreground mb-1">2014 - 2020</div>
              <h3 className="mb-2">{t("about.education_position")}</h3>
              <p className="text-muted-foreground mb-2">{t("about.education_company")}</p>
              <p className="text-muted-foreground">
                {t("about.education_desc")}
              </p>
            </div>  
          </div>
        </div>
      </section>
    </div>
  );
}
