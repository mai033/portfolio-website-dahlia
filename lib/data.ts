import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { IoAirplaneOutline } from 'react-icons/io5';
import KubeVX from '@/public/KubeVX.png';
import Meowmatch from '@/public/Meowmatch.png';
import RendezView from '@/public/RendezView.png';
import Cerebella from '@/public/Cerebella.png';
import Portfolio from '@/public/Portfolio.png';
import Dashboard from '@/public/Dashboard.png';

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
    title: 'AI Trainer',
    location: 'Los Angeles',
    description:
      // 'Experienced engineer specializing in React, JavaScript, TypeScript, Node.js, Express.js, and MongoDB, dedicated to delivering innovative and scalable solutions.',
      'LLM training on software engineering.',
    icon: React.createElement(FaReact),
    date: '2024 - present',
  },
  {
    title: 'Software Engineer',
    location: 'Los Angeles',
    description:
      // 'Experienced engineer specializing in React, JavaScript, TypeScript, Node.js, Express.js, and MongoDB, dedicated to delivering innovative and scalable solutions.',
      'I work as a full-stack software engineer at Kube VX, an open-source project powered by OS Labs, where I created an Observability Platform that integrates with an AI assistant to analyze Kubernetes clusters.',
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
  {
    title: 'Office Manager',
    location: 'Malta',
    description:
      'Led cross-functional teams, improving project delivery by 20% and enhancing inter-departmental communication by 15%.',
    icon: React.createElement(CgWorkAlt),
    date: '2020 - 2022',
  },
  // {
  //   title: 'Business Development',
  //   location: '',
  //   description:
  //     'Boosted revenue by 12% by initiating strategic partnerships and cultivating strong client relationships.',
  //   // "As an international crew member, I've developed a keen awareness of diverse cultures, excelled in teamwork, and consistently prioritized passenger experience.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: '2020 - 2021',
  // },
] as const;

export const projectsData = [
  // {
  //   title: 'Observability Platform',
  //   description:
  //     // 'kubevx.com is an open-source Kubernetes visualization tool, featuring an AI assistant.',
  //     // 'An Observability Platform for analyzing Kubernetes clusters, featuring an AI assistant. Check it out at <u><a href="https://kubevx.com" target="_blank" rel="noopener noreferrer">kubevx.com</a></u>.',
  //     'An Observability Platform for analyzing Kubernetes clusters, featuring an AI assistant.',
  //   tags: [
  //     'React',
  //     'Redux',
  //     'Node.js',
  //     'MongoDB',
  //     'Docker',
  //     'Kubernetes',
  //     'Prometheus',
  //     'Grafana',
  //     'AWS',
  //     'Chart.js',
  //     'Material UI',
  //     'OAuth',
  //   ],
  //   imageUrl: KubeVX,
  //   link: 'https://www.kubevx.com',
  // },
  {
    title: 'Portfolio Website',
    description:
      'A portfolio website that showcases my projects and skills built with Three.js.',
    tags: ['React', 'Three.js'],
    imageUrl: Portfolio,
    link: 'https://dahlia-website-threejs.vercel.app/',
  },
  {
    title: 'Fullstack Dashboard',
    description:
      'A full-stack application providing real-time monitoring of customers, transactions, and sales through a visually appealing dashboards',
    tags: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB'],
    imageUrl: Dashboard,
    link: 'https://admin-frontend-ngde.onrender.com/',
  },
  {
    title: 'Meeting Scheduler',
    description:
      'A meeting scheduling platform that allows everyone to add their availability on a grid, enabling users to identify the slot that best overlaps.',
    tags: ['React', 'Node.js', 'Express', 'JavaScript', 'SQL'],
    imageUrl: RendezView,
    link: 'https://rendez-view.vercel.app/',
  },

  {
    title: 'Pet Adoption Platform',
    description:
      'An online, searchable, database of animals who need a home. We help connect pets in need with foster and forever homes.',
    tags: ['TypeScript', 'Jest', 'React', 'Node.js', 'MongoDB'],
    imageUrl: Meowmatch,
    link: 'https://github.com/MeowMatch/MeowMatch',
  },
  {
    title: 'AI Tutor',
    description:
      'A revolutionary app for academic success, empowering users to create personalized AI tutors that serve as tailored learning assistants powered by cutting-edge AI technology.',
    tags: ['React', 'Node.js', 'Express', 'Jest'],
    imageUrl: Cerebella,
    link: 'https://github.com/Floppy-Floppy-Floppy-Sea-Spider/Cerebella',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Python',
  'React',
  'Redux',
  'Next.js',
  'SCSS',
  'Tailwind CSS',
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
  'Three.js',
] as const;
