import BlogSection from "../components/BlogSection/BlogSection";
import CompaniesSection from "../components/CompaniesSection/CompaniesSection";
import FAQSection from "../components/FAQSection/FAQSection";
import HeroSection from "../components/HeroSection/HeroSection";
import NewsletterSection from "../components/NewsletterSection/NewsletterSection";
import PricingSection from "../components/PricingSection/PricingSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import TeamMemberSection from "../components/TeamMemberSection/TeamMemberSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import ToolSection from "../components/ToolsSection/ToolSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ToolSection />
      <CompaniesSection />
      <ServiceSection />
      <TestimonialSection />
      <BlogSection />
      <TeamMemberSection />
      <PricingSection />
      <FAQSection />
      <NewsletterSection />
    </>
  );
};

export default Home;
