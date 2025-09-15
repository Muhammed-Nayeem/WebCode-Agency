import { FiArrowRight, FiPlayCircle, FiX } from "react-icons/fi";
import heroImg from "../../assets/banner.png";
import { useState } from "react";

const HeroSection = () => {
  let [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container max-w-screen-xl mx-auto">
        <div className="mx-4 xl:mx-0 flex flex-col gap-8 md:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2 text-center sm:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Creative Web Design For Business
            </h1>
            <p className="text-base text-gray-700 mt-4">
              Join thousands of business already growing with our solutions.
              Let's help you take your business to the next level
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="flex items-center space-x-1 btn btn-primary">
                <span>Get Started</span>
                <FiArrowRight />
              </button>
              <button className="btn btn-outline btn-primary px-8">
                Contact Us
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex lg:justify-end relative">
            <div className="relative group w-full">
              <img
                className="object-contain w-full"
                src={heroImg}
                alt="Hero-Image"
              />
              <button
                onClick={openModal}
                className="absolute inset-0 flex justify-center items-center cursor-pointer group-hover:opacity-75 z-0 transition"
              >
                <FiPlayCircle className="text-5xl text-white hover:text-blue-700 transition" />
              </button>
            </div>
          </div>
          {showModal && (
            <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50">
              <div className="bg-white p-4 rounded-md shadow-md max-w-xl w-full relative">
                <button
                  onClick={closeModal}
                  className="cursor-pointer mb-4 border border-gray-300 rounded-full w-10 h-10 flex justify-center items-center"
                >
                  <FiX />
                </button>
                <iframe
                  className="w-full aspect-video rounded"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/SWHfcJpByF4?si=hof5w7bgED9Mc9PQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
