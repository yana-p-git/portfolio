import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { ProjectData } from '../../constants/projects';

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedSections, setExpandedSections] = useState<{
    challenges: boolean;
    solution: boolean;
    roadmap: boolean;
  }>({
    challenges: false,
    solution: false,
    roadmap: false,
  });

  const carouselImages = project.images && project.images.length > 0 ? project.images : [project.mainImage];
  const hasMultipleImages = carouselImages.length > 1;

  const title = t(project.titleKey);
  const category = t(project.categoryKey);
  const fullDescription = t(project.fullDescKey);
  const challenges = project.challengeKeys?.map(key => t(key)) || [];
  const solution = project.solutionKey?.map(key => t(key)) || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const toggleSection = (section: 'challenges' | 'solution' | 'roadmap') => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Format description with bold headings and line breaks
  const formatDescription = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="block mt-4 mb-2 text-lg">
            {part.slice(2, -2)}
          </strong>
        );
      }
      // Handle paragraphs and line breaks
      return part.split('\n\n').map((paragraph, pIndex) => {
        const lines = paragraph.split('\n').map((line, lIndex) => (
          <React.Fragment key={lIndex}>
            {line}
            {lIndex < paragraph.split('\n').length - 1 && <br />}
          </React.Fragment>
        ));
        return (
          <p key={`${index}-${pIndex}`} className="mb-4">
            {lines}
          </p>
        );
      });
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-card rounded-2xl shadow-2xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-card rounded-full p-2 shadow-lg hover:bg-muted transition-colors border border-border"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Image Carousel */}
        <div className="relative w-full aspect-video bg-muted rounded-t-2xl overflow-hidden">
          <img
            src={carouselImages[currentImageIndex]}
            alt={title}
            className="w-full h-full object-cover"
          />

          {hasMultipleImages && (
            <>
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/90 hover:bg-card rounded-full p-2 shadow-lg transition-colors border border-border"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/90 hover:bg-card rounded-full p-2 shadow-lg transition-colors border border-border"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-primary w-8'
                        : 'bg-card/60 hover:bg-card/80 w-2'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Category Badge & Title */}
          <div className="mb-6">
            <Badge className="mb-3 bg-primary/20 text-primary-foreground hover:bg-primary/30 border border-primary/30">
              {category}
            </Badge>
            <h2 className="text-3xl mb-2">{title}</h2>
          </div>

          {/* Full Description */}
          {fullDescription && (
            <div className="mb-6 text-muted-foreground leading-relaxed">
              {formatDescription(fullDescription)}
            </div>
          )}

          {/* Key Challenges Accordion */}
          {challenges && challenges.length > 0 && (
            <div className="mb-4 border border-border rounded-lg overflow-hidden bg-card">
              <button
                onClick={() => toggleSection('challenges')}
                className="w-full flex items-center justify-between p-4 bg-muted/50 hover:bg-muted transition-colors text-left"
              >
                <span className="font-semibold">{t('portfolio.challenges_title')}</span>
                {expandedSections.challenges ? (
                  <Minus className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              {expandedSections.challenges && (
                <div className="p-4 bg-card">
                  <ul className="space-y-2">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Solution Accordion */}
          {solution && solution.length > 0 && (
            <div className="mb-4 border border-border rounded-lg overflow-hidden bg-card">
              <button
                onClick={() => toggleSection('solution')}
                className="w-full flex items-center justify-between p-4 bg-muted/50 hover:bg-muted transition-colors text-left"
              >
                <span className="font-semibold">{t('portfolio.solution_title')}</span>
                {expandedSections.solution ? (
                  <Minus className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              {expandedSections.solution && (
                <div className="p-4 bg-card">
                  <ul className="space-y-2">
                    {solution.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Project Roadmap Accordion */}
          {project.roadmap && project.roadmap.length > 0 && (
            <div className="mb-6 border border-border rounded-lg overflow-hidden bg-card">
              <button
                onClick={() => toggleSection('roadmap')}
                className="w-full flex items-center justify-between p-4 bg-muted/50 hover:bg-muted transition-colors text-left"
              >
                <span className="font-semibold">{t('portfolio.projectroadmap_title')}</span>
                {expandedSections.roadmap ? (
                  <Minus className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              {expandedSections.roadmap && (
                <div className="p-4 bg-card">
                  <div className="space-y-6">
                    {project.roadmap.map((item, index) => (
                      <div key={index} className="relative flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full flex items-center justify-center text-2xl border border-primary/20">
                          {item.icon || '📍'}
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1">
                          <h4 className="font-semibold text-lg mb-1">{t(item.title)}</h4>
                          <p className="text-muted-foreground">{t(item.description)}</p>
                        </div>

                        {/* Connecting Line */}
                        {index < project.roadmap!.length - 1 && (
                          <div className="absolute left-6 top-14 w-0.5 h-8 bg-gradient-to-b from-primary/30 to-secondary/30" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tools */}
          {project.tools && project.tools.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-3">{t('portfolio.tools_title')}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-primary-foreground rounded-full text-sm border border-primary/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* External Link Button */}
          {project.link && (
            <div>
              <Button
                asChild
                className="bg-primary/50 backdrop-blur-sm hover:bg-primary/90 text-primary-foreground"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {t('portfolio.view_project')}
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
