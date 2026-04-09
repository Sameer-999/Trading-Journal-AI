import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import TargetAudience from '../components/TargetAudience';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

export default function Home() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Trading Journal",
    "operatingSystem": "Web",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "19.00",
      "priceCurrency": "INR"
    },
    "description": "A powerful trading journal to help you become a consistently profitable trader. Log trades, spot patterns, and grow your edge.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1200"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sameer-999.github.io/Trading-Journal-AI/"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://sameer-999.github.io/Trading-Journal-AI/",
    "name": "Trading Journal",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://sameer-999.github.io/Trading-Journal-AI/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a trading journal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A trading journal is a log that you use to record your trades. It helps you track your performance, identify patterns in your trading behavior, and improve your overall strategy by learning from both your wins and losses."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I use an online trading journal instead of Excel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While Excel is powerful, an online trading journal like ours automates the analytics process. We provide real-time performance metrics, visual charts, and strategy insights that would take hours to build and maintain in a spreadsheet."
        }
      },
      {
        "@type": "Question",
        "name": "Is my trading data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, security is our top priority. We use industry-standard encryption and secure server environments to ensure that your trading logs and personal information are always protected."
        }
      },
      {
        "@type": "Question",
        "name": "Can I track different types of assets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our journal is designed for versatility. You can track Forex, Crypto, Stocks, Options, and more. We provide specialized fields for each asset class to ensure you capture the right data."
        }
      },
      {
        "@type": "Question",
        "name": "How does the analytics help me improve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our analytics engine identifies your most profitable setups, sessions, and instruments. By seeing exactly where your edge lies, you can focus on what works and eliminate the mistakes that are costing you money."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Trading Journal | Master Your Trading Performance</title>
        <meta name="description" content="The ultimate trading journal for serious traders. Track your trades, analyze performance, and identify your edge with data-driven insights." />
        <link rel="canonical" href="https://sameer-999.github.io/Trading-Journal-AI/" />
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TargetAudience />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
    </>
  );
}
