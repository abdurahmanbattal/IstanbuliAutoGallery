import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedCarsSection from "@/components/home/FeaturedCarsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FeaturedCarsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
