import React from 'react';

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  icon: React.ReactElement;
  features: string[];
  specs: string;
  compatibility: string;
  integration: string;
  regulatory: string;
  screenshot: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Stat {
    value: string;
    label: string;
}

export interface ImpactStory {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}