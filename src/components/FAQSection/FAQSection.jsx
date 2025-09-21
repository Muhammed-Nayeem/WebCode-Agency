import HeadLine from "../HeadLine/HeadLine";
import { faqs } from "../../data/app-data";
import { useState } from "react";

const FAQSection = () => {
  let [expendedFAQ, setExpendedFAQ] = useState(null);

  const toggler = (id) => {
    if (expendedFAQ === id) {
      setExpendedFAQ(null);
    } else {
      setExpendedFAQ(id);
    }
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container max-w-screen-xl mx-auto">
        <HeadLine subheading="FAQs" heading="Frequently Asked Questions" />

        <div className="flex flex-col gap-y-4 mt-10 w-full md:w-4/5 mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-400 rounded cursor-pointer"
            >
              <div
                onClick={() => toggler(faq.id)}
                className="bg-white p-4 rounded transition duration-200 hover:bg-gray-100 flex justify-between items-center"
              >
                <h1 className="text-lg text-gray-700 font-bold">
                  {faq.question}?
                </h1>
                <span
                  className={`text-lg font-bold text-gray-700 transition duration-200 ${
                    expendedFAQ === faq.id ? "rotate-180" : ""
                  }`}
                >
                  {expendedFAQ === faq.id ? "-" : "+"}
                </span>
              </div>
              {expendedFAQ === faq.id && (
                <div className="p-4 rounded bg-white">
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
