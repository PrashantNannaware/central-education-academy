import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const CourseSelectionForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Select your stream</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Stream Selection */}
        <div className="space-y-4">
          <RadioGroup defaultValue="foundations" className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medical" id="medical" />
              <Label htmlFor="medical" className="text-lg">Medical</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="engineering" id="engineering" />
              <Label htmlFor="engineering" className="text-lg">Engineering</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="foundations" id="foundations" />
              <Label htmlFor="foundations" className="text-lg">Foundations</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Class Selection */}
          <div className="space-y-2">
            <Label htmlFor="class" className="text-gray-600">Your Class</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select class..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9">Class 9</SelectItem>
                <SelectItem value="10">Class 10</SelectItem>
                <SelectItem value="11">11-Plus</SelectItem>
                <SelectItem value="12">12-Plus</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* State Selection */}
          <div className="space-y-2">
            <Label htmlFor="state" className="text-gray-600">State</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select state..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="goa">Goa</SelectItem>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                <SelectItem value="karnataka">Karnataka</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Center Selection */}
          <div className="space-y-2">
            <Label htmlFor="center" className="text-gray-600">Center</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select center..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="center1">Center 1</SelectItem>
                <SelectItem value="center2">Center 2</SelectItem>
                <SelectItem value="center3">Center 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          APPLY
        </Button>
      </form>
    </div>
  );
};

export default CourseSelectionForm;