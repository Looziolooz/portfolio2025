'use client';

import { SkillCategory } from '@/types/skills';
import SkillCategoryItem from './skills-category';

interface SkillsGridProps {
  mobile: SkillCategory[];
  tablet: SkillCategory[];
  desktop: SkillCategory[];
  largeDesktop: SkillCategory[];
}

export default function SkillsGrid({ mobile, tablet, desktop, largeDesktop }: SkillsGridProps) {
  return (
    <>
      {/* Mobile Layout */}
      <div className="block md:hidden space-y-8">
        {mobile.map((category, index) => (
          <SkillCategoryItem
            key={category.title}
            title={category.title}
            items={category.items}
            delay={index * 0.2}
          />
        ))}
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-2 gap-8">
          {/* First column: Code & Upcoming */}
          <div className="space-y-8">
            <SkillCategoryItem
              title={tablet[0].title}
              items={tablet[0].items}
              delay={0}
            />
            <SkillCategoryItem
              title={tablet[2].title}
              items={tablet[2].items}
              delay={0.2}
            />
          </div>
          
          {/* Second column: Toolbox & More */}
          <div className="space-y-8">
            <SkillCategoryItem
              title={tablet[1].title}
              items={tablet[1].items}
              delay={0.1}
            />
            <SkillCategoryItem
              title={tablet[3].title}
              items={tablet[3].items}
              delay={0.3}
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block xl:hidden">
        <div className="grid grid-cols-3 gap-8">
          {desktop.map((category, index) => (
            <SkillCategoryItem
              key={category.title}
              title={category.title}
              items={category.items}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>

      {/* Large Desktop Layout */}
      <div className="hidden xl:block">
        <div className="grid grid-cols-4 gap-8">
          {largeDesktop.map((category, index) => (
            <SkillCategoryItem
              key={category.title}
              title={category.title}
              items={category.items}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </>
  );
}