import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-40 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Excel in Your Academic Journey
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 mb-8">
            Expert tutoring in Mathematics, Science, and English. Join our proven pathway to academic success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-accent-purple hover:bg-accent-purple/90 text-white px-8 py-6 text-lg"
              variant="default"
            >
              Start Learning Today
            </Button>
            <Button 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-6 text-lg backdrop-blur-sm"
              variant="default"
            >
              View Course Schedule
            </Button>
          </div>
        </motion.div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32">
          <FeatureBlock
            icon={<GraduationCap className="w-12 h-12" />}
            title="Future Students"
            description="Our unique personality rests on the bedrock values of academic excellence, inclusivity, and social responsibility."
            bgColor="bg-[#003D4C]"
          />
          <FeatureBlock
            icon={<BookOpen className="w-12 h-12" />}
            title="Academic Programs"
            description="Education fosters intellectual inquiry and reflection, personal growth, and a commitment to the world beyond oneself."
            bgColor="bg-[#9B9B27]"
          />
          <FeatureBlock
            icon={<Users className="w-12 h-12" />}
            title="Presidential Search"
            description="Recruiting, selecting, and appointing the ninth College president."
            bgColor="bg-[#2A9FD6]"
          />
          <FeatureBlock
            icon={<MapPin className="w-12 h-12" />}
            title="Virtual Campus Tours"
            description="Take a virtual tour, learn about admission and financial aid, and speak with current students."
            bgColor="bg-[#8B1A1A]"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureBlock = ({ icon, title, description, bgColor }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className={`${bgColor} p-8 text-white hover:scale-105 transition-transform duration-300`}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-neutral-200 text-sm">{description}</p>
  </motion.div>
);

export default Hero;