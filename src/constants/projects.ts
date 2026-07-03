import { images } from "./images";

export interface RoadmapStep {
  icon: string;
  title: string;
  description: string;
}

export interface ProjectData {
  id: string;
  titleKey: string;
  descKey: string;
  fullDescKey: string;
  category: "AI Art" | "Branding" | "Illustration" | "Typography";
  categoryKey: string;
  mainImage: string;
  images: string[];
  challengeKeys: string[];
  solutionKey?: string[];
  roadmap?: RoadmapStep[];
  tools: string[];
  link?: string;
}

export const projects: ProjectData[] = [
  {
    id: "1",
    titleKey: "portfolio.project_1_title",
    descKey: "portfolio.project_1_desc",
    fullDescKey: "portfolio.project_1_full",
    category: "AI Art",
    categoryKey: "portfolio.ai_art",
    mainImage: images.portfolio.project_1_main,
    images: [
      images.portfolio.project_1_main,
      images.portfolio.project_1_carousel_1,
      images.portfolio.project_1_carousel_2,
    ],
    challengeKeys: [
      "portfolio.project_1_challenge_1",
      "portfolio.project_1_challenge_2",
    ],
    solutionKey: [
      "portfolio.project_1_solution_1",
      "portfolio.project_1_solution_2",
    ],
    roadmap: [
      {
        icon: "🔍",
        title: "portfolio.project_1_roadmap_1_title",
        description: "portfolio.project_1_roadmap_1_desc",
      },
      {
        icon: "🎨",
        title: "portfolio.project_1_roadmap_2_title",
        description: "portfolio.project_1_roadmap_2_desc",
      },
      {
        icon: "🧪",
        title: "portfolio.project_1_roadmap_3_title",
        description: "portfolio.project_1_roadmap_3_desc",
      },
      {
        icon: "🚀",
        title: "portfolio.project_1_roadmap_4_title",
        description: "portfolio.project_1_roadmap_4_desc",
      },
    ],
    tools: ["n8n", "DeepSeek", "Mistral","Tilda","KLing","Recraft"],
    link: "https://zefirka-ai-beauty.tilda.ws/",
  },
  {
    id: "2",
    titleKey: "portfolio.project_2_title",
    descKey: "portfolio.project_2_desc",
    fullDescKey: "portfolio.project_2_full",
    category: "Typography",
    categoryKey: "portfolio.typography",
    mainImage: images.portfolio.project_2_main,
    images: [
      images.portfolio.project_2_main,
      images.portfolio.project_2_carousel_1,
      images.portfolio.project_2_carousel_2,
      images.portfolio.project_2_carousel_3,      
    ],
    challengeKeys: [
      "portfolio.project_2_challenge_1",
      "portfolio.project_2_challenge_2",
    ],
    solutionKey: [
      "portfolio.project_2_solution_1",
      "portfolio.project_2_solution_2",
    ],
    roadmap: [
      {
        icon: "📋",
        title: "portfolio.project_2_roadmap_1_title",
        description: "portfolio.project_2_roadmap_1_desc",
      },
      {
        icon: "📦",
        title: "portfolio.project_2_roadmap_2_title",
        description: "portfolio.project_2_roadmap_2_desc",
      },
      {
        icon: "📘",
        title: "portfolio.project_2_roadmap_3_title",
        description: "portfolio.project_2_roadmap_3_desc",
      },
      {
        icon: "🎨",
        title: "portfolio.project_2_roadmap_4_title",
        description: "portfolio.project_2_roadmap_4_desc",
      },
    ],
    tools: ["Adobe Illustrator", "Figma", "Adobe Photoshop", "Procreate"],
    link: "https://sbertroika.ru/tpost/h0gplaahh1-sbertroika-vipustila-bolee-60-tis-kart-t",
  },
  {
    id: "6",
    titleKey: "portfolio.project_6_title",
    descKey: "portfolio.project_6_desc",
    fullDescKey: "portfolio.project_6_full",
    category: "Typography",
    categoryKey: "portfolio.typography",
    mainImage: images.portfolio.project_6_main,
    images: [
      images.portfolio.project_6_main,
      images.portfolio.project_6_carousel_1,
      images.portfolio.project_6_carousel_2,
      images.portfolio.project_6_carousel_3,  
      images.portfolio.project_6_carousel_4,          
    ],
    challengeKeys: [
      "portfolio.project_6_challenge_1",
      "portfolio.project_6_challenge_2",
    ],
    solutionKey: [
      "portfolio.project_6_solution_1",
      "portfolio.project_6_solution_2",
    ],
    roadmap: [
      {
        icon: "📖",
        title: "portfolio.project_6_roadmap_1_title",
        description: "portfolio.project_6_roadmap_1_desc",
      },
      {
        icon: "🎨",
        title: "portfolio.project_6_roadmap_2_title",
        description: "portfolio.project_6_roadmap_2_desc",
      },
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Licensing"],
    link: "https://www.m24.ru/news/transport/15102025/838595",
  },  
      {
    id: "8",
    titleKey: "portfolio.project_8_title",
    descKey: "portfolio.project_8_desc",
    fullDescKey: "portfolio.project_8_full",
    category: "Branding",
    categoryKey: "portfolio.branding",
    mainImage: images.portfolio.project_8_main,
    images: [
      images.portfolio.project_8_main,
      images.portfolio.project_8_carousel_1,
      images.portfolio.project_8_carousel_2,
      images.portfolio.project_8_carousel_3,
      images.portfolio.project_8_carousel_4,            
    ],
    challengeKeys: [
      "portfolio.project_8_challenge_1",
    ],
    solutionKey: [
      "portfolio.project_8_solution_1",
      "portfolio.project_8_solution_2",
    ],
    roadmap: [
      {
        icon: "✨",
        title: "portfolio.project_8_roadmap_1_title",
        description: "portfolio.project_8_roadmap_1_desc",
      },
      {
        icon: "🎨",
        title: "portfolio.project_8_roadmap_2_title",
        description: "portfolio.project_8_roadmap_2_desc",
      },
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
    link: "https://sbertroika.ru/nso-cards",    
  },
  // {
  //   id: "3",
  //   titleKey: "portfolio.project_3_title",
  //   descKey: "portfolio.project_3_desc",
  //   fullDescKey: "portfolio.project_3_full",
  //   category: "Branding",
  //   categoryKey: "portfolio.branding",
  //   mainImage: images.portfolio.project_3_main,
  //   images: [
  //     images.portfolio.project_3_main,
  //     images.portfolio.project_3_carousel_1,
  //     images.portfolio.project_3_carousel_2,
  //   ],
  //   challengeKeys: [
  //     "portfolio.project_3_challenge_1",
  //     "portfolio.project_3_challenge_2",
  //   ],
  //   solutionKey: [
  //     "portfolio.project_3_solution_1",
  //     "portfolio.project_3_solution_2",
  //   ],
  //   roadmap: [
  //     {
  //       icon: "✏️",
  //       title: "portfolio.project_3_roadmap_1_title",
  //       description: "portfolio.project_3_roadmap_1_desc",
  //     },
  //     {
  //       icon: "🎨",
  //       title: "portfolio.project_3_roadmap_2_title",
  //       description: "portfolio.project_3_roadmap_2_desc",
  //     },
  //   ],
  //   tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma"],
  //   link: "https://sbertroika.ru/tpost/ru9tny8vu1-pochti-v-2-raza-uvelichilos-kolichestvo",
  // },
  {
    id: "4",
    titleKey: "portfolio.project_4_title",
    descKey: "portfolio.project_4_desc",
    fullDescKey: "portfolio.project_4_full",
    category: "Typography",
    categoryKey: "portfolio.typography",
    mainImage: images.portfolio.project_4_main,
    images: [
      images.portfolio.project_4_main,
      images.portfolio.project_4_carousel_1,
      images.portfolio.project_4_carousel_3,      
      images.portfolio.project_4_carousel_2,

    ],
    challengeKeys: [
      "portfolio.project_4_challenge_1",
      "portfolio.project_4_challenge_2",
    ],
    solutionKey: [
     "portfolio.project_4_solution_1",
     "portfolio.project_4_solution_2",
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator",],
    link: "https://mosmetro.ru/news/details/5709",
  },
  {
    id: "5",
    titleKey: "portfolio.project_5_title",
    descKey: "portfolio.project_5_desc",
    fullDescKey: "portfolio.project_5_full",
    category: "Typography",
    categoryKey: "portfolio.typography",
    mainImage: images.portfolio.project_5_main,
    images: [
      images.portfolio.project_5_main,
      images.portfolio.project_5_carousel_1,
    ],
    challengeKeys: [
      "portfolio.project_5_challenge_1",
      "portfolio.project_5_challenge_2",
    ],
    solutionKey: [
      "portfolio.project_5_solution_1",
      "portfolio.project_5_solution_2",
    ],
    roadmap: [
      {
        icon: "✨",
        title: "portfolio.project_5_roadmap_1_title",
        description: "portfolio.project_5_roadmap_1_desc",
      },
      {
        icon: "✏️",
        title: "portfolio.project_5_roadmap_2_title",
        description: "portfolio.project_5_roadmap_2_desc",
      },
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Procreate", "Figma", "Tilda"],
    link: "https://sbertroika.ru/troika_mo",
  },  
  {
    id: "7",
    titleKey: "portfolio.project_7_title",
    descKey: "portfolio.project_7_desc",
    fullDescKey: "portfolio.project_7_full",
    category: "Branding",
    categoryKey: "portfolio.branding",
    mainImage: images.portfolio.project_7_main,
    images: [
      images.portfolio.project_7_main,
      images.portfolio.project_7_carousel_1,
      images.portfolio.project_7_carousel_2,
    ],
    challengeKeys: [
      "portfolio.project_7_challenge_1",
    ],
    solutionKey: [
      "portfolio.project_7_solution_1",
      "portfolio.project_7_solution_2",
    ],
    roadmap: [
      {
        icon: "📐",
        title: "portfolio.project_7_roadmap_1_title",
        description: "portfolio.project_7_roadmap_1_desc",
      },
      {
        icon: "🎨",
        title: "portfolio.project_7_roadmap_2_title",
        description: "portfolio.project_7_roadmap_2_desc",
      },
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Kandinsky 2.1"],
    link: "https://t.me/DtRoad/48982",
  },
  {
    id: "9",
    titleKey: "portfolio.project_9_title",
    descKey: "portfolio.project_9_desc",
    fullDescKey: "portfolio.project_9_full",
    category: "Illustration",
    categoryKey: "portfolio.illustration",
    mainImage: images.portfolio.project_9_main,
    images: [
      images.portfolio.project_9_main,
      images.portfolio.project_9_carousel_1,
      images.portfolio.project_9_carousel_2,
      images.portfolio.project_9_carousel_3,      
    ],
    challengeKeys: [
      "portfolio.project_9_challenge_1",
      "portfolio.project_9_challenge_2",
    ],
    solutionKey: [
      "portfolio.project_9_solution_1",
      "portfolio.project_9_solution_2",
    ],
    roadmap: [
      {
        icon: "✨",
        title: "portfolio.project_9_roadmap_1_title",
        description: "portfolio.project_9_roadmap_1_desc",
      },
      {
        icon: "🎨",
        title: "portfolio.project_9_roadmap_2_title",
        description: "portfolio.project_9_roadmap_2_desc",
      },
      {
        icon: "✏️",
        title: "portfolio.project_9_roadmap_3_title",
        description: "portfolio.project_9_roadmap_3_desc",
      },
    ],
    tools: ["Adobe Photoshop", "Adobe InDesign", "Handdrawing"],
  },
];
