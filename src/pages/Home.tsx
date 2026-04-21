import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
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
    "name": "AI Trading Journal",
    "operatingSystem": "Web",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "19.00",
      "priceCurrency": "INR"
    },
    "description": "The ultimate AI trading journal. Track your trades, analyze performance with smart insights, and grow your edge.",
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
        "name": "AI Trading Journal",
        "item": "https://sameer-999.github.io/Trading-Journal-AI/"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://sameer-999.github.io/Trading-Journal-AI/",
    "name": "AI Trading Journal",
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
        "name": "What is an AI trading journal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI trading journal is a smart log that automatically analyzes your trades using artificial intelligence to spot patterns, emotional biases, and strategy edges that are impossible to see manually."
        }
      },
      {
        "@type": "Question",
        "name": "Why use an AI trading journal instead of Excel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While Excel is static, an AI trading journal like ours automates analysis. We provide real-time smart metrics, visual charts, and AI-driven insights that save you hours and improve your trading precision."
        }
      },
      {
        "@type": "Question",
        "name": "Is my trading data secure with AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, security is our top priority. We use industry-standard encryption to protect your trading logs, and our AI models process your data in secure cloud environments."
        }
      },
      {
        "@type": "Question",
        "name": "Can I track different asset classes in this AI journal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our AI trading journal supports Forex, Crypto, Stocks, and Options. Large-scale data analysis works across all instruments to find your overall edge."
        }
      },
      {
        "@type": "Question",
        "name": "How do AI insights help me improve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI engine identifies your 'Golden Sessions' and most profitable setups. By seeing exactly where your edge lies through data, you can focus on winning strategies and eliminate costly mistakes."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Trading Journal | Best Smart Trade Log for Analysts</title>
        <meta name="description" content="The ultimate AI trading journal for serious traders. Track your trades, analyze performance with smart insights, and identify your edge with data-driven AI tracking." />
        <link rel="canonical" href="https://sameer-999.github.io/Trading-Journal-AI/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sameer-999.github.io/Trading-Journal-AI/" />
        <meta property="og:title" content="AI Trading Journal | Smart Trade Logging & Analysis" />
        <meta property="og:description" content="The ultimate AI trading journal for serious traders. Track, analyze, and improve your edge with automated insights." />
        <meta property="og:image" content="https://sameer-999.github.io/Trading-Journal-AI/favicon.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="AI Trading Journal | Best Smart Trade Tracking" />
        <meta property="twitter:description" content="The ultimate AI trading journal. Track your trades, analyze performance with smart insights, and grow your edge." />
        <meta property="twitter:image" content="https://sameer-999.github.io/Trading-Journal-AI/favicon.svg" />

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
        <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Why Use an <span className="text-blue-600">AI Trading Journal</span> to Master the Markets?
                </h2>
                <div className="prose prose-slate prose-lg text-slate-600 space-y-4">
                  <p>
                    Successful trading isn't just about finding the right entry; it's about understanding your own behavior and the patterns that lead to success. An <strong>AI trading journal</strong> goes beyond simple logging by using advanced data analysis to uncover hidden correlations in your trading activity.
                  </p>
                  <p>
                    Most traders struggle with emotional bias and repetitive mistakes. By consistently tracking your trades in a dedicated smart journal, you transform subjective feelings into objective data. Our platform analyzes your session performance, instrument win rates, and holding times to calculate your exact risk-adjusted edge.
                  </p>
                  <p>
                    Whether you are a day trader in the stock market, a crypto enthusiast, or a forex professional, data is your greatest asset. Traditional spreadsheets are time-consuming and often inaccurate. Our automated AI tools handle the heavy lifting, allowing you to focus on executing your strategy while we identify your most profitable setups.
                  </p>
                  <p>
                    By maintaining a disciplined <strong>AI-powered trading log</strong>, you build the confidence needed to scale your position sizing and achieve long-term financial freedom. Stop guessing and start progressing with data-driven insights.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" 
                    alt="Analytics Dashboard"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full blur-3xl -z-10 opacity-60" />
              </motion.div>
            </div>
          </div>
        </section>
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
