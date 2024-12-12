import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import CourseSelectionForm, { CourseSelectionData } from "../CourseSelectionForm";

const EnrollmentForm = () => {
  const { toast } = useToast();
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [coursePreferences, setCoursePreferences] = useState<CourseSelectionData | null>(null);

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coursePreferences) {
      toast({
        title: "Course Selection Required",
        description: "Please select your course preferences before enrolling.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Enrollment Request Submitted",
      description: "We'll contact you shortly to complete your enrollment.",
      duration: 5000,
    });
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleEnrollSubmit} className="space-y-4">
        <Input
          placeholder="Full Name"
          value={enrollmentData.name}
          onChange={(e) => setEnrollmentData({ ...enrollmentData, name: e.target.value })}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={enrollmentData.email}
          onChange={(e) => setEnrollmentData({ ...enrollmentData, email: e.target.value })}
          required
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          value={enrollmentData.phone}
          onChange={(e) => setEnrollmentData({ ...enrollmentData, phone: e.target.value })}
          required
        />
      </form>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Course Preferences</h3>
        <CourseSelectionForm 
          onSubmit={(data) => setCoursePreferences(data)}
        />
      </div>
    </div>
  );
};

export default EnrollmentForm;