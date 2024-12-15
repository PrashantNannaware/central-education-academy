import { useState } from "react";
import { motion } from "framer-motion";
import CourseSelectionForm from "@/components/landing/CourseSelectionForm";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Enroll = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);

  const handleEnrollment = () => {
    toast({
      title: "Enrollment Request Received!",
      description: "Our counselor will contact you shortly to complete your enrollment.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Begin Your Journey to Success</h1>
          <p className="text-lg text-gray-600">Choose your path and take the first step towards excellence</p>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Enrollment Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600">✓</span>
              </div>
              <div>
                <h3 className="font-medium">Early Bird Discount</h3>
                <p className="text-gray-600">Get up to 25% off on early enrollments</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600">✓</span>
              </div>
              <div>
                <h3 className="font-medium">Free Demo Classes</h3>
                <p className="text-gray-600">Try before you commit with our demo sessions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600">✓</span>
              </div>
              <div>
                <h3 className="font-medium">Study Material</h3>
                <p className="text-gray-600">Comprehensive study materials included</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                <span className="text-yellow-600">✓</span>
              </div>
              <div>
                <h3 className="font-medium">Flexible Batches</h3>
                <p className="text-gray-600">Choose from multiple batch timings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Selection Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Select Your Course</h2>
          <CourseSelectionForm onSubmit={handleEnrollment} />
        </div>
      </motion.div>
    </div>
  );
};

export default Enroll;