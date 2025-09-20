import { FaCheck } from "react-icons/fa";

const PriceCard = ({ isYearly, pricePlan }) => {
  return (
    <div className="bg-white border border-gray-200 rounded p-8">
      <div className="text-center">
        <h1 className="text-3xl text-gray-700 font-bold">{pricePlan.name}</h1>
        <p className="text-base text-gray-500 mt-2">{pricePlan.subtitle}</p>
      </div>
      <div className="my-4 py-4 flex flex-col justify-center items-center text-center bg-blue-50 rounded">
        <h2 className="text-3xl text-gray-800 font-bold">
          ${isYearly ? pricePlan.yearlyPrice : pricePlan.monthlyPrice}{" "}
          <span className="text-base italic font-normal text-gray-600">
            / {isYearly ? "yearly" : "monthly"}
          </span>
        </h2>
        {isYearly && (
          <p className="text-sm text-gray-600 mt-2">{pricePlan.saves}</p>
        )}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 transition cursor-pointer text-white font-medium rounded-full">
          Choose {pricePlan.name}
        </button>
      </div>
      <ul className="mt-6 mx-auto w-1/2">
        {pricePlan.features.map((feature, index) => (
          <li
            key={index}
            className="mb-2 text-base text-gray-500 flex items-center gap-x-2"
          >
            <FaCheck className="text-blue-600 font-normal" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
