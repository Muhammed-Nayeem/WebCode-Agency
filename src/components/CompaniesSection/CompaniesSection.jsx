import HeadLine from "../HeadLine/HeadLine";
import { companies } from "../../data/app-data";

const CompaniesSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container max-w-screen-xl mx-auto">
        <HeadLine
          subheading="Our trusted partners"
          heading="Companies we have worked with"
          description="We have partnered with some of the most inventing and leading companies to bring the best solutions to you"
        />

        <div className="mt-8 p-8 relative overflow-hidden border-y-[1px] border-y-gray-200">
          <div className="flex justify-around items-center space-x-10 md:space-x-48 animate-screen">
            {companies.map((company) => (
              <div
                key={company.c_id}
                className="w-28 h-28 bg-white flex justify-center items-center rounded-full hover:scale-110 hover:shadow-md transition cursor-pointer group"
              >
                <company.companyIcon
                  className="text-4xl md:text-5xl text-blue-600 group-hover:scale-125 transition cursor-pointer"
                  title={company.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
