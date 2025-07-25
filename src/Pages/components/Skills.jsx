import React from "react";
import { Particles } from "@/components/magicui/particles";
import { MagicCard } from "@/components/magicui/magic-card";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShineBorder } from "@/components/magicui/shine-border";

const Skills = () => {
  const tools = [
    { icon: "🐍", name: "Python" },
    { icon: "🛢️", name: "MySQL" },
    { icon: "🍃", name: "MongoDB" },
    { icon: "📊", name: "pandas" },
    { icon: "🧠", name: "scikit-learn" },
    { icon: "🔶", name: "TensorFlow" },
    { icon: "📈", name: "Power BI" },
    { icon: "📊", name: "Tableau" },
    { icon: "📉", name: "Seaborn" },
    { icon: "📊", name: "Plotly" },
    { icon: "☁️", name: "Google Cloud" },
    { icon: "🪣", name: "AWS" },
    { icon: "🐳", name: "Docker" },
    { icon: "🔧", name: "Git" },
    { icon: "📱", name: "Streamlit" },
    { icon: "📊", name: "Dash" },
    { icon: "🌐", name: "Flask APIs" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black py-16 sm:py-24">
      <div className="absolute inset-0 w-full h-full z-0 opacity-30">
        <Particles className="w-full h-full" quantity={150} />
      </div>
      <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="mx-auto max-w-3xl text-center space-y-8"
        >
          <AnimatedGradientText>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              🧰 Tools & Technologies I Work With
            </h1>
          </AnimatedGradientText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Languages, Tools & Platforms
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I build robust, data-driven solutions with precision. From backend
              APIs to cloud-based dashboards, I leverage the right tools to solve
              real-world problems and bring ideas to life.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          <AnimatePresence>
            {tools.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="relative">
                  <MagicCard className="relative h-full overflow-hidden rounded-xl bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:from-zinc-700/50 hover:to-zinc-800/50">
                    <motion.div
                      className="flex items-center justify-center p-4 text-4xl sm:text-5xl"
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.6, ease: "easeInOut" },
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-center"
                    >
                      <p className="text-sm sm:text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {item.name}
                      </p>
                    </motion.div>
                  </MagicCard>
                  <ShineBorder className="absolute inset-0 rounded-xl" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
