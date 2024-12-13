import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, BookOpen, Award, Users, Monitor } from "lucide-react";

const Courses = () => {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">Our Courses</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Achieve academic excellence and secure your dream career with our meticulously designed courses. 
            From NEET and JEE preparation to foundation building, we ensure every student is empowered with 
            knowledge and confidence to excel.
          </p>
        </div>

        {/* Course Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {/* Medical Entrance */}
          <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Medical Entrance Courses</h3>
                <p className="text-neutral-600 text-sm">NEET, AIIMS, and More</p>
              </div>
            </div>
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                <h4 className="font-medium">Courses We Offer:</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span>NEET Regular Program</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span>NEET Crash Course</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span>NEET Repeater Batch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span>AIIMS Excellence Program</span>
                  </li>
                </ul>
                <h4 className="font-medium mt-4">Key Features:</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Comprehensive study material</li>
                  <li>• Regular All-India Mock Exams</li>
                  <li>• Personalized mentoring</li>
                </ul>
              </div>
            </ScrollArea>
          </div>

          {/* Engineering Entrance */}
          <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Engineering Entrance Courses</h3>
                <p className="text-neutral-600 text-sm">JEE Main & Advanced</p>
              </div>
            </div>
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                <h4 className="font-medium">Courses We Offer:</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-secondary" />
                    <span>JEE Main & Advanced Regular Batch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-secondary" />
                    <span>JEE Crash Course</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-secondary" />
                    <span>JEE Repeater Batch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-secondary" />
                    <span>Rank Booster Batch</span>
                  </li>
                </ul>
                <h4 className="font-medium mt-4">Key Features:</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Expert faculty in Physics, Chemistry, and Mathematics</li>
                  <li>• Live doubt-solving sessions</li>
                  <li>• Rigorous test series</li>
                </ul>
              </div>
            </ScrollArea>
          </div>

          {/* Foundation Courses */}
          <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-accent-green/10 rounded-lg">
                <Users className="w-6 h-6 text-accent-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Foundation Courses</h3>
                <p className="text-neutral-600 text-sm">Class 8 to 10</p>
              </div>
            </div>
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                <h4 className="font-medium">Courses We Offer:</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accent-green" />
                    <span>NTSE Preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accent-green" />
                    <span>Olympiad Training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accent-green" />
                    <span>School Excellence Program</span>
                  </li>
                </ul>
                <h4 className="font-medium mt-4">Key Features:</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Early introduction to competitive concepts</li>
                  <li>• Regular assessments and feedback</li>
                  <li>• Balanced academic approach</li>
                </ul>
              </div>
            </ScrollArea>
          </div>

          {/* Hybrid & Online Learning */}
          <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-accent-blue/10 rounded-lg">
                <Monitor className="w-6 h-6 text-accent-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Hybrid & Online Learning</h3>
                <p className="text-neutral-600 text-sm">Flexible Learning Options</p>
              </div>
            </div>
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                <h4 className="font-medium">Courses We Offer:</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accent-blue" />
                    <span>Live Online Classes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accent-blue" />
                    <span>Hybrid Learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-accent-blue" />
                    <span>Self-paced Digital Courses</span>
                  </li>
                </ul>
                <h4 className="font-medium mt-4">Key Features:</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Access to recorded sessions</li>
                  <li>• Interactive quizzes</li>
                  <li>• Online test series</li>
                </ul>
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Why Choose Us & CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-4">
              <h4 className="font-semibold mb-2">Proven Track Record</h4>
              <p className="text-neutral-600 text-sm">Success in NEET and JEE</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold mb-2">Expert Faculty</h4>
              <p className="text-neutral-600 text-sm">Years of coaching experience</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold mb-2">Personal Mentoring</h4>
              <p className="text-neutral-600 text-sm">Individual attention guaranteed</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold mb-2">Comprehensive Material</h4>
              <p className="text-neutral-600 text-sm">Complete study resources</p>
            </div>
          </div>
          <Button className="button-primary">Get Started Today!</Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;