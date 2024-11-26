import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-neutral-100">
        <Navigation />
        <Hero />
        <TrustedBy />
        <Features />
        <Footer />
      </div>
    </MainLayout>
  );
};

export default Index;