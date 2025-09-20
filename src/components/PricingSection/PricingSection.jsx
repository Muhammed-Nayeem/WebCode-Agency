import { useState } from "react";
import HeadLine from "../HeadLine/HeadLine";
import { pricingPlans } from "../../data/app-data";
import PriceCard from "./PriceCard";

const PricingSection = () => {
  let [isYearly, setIsYearly] = useState(false);

  return (
    <section className="bg-white py-20">
      <div className="container max-w-screen-xl mx-auto">
        <HeadLine
          subheading={"Pricing List"}
          heading={"Choose Your Plan"}
          description={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          }
        />

        <div className="text-center mt-8">
          <label className="inline-flex items-center space-x-2 justify-center">
            <span className="text-lg font-medium text-gray-500">
              {isYearly ? "Yearly Pricing" : "Monthly Pricing"}
            </span>
            <div className="relative cursor-pointer">
              <input
                onClick={() => setIsYearly(!isYearly)}
                type="checkbox"
                className="sr-only"
              />
              <div className="bg-gray-300 w-16 h-8 rounded-full"></div>
              <div
                className={`w-6 h-6 bg-blue-600 rounded-full absolute top-1 left-1 transition-transform duration-200 ${
                  isYearly ? "transform translate-x-8" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 xl:mx-0 mt-8">
          {
            pricingPlans.map((pricePlan) => (
              <PriceCard key={pricePlan.name} isYearly={isYearly} pricePlan={pricePlan} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
