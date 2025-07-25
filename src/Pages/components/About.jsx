import { Particles } from "@/components/magicui/particles";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { ShineBorder } from "@/components/magicui/shine-border";
import Cards from "@/components/Cards";
import { Helmet } from "react-helmet";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const WhyMe = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const scaleIn = {
    initial: { scale: 0.95, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const data = [
    {
      icon: "🔍",
      title: " DATA SCIENCE MASTERY",
      description:
        "From data wrangling to machine learning and storytelling — I specialize in Python, SQL, Scikit-learn, TensorFlow, pandas, NumPy, Power BI, Tableau, Databases: MySQL, MongoDB. I bring full-stack data expertise to turn raw numbers into actionable strategies.",
    },
    {
      icon: "⚡",
      title: "SPEED & SCALABILITY",
      description:
        "I design analytical systems and ML models that scale with your data — fast ETL pipelines, cloud-ready notebooks, and lean code. No lag. No bottlenecks. Just results.",
    },
    {
      icon: "✨",
      title: "CLEAN & INTERPRETABLE INSIGHTS",
      description:
        "No black-box confusion. I deliver clear, explainable models and dashboards that stakeholders actually understand. Because great insights mean nothing if no one gets them.",
    },
    {
      icon: "💎",
      title: "VALUE FOR MONEY",
      description:
        "Data science without the overengineering or inflated price tag. I provide business-focused analytics that deliver real ROI — from growth opportunities to cost-saving insights.",
    },
  ];

  return (
    <>
    
      <div
        id="about"
        className="w-full min-h-screen bg-zinc-900/70 to-black relative px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <Particles className="w-full h-full" quantity={150} />
        </div>

        <div className="container mx-auto py-12 sm:py-16 md:py-24 relative z-10 max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={scaleIn}
          >
            <div>
              <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 sm:mb-8">
                <AnimatedGradientText>
                  👋 Hey, I'm Ammar Saqib — Your Data-Decoding Strategist

                </AnimatedGradientText>
              </h1>
            </div>
          </motion.div>

          <MagicCard>
            <div>
              <motion.p
                initial="initial"
                whileInView="whileInView"
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl leading-relaxed bg-zinc-950 p-4 sm:p-6 md:p-8 rounded-xl backdrop-blur-sm text-gray-300"
              >
              Tired of guessing your way through decisions? You just found your solution. Think of me as Doctor Strange, but with Python and SQL — I wield data, machine learning, and analytics to create smart solutions that actually work. Got a messy dataset or an idea for a product that needs insight, automation, or predictive power? You’re in the right place.

                <ShineBorder />
              </motion.p>
            </div>
          </MagicCard>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 mt-6 sm:mt-8 md:mt-10 gap-4 sm:gap-6 md:gap-8"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.2 }}
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1, delay: index * 0.1 + 0.2 }}
              >
                <div>
                  <Cards data={item} />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <MagicCard className="mt-10 sm:mt-16 md:mt-20">
            <div>
              <motion.div
                initial="initial"
                whileInView="whileInView"
                variants={fadeInUp}
                className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm relative w-full overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-br from-zinc-700 to-zinc-800 p-4 sm:p-6 rounded-lg shadow-xl">
                    🚀
                  </span>
                  <div className="p-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4 bg-clip-text bg-gradient-to-r from-blue-900 to-purple-400">
🚀 Ready to Build Your Next Data-Driven Success Story?                    </h3>
                    <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-300 leading-relaxed">
                      I don’t just analyze data — I create impactful solutions that guide smart decisions and spark innovation. Whether you need an AI-powered engine, a market analysis, or a beautiful dashboard, let’s build something that’s not just intelligent, but transformative.
                    </p>
                    <motion.p
                      whileHover={{ scale: 1.02 }}
                      className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 cursor-pointer"
                    >
                      Let's Transform Your Ideas Into Reality - Your Success Story
                      Starts Here! 🚀
                    </motion.p>
                  </div>{" "}
                </div>
                <ShineBorder />
              </motion.div>
            </div>
          </MagicCard>
        </div>
      </div>
    </>
  );
};

export default WhyMe;