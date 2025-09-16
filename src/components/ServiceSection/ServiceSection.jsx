import HeadLine from "../HeadLine/HeadLine";
import { services } from "../../data/app-data";

const ServiceSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-screen-xl mx-auto">
        <HeadLine
          subheading="Services"
          heading="Explore Our Range Of Professional Services Tailored To Meet Your Business Needs"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus, excepturi eos eaque provident iusto sint hic nihil iste architecto temporibus quasi facere aliquam sed in repellendus cupiditate ipsa, quas quae sapiente."
        />

        <div className="w-full lg:max-w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {services.map((service) => (
            <div
              key={service.s_id}
              className="bg-white border border-gray-200 rounded px-6 py-8 text-center flex justify-center items-center flex-col hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
            >
              <service.serviceIcon className="text-4xl md:text-5xl text-blue-600" />
              <p className="text-lg text-gray-600 mt-4">
                {service.serviceDesc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="btn btn-primary">Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
