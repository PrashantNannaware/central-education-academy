import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface CourseDetailsProps {
  stream: string;
  className?: string;
  center: string;
  state: string;
}

const CourseDetails = ({ stream, className = "", center, state }: CourseDetailsProps) => {
  const { toast } = useToast();

  const getCourseInfo = (stream: string) => {
    switch (stream.toLowerCase()) {
      case "medical":
        return {
          name: "NEET Preparation – Comprehensive Course",
          duration: "2 years",
          fee: "₹1,50,000",
        };
      case "engineering":
        return {
          name: "JEE Main & Advanced – Intensive Course",
          duration: "2 years",
          fee: "₹1,75,000",
        };
      case "foundations":
        return {
          name: "Class 9/10 Foundation Course – Early Preparation",
          duration: "1 year",
          fee: "₹75,000",
        };
      default:
        return {
          name: "Course Not Found",
          duration: "N/A",
          fee: "N/A",
        };
    }
  };

  const handleConfirmAdmission = () => {
    toast({
      title: "Admission Process Initiated",
      description: "Our team will contact you shortly to complete the admission process.",
    });
  };

  return (
    <div className={`space-y-8 ${className}`}>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Your Course Details</h3>
        <p className="text-lg font-semibold">Selected Stream: {stream}</p>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold">Course Name</h4>
        <p>{getCourseInfo(stream).name}</p>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold">Course Highlights</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Personalized Learning: Tailored course modules to match your learning pace</li>
          <li>Experienced Faculty: Learn from industry experts and top educators</li>
          <li>Mock Tests and Analysis: Regular test series to measure progress</li>
          <li>Doubt-Solving Sessions: Dedicated sessions to clear all doubts</li>
          <li>Study Materials: Comprehensive and up-to-date study resources</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold">Batch Details</h4>
        <ul className="space-y-2">
          <li><strong>Start Date:</strong> Next batch starts from 1st June 2024</li>
          <li><strong>Duration:</strong> {getCourseInfo(stream).duration}</li>
          <li><strong>Mode of Learning:</strong> Hybrid (Online + Classroom)</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold">Center Details</h4>
        <ul className="space-y-2">
          <li><strong>Location:</strong> {center}, {state}</li>
          <li><strong>Contact:</strong> +91 1234567890</li>
          <li><strong>Timings:</strong> Weekdays 5 PM - 8 PM, Weekends 9 AM - 1 PM</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold">Fees and Payment Options</h4>
        <ul className="space-y-2">
          <li><strong>Total Course Fee:</strong> {getCourseInfo(stream).fee}</li>
          <li><strong>Installments Available:</strong> Yes</li>
          <li><strong>Scholarships:</strong> Available based on merit</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={handleConfirmAdmission} className="flex-1">
          Confirm Admission
        </Button>
        <Button variant="outline" className="flex-1">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default CourseDetails;