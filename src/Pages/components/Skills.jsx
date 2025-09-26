import React from "react";
import { Particles } from "@/components/magicui/particles";
import { MagicCard } from "@/components/magicui/magic-card";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShineBorder } from "@/components/magicui/shine-border";

// Import Lucide icons
import {
  Database,
  Cloud,
  Github,
  BarChart3,
  GitBranch,
  Terminal,
  Brain,
  ChartBar,
  LineChart,
  Cpu,
  CloudCog,
} from "lucide-react";

const Skills = () => {
  const tools = [
    { icon: <Terminal className="w-8 h-8 text-blue-400" />, name: "Python" },
    { icon: <Database className="w-8 h-8 text-yellow-400" />, name: "MySQL" },
    { icon: <Database className="w-8 h-8 text-green-500" />, name: "MongoDB" },
    { icon: <BarChart3 className="w-8 h-8 text-purple-400" />, name: "Pandas" },
    { icon: <Brain className="w-8 h-8 text-pink-400" />, name: "Scikit-learn" },
    { icon: <Cpu className="w-8 h-8 text-orange-400" />, name: "TensorFlow" },
    { icon: <ChartBar className="w-8 h-8 text-yellow-400" />, name: "Power BI" },
    { icon: <LineChart className="w-8 h-8 text-indigo-400" />, name: "Tableau" },
    { icon: <BarChart3 className="w-8 h-8 text-cyan-400" />, name: "Seaborn" },
    { icon: <LineChart className="w-8 h-8 text-teal-400" />, name: "Plotly" },
    { icon: <CloudCog className="w-8 h-8 text-blue-500" />, name: "Google Cloud" },
    { icon: <Cloud className="w-8 h-8 text-orange-500" />, name: "AWS" },
    { icon: <GitBranch className="w-8 h-8 text-red-500" />, name: "Git" },
    { icon: <Cpu className="w-8 h-8 text-pink-400" />, name: "Streamlit" },
    { icon: <ChartBar className="w-8 h-8 text-green-400" />, name: "Dash" },
    { icon: <Cloud className="w-8 h-8 text-gray-300" />, name: "Flask APIs" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black py-12 sm:py-16">
      <div className="absolute inset-0 w-full h-full z-0 opacity-30">
        <Particles className="w-full h-full" quantity={120} />
      </div>

      <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mx-auto max-w-2xl text-center space-y-6"
        >
          <AnimatedGradientText>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              🧰 Tools & Technologies
            </h1>
          </AnimatedGradientText>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            I build robust, data-driven solutions with modern tools and platforms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 sm:grid-cols-3 lg:grid-cols-5"
        >
          <AnimatePresence>
            {tools.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.07 }}
                className="group"
              >
                <div className="relative">
                  <MagicCard className="relative h-full overflow-hidden rounded-lg bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 p-3 backdrop-blur-sm hover:from-zinc-700/50 hover:to-zinc-800/50 transition-all duration-300">
                    <motion.div
                      className="flex items-center justify-center p-3"
                      whileHover={{
                        rotate: 360,
                        scale: 1.15,
                        transition: { duration: 0.5, ease: "easeInOut" },
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-200 text-center group-hover:text-white transition-colors">
                      {item.name}
                    </p>
                  </MagicCard>
                  <ShineBorder className="absolute inset-0 rounded-lg" />
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
