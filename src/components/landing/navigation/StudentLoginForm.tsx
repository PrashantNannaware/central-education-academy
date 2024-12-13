import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Lock, Mail } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ForgotPasswordForm from "./ForgotPasswordForm";
import CreateAccountForm from "./CreateAccountForm";

const StudentLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Login Attempted",
      description: "Student login functionality will be available soon.",
      duration: 3000,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pt-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="email"
            type="email"
            placeholder="student@example.com"
            className="pl-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            className="pl-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              type="button"
              variant="link"
              className="text-sm text-primary hover:text-primary/90"
            >
              Forgot password?
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[95vh] p-6">
            <DrawerHeader>
              <DrawerTitle className="text-2xl font-bold">Reset Password</DrawerTitle>
            </DrawerHeader>
            <div className="overflow-y-auto max-h-[calc(95vh-100px)]">
              <ForgotPasswordForm />
            </div>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger asChild>
            <Button
              type="button"
              variant="link"
              className="text-sm text-primary hover:text-primary/90"
            >
              Create account
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[95vh] p-6">
            <DrawerHeader>
              <DrawerTitle className="text-2xl font-bold">Create New Account</DrawerTitle>
            </DrawerHeader>
            <div className="overflow-y-auto max-h-[calc(95vh-100px)]">
              <CreateAccountForm />
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
};

export default StudentLoginForm;