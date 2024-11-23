import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users } from "lucide-react";

const Hero = () => {
  return (
    <header className="container-padding py-12 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for better text contrast */}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 pt-40 pb-32">
        <motion.div 
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GraduationCap className="w-12 h-12 text-accent-purple" />
          <h1 className="heading-xl text-neutral-100">Expert Guidance for Grades 9-12</h1>
        </motion.div>

        <motion.p 
          className="text-xl text-neutral-200 mb-8"
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
          <div className="flex flex-col items-center p-6 glass-panel rounded-xl">
            <GraduationCap className="w-12 h-12 text-accent-purple mb-4" />
            <h3 className="text-lg font-semibold mb-2">Expert Teachers</h3>
            <p className="text-neutral-600">Qualified and experienced educators</p>
          </div>
          
          <div className="flex flex-col items-center p-6 glass-panel rounded-xl">
            <BookOpen className="w-12 h-12 text-accent-blue mb-4" />
            <h3 className="text-lg font-semibold mb-2">Comprehensive Syllabus</h3>
            <p className="text-neutral-600">Aligned with board requirements</p>
          </div>
          
          <div className="flex flex-col items-center p-6 glass-panel rounded-xl">
            <Users className="w-12 h-12 text-accent-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Small Batch Sizes</h3>
            <p className="text-neutral-600">Personalized attention guaranteed</p>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button 
            className="button-primary flex items-center gap-2 bg-accent-green hover:bg-accent-green/90 transform transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
          <button className="px-6 py-3 border border-neutral-300 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-100 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;