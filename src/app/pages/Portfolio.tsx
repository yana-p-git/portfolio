import React, { useState } from 'react';
import { ProjectModal } from '../components/ProjectModal';
import { useLanguage } from '../contexts/LanguageContext';
import { projects, ProjectData } from '../../constants/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type CategoryFilter = "All Work" | "AI Art" | "Branding" | "Illustration" | "Typography";

export default function Portfolio() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All Work");

  const categories: CategoryFilter[] = [
    "All Work",
    "AI Art",
    "Branding",
    "Typography",
    "Illustration",
  ];

  const filteredProjects = activeCategory === "All Work"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl mb-8 font-bold text-foreground leading-tight">
            {t('portfolio.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary/40 hover:bg-primary/90 text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:bg-muted border border-border'
              }`}
            >
              {t(`portfolio.${category.toLowerCase().replace(' ', '_')}`)}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={project.mainImage}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full text-sm mb-3 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 text-primary-foreground border border-primary/30">
                    {t(project.categoryKey)}
                  </div>
                  <h3 className="text-2xl mb-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {t(project.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">
              {t('portfolio.no_projects')}
            </p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
