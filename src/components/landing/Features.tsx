import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Comprehensive Academic Programs",
      description: "Experience world-class education with our diverse range of academic programs designed for student success.",
      points: ["Expert Faculty Members", "Modern Learning Facilities", "Research Opportunities"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      title: "Student Support Services",
      description: "We provide comprehensive support services to ensure every student reaches their full potential.",
      points: ["Academic Counseling", "Career Development", "Student Wellness Programs"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-100 to-white">
      <div className="container-padding">
        <div className="text-center mb-16 animate-fade-up">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            WHY CHOOSE US
          </span>
          <h2 className="heading-lg mt-6 text-secondary">Excellence in Education</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Join a community dedicated to academic excellence and student success.
          </p>
        </div>

        {features.map((feature, index) => (
          <div 
            key={feature.title} 
            className={`flex flex-col md:flex-row gap-12 items-center mb-24 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            } animate-fade-up`}
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-secondary">{feature.title}</h3>
              <p className="text-neutral-600 mb-6">{feature.description}</p>
              <ul className="space-y-4">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-neutral-700">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <button className="button-primary">
                  Apply Now
                </button>
                <button className="px-6 py-3 text-secondary hover:text-primary transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Card className="glass-panel p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border-primary/10 overflow-hidden">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[300px] object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;