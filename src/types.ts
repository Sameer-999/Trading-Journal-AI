import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isBestValue?: boolean;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  stepNumber: string;
  icon: React.ReactNode;
}

export interface TraderType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}
