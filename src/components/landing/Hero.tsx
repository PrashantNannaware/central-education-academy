import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users } from "lucide-react";

const Hero = () => {
  return (
    <header className="container-padding py-12 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513836279014-a89f7a76ae86")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 pt-40 pb-32">
        <motion.h1 
          className="heading-xl mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Expert Guidance for Grades 9-12
        </motion.h1>
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
          <button className="button-primary flex items-center gap-2">
            Enroll Now
          </button>
          <button className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;