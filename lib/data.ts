import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { IoAirplaneOutline } from 'react-icons/io5';
import KubeVX from '@/public/KubeVX.png';
import Meowmatch from '@/public/Meowmatch.png';
import RendezView from '@/public/RendezView.png';
import Cerebella from '@/public/Cerebella.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Software Engineer',
    location: 'Los Angeles',
    description:
      // 'Experienced engineer specializing in React, JavaScript, TypeScript, Node.js, Express.js, and MongoDB, dedicated to delivering innovative and scalable solutions.',
      'I work as a full-stack software engineer at Kube VX, an open-source project powered by OS Labs, where I contributed to a 20% improvement in page loading times.',
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
  {
    title: 'Business Development | Administrative Manager',
    location: 'Malta',
    description:
      'Elevated team efficiency by introducing and integrating key technology tools(Jira, HubSpot, ERP...), resulting in a 16% increase in productivity.',
    icon: React.createElement(CgWorkAlt),
    date: '2020 - 2022',
  },
  {
    title: 'Senior Cabin Crew',
    location: 'Taiwan',
    description:
      "As an international crew member, I've developed a keen awareness of diverse cultures, excelled in teamwork, and consistently prioritized passenger experience.",
    icon: React.createElement(IoAirplaneOutline),
    date: '2015 - 2020',
  },
] as const;

export const projectsData = [
  {
    title: 'Kube VX',
    description:
      // 'kubevx.com is an open-source Kubernetes visualization tool, featuring an AI assistant.',
      'An open-source Kubernetes visualization tool, featuring an AI assistant. Check it out at <u><a href="https://kubevx.com" target="_blank" rel="noopener noreferrer">kubevx.com</a></u>.',
    tags: [
      'React',
      'Redux',
      'Express.js',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'Prometheus',
      'Grafana',
      'AWS',
      'Chart.js',
      'Material UI',
      'OAuth',
    ],
    imageUrl: KubeVX,
  },
  {
    title: 'Rendez View',
    description:
      'A meeting scheduling platform that allows everyone to add their availability on a grid, enabling users to identify the slot that best overlaps.',
    tags: ['React', 'Express.js', 'JavaScript', 'SQL'],
    imageUrl: RendezView,
  },
  {
    title: 'Meow Match',
    description:
      'An online, searchable, database of animals who need a home. We help connect pets in need with foster and forever homes.',
    tags: ['React', 'Express.js', 'JavaScript', 'MongoDB'],
    imageUrl: Meowmatch,
  },
  {
    title: 'Cerebella',
    description:
      'A revolutionary app for academic success, empowering users to create personalized AI tutors that serve as tailored learning assistants powered by cutting-edge AI technology.',
    tags: ['React', 'Express.js', 'JavaScript', 'MongoDB', 'Jest'],
    imageUrl: Cerebella,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Next.js',
  'SCSS',
  'Framer Motion',
  'Node.js',
  'Express.js',
  'Git',
  'SQL',
  'MongoDB',
  'GraphQL',
  'WebSockets',

  'Webpack',
  'Docker',
  'Kubernetes',
  'Prometheus',
  'Grafana',
  'Jest',
  'OAuth',
  'BCrypt',
  'AWS',
  'Chart.js',
  'Material UI',
] as const;
