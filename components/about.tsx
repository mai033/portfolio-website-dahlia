'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:sb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>

      <p className="mb-3">
        Since childhood, I've believed in finding solutions for every problem,
        shaping my inherent problem-solving mindset and propelling me toward a
        career as a{' '}
        <span className="font-medium">full-stack software engineer</span>. My
        passion lies in the
        <span className="italic"> problem-solving</span> aspect of programming,
        and I find immense satisfaction in uncovering solutions. Proficient in{' '}
        <span className="font-medium">
          JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB
        </span>
        , and <span className="font-medium">SQL</span>, I am driven to
        contribute to projects offering practical solutions. Eager to acquire
        knowledge about new technologies, my keen interest in AI fuels my
        enthusiasm for integrating it into applications.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy spending
        time with my dog, playing water sports, dancing bachata, paragliding,
        and traveling to new places.
      </p>
    </motion.section>
  );
}
