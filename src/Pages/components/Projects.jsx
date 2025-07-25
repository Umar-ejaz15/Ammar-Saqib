import React from "react";
import { Particles } from "@/components/magicui/particles";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RainbowButton } from "@/components/magicui/rainbow-button";

const Projects = () => {
  const data = [
    {
      id: 2,
      title: "AI Text Authorship Classifier",
      description:
        "A deep learning-powered model that distinguishes AI-generated text from human-written content. Utilizes LSTM networks and embedding layers for sequence classification. Features include model evaluation with precision, recall, ROC-AUC metrics, and a user interface for real-time predictions.",
      image: "/ai vs human.jpg",
      link: "https://github.com/Ammarsaqib-programmer/kaggle_datasets/blob/main/ai_vs_human_text.ipynb",
      tags: ["Deep Learning", "NLP", "LSTM", "TensorFlow"],
    },
    {
      id: 4,
      title: "Ecommerce Data Exploration",
      description:
        "An insightful data analysis project focused on ecommerce transactions. Uses data visualization techniques to identify key patterns, trends, and customer behaviors. Includes heatmaps, distribution plots, and time series analysis for business intelligence.",
      image: "/ecomrace.jpg",
      link: "https://github.com/Ammarsaqib-programmer/kaggle_datasets/blob/main/ecommerce.ipynb",
      tags: ["Pandas", "Seaborn", "Data Analysis", "Matplotlib"],
    },
    {
      id: 6,
      title: "Flight Price Predictor",
      description:
        "Machine learning project that predicts flight ticket prices based on features such as airline, source, destination, and duration. Implements regression models and evaluates them with RMSE and R² metrics. A practical tool for travel data insight and fare prediction.",
      image: "/flight.jpg",
      link: "https://github.com/Ammarsaqib-programmer/kaggle_datasets/blob/main/flight.ipynb",
      tags: ["Machine Learning", "Regression", "Scikit-learn", "EDA"],
    },
    {
      id: 3,
      title: "Property Management Web App",
      description:
        "A modern web dashboard for real estate professionals, offering features like tenant tracking, maintenance logs, and financial analytics. Built using React and a modular UI system. Fully responsive with login/authentication flow.",
      image: "/heart.jpg",
      link: "https://site-manger.vercel.app/account",
      tags: ["React", "Web App", "Dashboard", "Styled Components"],
    },

  ];

  const ProjectCard = ({ project }) => {
    return (
      <MagicCard className="w-full bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-800 h-auto">
        <div className="w-full h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
          {project.title}
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 sm:px-4 py-1 sm:py-1.5 bg-zinc-800 text-zinc-300 rounded-full text-xs sm:text-sm font-medium hover:bg-zinc-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <RainbowButton className="w-full">Live Preview</RainbowButton>
        </a>
      </MagicCard>
    );
  };

  return (
    <section
      id="projects"
      className="w-full h-auto bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden py-12 sm:py-20"
    >
      <div className="absolute inset-0 w-full h-full z-0 opacity-50">
        <Particles className="w-full h-full" quantity={100} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
            <AnimatedGradientText>Featured Projects</AnimatedGradientText>
          </h1>
        </motion.div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"2"}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: "2",
              spaceBetween: 10
            },
            1024: {
              slidesPerView: "2",
              spaceBetween: 10
            }
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          style={{
            padding: "50px 0",
          }}
        >
          {data.map((project) => (
            <SwiperSlide
              key={project.id}
              style={{
                width: "min(450px, 100%)",
                backgroundColor: "transparent",
              }}
              className="px-4 sm:px-0"
            >
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;