import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

type VideoCategory = "shorts" | "ads" | "longform" | "vsl";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  category: VideoCategory;
  duration: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("shorts");
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const categories: { id: VideoCategory; label: string }[] = [
    { id: "shorts", label: "Vídeos Curtos" },
    { id: "ads", label: "Ads / Anúncios" },
    { id: "longform", label: "Vídeos Longos" },
    { id: "vsl", label: "VSLs" },
  ];

  // Placeholder videos - replace with real content
  const videos: Video[] = [
    { id: "1", title: "Short Viral - Produto Tech", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop", videoUrl: "#", category: "shorts", duration: "0:45" },
    { id: "2", title: "Reels Lifestyle", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop", videoUrl: "#", category: "shorts", duration: "0:30" },
    { id: "3", title: "TikTok Trending", thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop", videoUrl: "#", category: "shorts", duration: "0:58" },
    { id: "4", title: "Ad Performance - E-commerce", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", videoUrl: "#", category: "ads", duration: "0:30" },
    { id: "5", title: "Meta Ads - Infoproduto", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", videoUrl: "#", category: "ads", duration: "0:45" },
    { id: "6", title: "YouTube Ads - SaaS", thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop", videoUrl: "#", category: "ads", duration: "1:00" },
    { id: "7", title: "Documentário Curto", thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop", videoUrl: "#", category: "longform", duration: "15:00" },
    { id: "8", title: "Vídeo Institucional", thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop", videoUrl: "#", category: "longform", duration: "8:30" },
    { id: "9", title: "VSL - Curso Online", thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop", videoUrl: "#", category: "vsl", duration: "12:00" },
    { id: "10", title: "VSL - Produto Digital", thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop", videoUrl: "#", category: "vsl", duration: "18:00" },
  ];

  const filteredVideos = videos.filter((v) => v.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-foreground">Meus </span>
            <span className="gradient-text">Trabalhos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma seleção dos projetos mais recentes. Clique para assistir.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredVideos.map((video, index) => (
              <motion.a
                key={video.id}
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="video-card group"
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: hoveredVideo === video.id ? 1.1 : 1 }}
                      className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-primary/30 group-hover:bg-primary transition-colors duration-300"
                    >
                      <Play size={28} fill="white" className="text-white ml-1" />
                    </motion.div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                    {video.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    {video.title}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Nenhum vídeo nesta categoria ainda.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
