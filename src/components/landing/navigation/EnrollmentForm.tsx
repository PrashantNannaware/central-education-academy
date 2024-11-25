import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const EnrollmentForm = () => {
  const { toast } = useToast();
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enrollment Request Submitted",
      description: "We'll contact you shortly to complete your enrollment.",
      duration: 5000,
    });
  };

  return (
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
      <Input
        placeholder="Preferred Course"
        value={enrollmentData.course}
        onChange={(e) => setEnrollmentData({ ...enrollmentData, course: e.target.value })}
        required
      />
      <Button type="submit" className="w-full">Submit Enrollment</Button>
    </form>
  );
};

export default EnrollmentForm;