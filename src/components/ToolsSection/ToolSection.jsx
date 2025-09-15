import { tools } from "../../data/app-data";
import ToolCard from "./ToolCard";

const ToolSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-screen-xl mx-auto">
        <article className="text-center">
          <span className="uppercase text-base text-blue-600 font-medium">
            The tools you need
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mt-2 capitalize">
            All-in-one Solution for Your Projects
          </h2>
        </article>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {tools.map((tool) => (
            <ToolCard key={tool.t_id}>
              <div className="bg-white shadow flex flex-col justify-center items-center text-center px-5 py-10 rounded hover:shadow-md hover:-translate-y-1 transition cursor-pointer">
                <tool.toolIcon className="text-4xl text-blue-600" />
                <h3 className="text-xl text-gray-700 font-bold mt-3 mb-2">
                  {tool.toolTitle}
                </h3>
                <p className="text-base text-gray-600">{tool.toolDesc}</p>
              </div>
            </ToolCard>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="btn btn-primary px-8">Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default ToolSection;
