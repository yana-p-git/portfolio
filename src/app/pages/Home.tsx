import { Link } from "react-router";
import { useState } from "react";
import { ArrowRight, Sparkles, Palette, Brain } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { projects, ProjectData } from "../../constants/projects";
import { ProjectModal } from "../components/ProjectModal";

export function Home() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

 // ID проектов, которые должны показываться на главной (строка!)
  const featuredWorks = projects.filter((p) => ["1", "2", "6"].includes(p.id));

  return (
    <div>
{/* Hero Section */}
<section className="relative pt-8 pb-4 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Градиентный прямоугольник с закруглениями */}
    <div className="bg-gradient-to-br from-primary/80 via-secondary/60 to-accent/80 rounded-4xl p-16 md:p-12 lg:p-16 text-center">
      <div className="inline-flex items-center space-x-2 bg-white/40 px-4 py-2 rounded-2xl mb-6">
        <Sparkles size={16} className="text-foreground" />
        <span className="text-sm">{t("home.badge")}</span>
      </div>
      <h1 className="text-5xl md:text-7xl mb-8 font-bold text-foreground leading-tight">
        {t("home.hero_title_1")}
      </h1>
      <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        {t("home.hero_subtitle")}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/portfolio">
          <Button className="bg-primary/60 backdrop-blur-sm hover:bg-primary/60 border-primary/100 text-primary-foreground">
            {t("home.view_portfolio")}
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
        {/*<Link to="/contact">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            {t("home.get_in_touch")}
          </Button>
        </Link>*/}
      </div>
    </div>
  </div>
</section>

{/* Featured Works */}
<section className="py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex justify-between items-center mb-12">
      <h2>{t("home.featured_works")}</h2>
      <Link to="/portfolio">
        <Button variant="outline">
          {t("home.view_all")}
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredWorks.map((work) => (
        <div
          key={work.id}
          onClick={() => setSelectedProject(work)}
          className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border"
        >
          <div className="aspect-video overflow-hidden bg-muted">
            <ImageWithFallback
              src={work.mainImage}
              alt={t(work.titleKey)}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <div className="inline-block px-3 py-1 rounded-full text-sm mb-3 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 text-primary-foreground border border-primary/30">
              {t(work.categoryKey)}
            </div>
            <h3 className="text-2xl mb-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all">
              {t(work.titleKey)}
            </h3>
            <p className="text-muted-foreground line-clamp-2">
              {t(work.descKey)}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Services Section (What I Do) — ПЕРЕМЕЩЁН ВНИЗ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-left mb-12">{t("home.what_i_do")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
              <div className="w-14 h-14 rounded-full bg-primary/50 flex items-center justify-center mb-4">
                <Palette size={28} className="text-accent-foreground" />
              </div>
              <h3 className="mb-3">{t("home.graphic_design")}</h3>
              <p className="text-muted-foreground">
                {t("home.graphic_design_desc")}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
              <div className="w-14 h-14 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
                <Brain size={28} className="text-accent-foreground" />
              </div>
              <h3 className="mb-3">{t("home.ai_art")}</h3>
              <p className="text-muted-foreground">
                {t("home.ai_art_desc")}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
              <div className="w-14 h-14 rounded-full bg-accent/60 flex items-center justify-center mb-4">
                <Sparkles size={28} className="text-accent-foreground" />
              </div>
              <h3 className="mb-3">{t("home.creative_direction")}</h3>
              <p className="text-muted-foreground">
                {t("home.creative_direction_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* CTA Section */}
      {/*<section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-secondary to-accent p-12 rounded-3xl text-center">
            <h2 className="mb-4 text-primary-foreground">{t("home.cta_title")}</h2>
            <p className="text-lg mb-8 text-primary-foreground/80">
              {t("home.cta_subtitle")}
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-foreground hover:bg-white/90"
              >
                {t("home.start_project")}
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>*/}
    </div>
  );
}
