import CompaniesSection from "../components/CompaniesSection/CompaniesSection";
import HeroSection from "../components/HeroSection/HeroSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ToolSection from "../components/ToolsSection/ToolSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ToolSection />
      <CompaniesSection />
      <ServiceSection />
    </>
  );
};

export default Home;
