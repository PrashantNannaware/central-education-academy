import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, MapPin } from "lucide-react";
import CourseSelectionForm from "./CourseSelectionForm";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1439337153520-7082a56a81f4')",
        }}
      >
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-primary/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-40 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Shape Your Future with Excellence
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Join our community of ambitious learners and unlock your potential through world-class education and guidance.
          </p>
        </motion.div>

        {/* Course Selection Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <CourseSelectionForm />
        </motion.div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <FeatureBlock
            icon={<GraduationCap className="w-12 h-12" />}
            title="Future Students"
            description="Our unique personality rests on the bedrock values of academic excellence, inclusivity, and social responsibility."
            bgColor="bg-[#003D4C]/90"
          />
          <FeatureBlock
            icon={<BookOpen className="w-12 h-12" />}
            title="Academic Programs"
            description="Education fosters intellectual inquiry and reflection, personal growth, and a commitment to the world beyond oneself."
            bgColor="bg-[#9B9B27]/90"
          />
          <FeatureBlock
            icon={<Users className="w-12 h-12" />}
            title="Presidential Search"
            description="Recruiting, selecting, and appointing the ninth College president."
            bgColor="bg-[#2A9FD6]/90"
          />
          <FeatureBlock
            icon={<MapPin className="w-12 h-12" />}
            title="Virtual Campus Tours"
            description="Take a virtual tour, learn about admission and financial aid, and speak with current students."
            bgColor="bg-[#8B1A1A]/90"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureBlock = ({
  icon,
  title,
  description,
  bgColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`${bgColor} backdrop-blur-sm p-8 text-white hover:scale-105 transition-transform duration-300 rounded-xl border border-white/10`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-100">{description}</p>
    </motion.div>
  );
};

export default Hero;