import { motion } from "framer-motion";
import { Compass, BookOpen, GraduationCap, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1439337153520-7082a56a81f4')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-primary/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
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
          <p className="text-xl md:text-2xl text-white font-medium mb-8">
            Expert tutoring in Mathematics, Science, and English. Join our proven pathway to academic success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    onClick={() => navigate('/enroll')}
                    className="group relative bg-[#0FA0CE] hover:bg-[#0EA5E9] text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 flex items-center gap-2 font-semibold"
                  >
                    <GraduationCap className="w-5 h-5 text-white" />
                    Enroll Now for Success
                    <span className="absolute -bottom-8 left-0 w-full text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Take the first step towards NEET/JEE success
                    </span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-neutral-800 font-medium">Limited seats available! Early enrollment discounts apply</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    onClick={() => navigate('/schedule')}
                    className="group relative bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 flex items-center gap-2 font-semibold backdrop-blur-sm"
                  >
                    <Calendar className="w-5 h-5 text-white" />
                    Explore Batch Timings
                    <span className="absolute -bottom-8 left-0 w-full text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Book your slot today
                    </span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-neutral-800 font-medium">Find the perfect batch that fits your schedule</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </motion.div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32">
          <FeatureBlock
            icon={<Compass className="w-12 h-12 text-white" />}
            title="Explore Your Academic Journey"
            description="Discover a range of courses tailored to help you excel in competitive exams like NEET and JEE. Start your journey with us to achieve academic excellence."
            bgColor="bg-[#003D4C]/90"
          />
          <FeatureBlock
            icon={<BookOpen className="w-12 h-12 text-white" />}
            title="Our Course Offerings"
            description="From Medical and Engineering entrance exams to foundational classes, explore our programs designed to shape the future of young achievers."
            bgColor="bg-[#9B9B27]/90"
          />
          <FeatureBlock
            icon={<GraduationCap className="w-12 h-12 text-white" />}
            title="Meet Our Expert Faculty"
            description="Learn from the best! Our experienced faculty members provide guidance, mentorship, and insights to help you excel in your chosen field."
            bgColor="bg-[#2A9FD6]/90"
          />
          <FeatureBlock
            icon={<Trophy className="w-12 h-12 text-white" />}
            title="Student Success Stories"
            description="Hear from our top achievers and learn how they secured admissions into prestigious medical and engineering colleges through our programs."
            bgColor="bg-[#8B1A1A]/90"
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
    className={`${bgColor} backdrop-blur-sm p-8 hover:scale-105 transition-transform duration-300 rounded-xl border border-white/10`}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-white tracking-wide">{title}</h3>
    <p className="text-white text-sm leading-relaxed font-medium">{description}</p>
  </motion.div>
);

export default Hero;