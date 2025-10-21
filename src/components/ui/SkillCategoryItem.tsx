'use client';

import { motion } from 'framer-motion';

interface SkillCategoryItemProps {
  title: string;
  items: string[];
  delay?: number;
}

export default function SkillCategoryItem({ title, items, delay = 0 }: SkillCategoryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mb-8"
    >
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + index * 0.1 }}
            className="text-white/90 text-lg"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}