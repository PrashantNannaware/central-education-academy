import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const CLASS_OPTIONS = ["Class 9", "Class 10", "11-Plus", "12-Plus"];

export interface CourseSelectionData {
  stream: string;
  class: string;
  state: string;
  center: string;
}

interface CourseSelectionFormProps {
  onSubmit?: (data: CourseSelectionData) => void;
  className?: string;
}

const CourseSelectionForm = ({ onSubmit, className = "" }: CourseSelectionFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<CourseSelectionData>({
    stream: "",
    class: "",
    state: "",
    center: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.stream || !formData.class || !formData.state || !formData.center) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to proceed.",
        variant: "destructive",
      });
      return;
    }
    
    if (onSubmit) {
      onSubmit(formData);
    }
    
    toast({
      title: "Course preferences saved!",
      description: "We'll show you courses based on your selection.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="space-y-4">
        <h4 className="font-semibold text-lg">Select Your Stream</h4>
        <RadioGroup
          onValueChange={(value) => setFormData({ ...formData, stream: value })}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medical" id="medical" />
            <Label htmlFor="medical" className="cursor-pointer">
              Medical
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="engineering" id="engineering" />
            <Label htmlFor="engineering" className="cursor-pointer">
              Engineering
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="foundations" id="foundations" />
            <Label htmlFor="foundations" className="cursor-pointer">
              Foundations
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-lg">Your Class</h4>
        <Select onValueChange={(value) => setFormData({ ...formData, class: value })}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your class" />
          </SelectTrigger>
          <SelectContent>
            {CLASS_OPTIONS.map((option) => (
              <SelectItem key={option} value={option.toLowerCase()}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-lg">Location Preferences</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select onValueChange={(value) => setFormData({ ...formData, state: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              {STATES.map((state) => (
                <SelectItem key={state} value={state.toLowerCase()}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setFormData({ ...formData, center: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select center" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="center1">Center 1</SelectItem>
              <SelectItem value="center2">Center 2</SelectItem>
              <SelectItem value="center3">Center 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Apply
      </Button>
    </form>
  );
};

export default CourseSelectionForm;