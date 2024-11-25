import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>

      <div className="container-padding relative z-10 max-w-4xl mx-auto text-center pt-40 pb-32">
        <motion.h1 
          className="text-white heading-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Expert Guidance for Academic Excellence
        </motion.h1>
        <motion.p 
          className="text-xl text-neutral-100 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering students with quality education in Mathematics, Science, and English
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col items-center p-6 glass-panel rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <GraduationCap className="w-12 h-12 text-accent-purple mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-white">Expert Teachers</h3>
            <p className="text-neutral-200">Qualified and experienced educators</p>
          </div>
          
          <div className="flex flex-col items-center p-6 glass-panel rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <BookOpen className="w-12 h-12 text-accent-blue mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-white">Comprehensive Syllabus</h3>
            <p className="text-neutral-200">Aligned with board requirements</p>
          </div>
          
          <div className="flex flex-col items-center p-6 glass-panel rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <Users className="w-12 h-12 text-accent-green mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-white">Small Batch Sizes</h3>
            <p className="text-neutral-200">Personalized attention guaranteed</p>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="button-primary flex items-center gap-2 bg-accent-purple hover:bg-accent-purple/90">
            Start Learning Today
          </button>
          <button className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
            Explore Courses
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;