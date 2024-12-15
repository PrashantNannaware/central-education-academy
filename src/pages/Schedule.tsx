import { useState } from "react";
import { Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

const Schedule = () => {
  const { toast } = useToast();
  const [courseType, setCourseType] = useState<string>("all");
  const [classType, setClassType] = useState<string>("all");
  const [location, setLocation] = useState<string>("all");

  const scheduleData = [
    {
      course: "Medical",
      type: "offline",
      location: "Delhi",
      timing: "9:00 AM - 11:00 AM",
      days: "Mon, Wed, Fri",
      batch: "NEET Regular",
    },
    {
      course: "Engineering",
      type: "online",
      location: "Online",
      timing: "2:00 PM - 4:00 PM",
      days: "Tue, Thu, Sat",
      batch: "JEE Advanced",
    },
    {
      course: "Foundations",
      type: "offline",
      location: "Mumbai",
      timing: "4:00 PM - 6:00 PM",
      days: "Mon, Wed, Fri",
      batch: "Class 11 Regular",
    },
  ];

  const filteredSchedule = scheduleData.filter((schedule) => {
    return (
      (courseType === "all" || schedule.course === courseType) &&
      (classType === "all" || schedule.type === classType) &&
      (location === "all" || schedule.location === location)
    );
  });

  const handleDownload = () => {
    // In a real application, this would generate and download a PDF
    toast({
      title: "Schedule Downloaded",
      description: "The course schedule has been downloaded successfully.",
    });
  };

  const handleContactCounselor = () => {
    toast({
      title: "Request Sent",
      description: "A counselor will contact you shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Course Schedule</h1>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Select onValueChange={setCourseType} defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select Course Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              <SelectItem value="Medical">Medical</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Foundations">Foundations</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={setClassType} defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select Class Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="offline">Offline</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={setLocation} defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
              <SelectItem value="Mumbai">Mumbai</SelectItem>
              <SelectItem value="Online">Online</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Schedule Table */}
        <ScrollArea className="h-[400px] rounded-md border">
          <div className="p-4">
            {filteredSchedule.map((schedule, index) => (
              <div
                key={index}
                className="mb-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{schedule.batch}</h3>
                    <p className="text-sm text-neutral-600">
                      Course: {schedule.course}
                    </p>
                    <p className="text-sm text-neutral-600">
                      Type: {schedule.type}
                    </p>
                    <p className="text-sm text-neutral-600">
                      Location: {schedule.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{schedule.timing}</p>
                    <p className="text-sm text-neutral-600">{schedule.days}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Actions */}
        <div className="flex justify-center gap-4 mt-8">
          <Button
            onClick={handleDownload}
            className="bg-primary hover:bg-primary/90"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Schedule
          </Button>
          <Button
            onClick={handleContactCounselor}
            className="bg-secondary hover:bg-secondary/90"
          >
            <Phone className="mr-2 h-4 w-4" />
            Contact Counselor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;