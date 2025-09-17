import HeadLine from "../HeadLine/HeadLine";
import slideImg1 from "../../assets/logos/logo1.png";
import slideImg2 from "../../assets/logos/logo2.png";

const TestimonialSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-screen-xl mx-auto">
        <HeadLine subheading="Clients Story" heading="What Our Clients Says" />

        <div className="mt-12 mx-4 xl:mx-0">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item gap-8 relative w-full">
              <div className="w-full md:w-1/2 bg-gray-100 rounded shadow p-8 text-center flex flex-col justify-center items-center">
                <img
                src={slideImg1}
                alt="slide-one"
                className="w-28 object-contain"
                />
                <p className="text-base italic text-gray-600 leading-normal px-16 mt-2">"Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."</p>
                <div className="flex flex-col justify-center mt-6">
                  <div className="text-2xl font-bold text-blue-700 w-10 h-10 flex justify-center items-center rounded-full bg-blue-200 mx-auto mb-1">J</div>
                  <h3 className="text-xl font-bold text-gray-800">Jhon Doe</h3>
                  <p className="text-base text-gray-600">CEO, TechCorp</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-gray-100 rounded shadow p-8 text-center flex flex-col justify-center items-center">
                <img
                src={slideImg2}
                alt="slide-two"
                className="w-28 object-contain"
                />
                <p className="text-base italic text-gray-600 leading-normal px-16 mt-2">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eum facilis, doloremque possimus maiores beatae quas, rerum cum quaerat, sunt odio ad? Officia sequi amet alias dolor natus at quod facere corrupti."</p>
                <div className="flex flex-col justify-center mt-6">
                  <div className="text-2xl font-bold text-blue-700 w-10 h-10 flex justify-center items-center rounded-full bg-blue-200 mx-auto mb-1">I</div>
                  <h3 className="text-xl font-bold text-gray-800">Indrajit Chandra</h3>
                  <p className="text-base text-gray-600">Developer, InfinitySoft</p>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item gap-8 relative w-full">
              <div className="w-full md:w-1/2 bg-gray-100 rounded shadow p-8 text-center flex flex-col justify-center items-center">
                <img
                src={slideImg1}
                alt="slide-one"
                className="w-28 object-contain"
                />
                <p className="text-base italic text-gray-600 leading-normal px-16 mt-2">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eum facilis, doloremque possimus maiores beatae quas, rerum cum quaerat, sunt odio ad? Officia sequi amet alias dolor natus at quod facere corrupti."</p>
                <div className="flex flex-col justify-center mt-6">
                  <div className="text-2xl font-bold text-blue-700 w-10 h-10 flex justify-center items-center rounded-full bg-blue-200 mx-auto mb-1">P</div>
                  <h3 className="text-xl font-bold text-gray-800">Partha Deb</h3>
                  <p className="text-base text-gray-600">Researcher, ScienceTech</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-gray-100 rounded shadow p-8 text-center flex flex-col justify-center items-center">
                <img
                src={slideImg2}
                alt="slide-two"
                className="w-28 object-contain"
                />
                <p className="text-base italic text-gray-600 leading-normal px-16 mt-2">"Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."</p>
                <div className="flex flex-col justify-center mt-6">
                  <div className="text-2xl font-bold text-blue-700 w-10 h-10 flex justify-center items-center rounded-full bg-blue-200 mx-auto mb-1">M</div>
                  <h3 className="text-xl font-bold text-gray-800">Mohon Chandra</h3>
                  <p className="text-base text-gray-600">UI/UX, AuthLab</p>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item gap-8 relative w-full">
              <div className="w-full md:w-1/2 bg-gray-100 rounded shadow p-8 text-center flex flex-col justify-center items-center">
                <img
                src={slideImg1}
                alt="slide-one"
                className="w-28 object-contain"
                />
                <p className="text-base italic text-gray-600 leading-normal px-16 mt-2">"Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."</p>
                <div className="flex flex-col justify-center mt-6">
                  <div className="text-2xl font-bold text-blue-700 w-10 h-10 flex justify-center items-center rounded-full bg-blue-200 mx-auto mb-1">R</div>
                  <h3 className="text-xl font-bold text-gray-800">Pranab Roy</h3>
                  <p className="text-base text-gray-600">SQA, BdCallingIT</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-gray-100 rounded shadow p-8 text-center flex flex-col justify-center items-center">
                <img
                src={slideImg2}
                alt="slide-two"
                className="w-28 object-contain"
                />
                <p className="text-base italic text-gray-600 leading-normal px-16 mt-2">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eum facilis, doloremque possimus maiores beatae quas, rerum cum quaerat, sunt odio ad? Officia sequi amet alias dolor natus at quod facere corrupti."</p>
                <div className="flex flex-col justify-center mt-6">
                  <div className="text-2xl font-bold text-blue-700 w-10 h-10 flex justify-center items-center rounded-full bg-blue-200 mx-auto mb-1">N</div>
                  <h3 className="text-xl font-bold text-gray-800">M. Nayeem</h3>
                  <p className="text-base text-gray-600">Software Engr., OloyoTech</p>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item gap-8 relative w-full">
              <div className="w-full md:w-1/2 bg-gray-100 rounded shadow p-8 text-center flex flex-col justify-center items-center">
                <img
                src={slideImg1}
                alt="slide-one"
                className="w-28 object-contain"
                />
                <p className="text-base italic text-gray-600 leading-normal px-16 mt-2">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eum facilis, doloremque possimus maiores beatae quas, rerum cum quaerat, sunt odio ad? Officia sequi amet alias dolor natus at quod facere corrupti."</p>
                <div className="flex flex-col justify-center mt-6">
                  <div className="text-2xl font-bold text-blue-700 w-10 h-10 flex justify-center items-center rounded-full bg-blue-200 mx-auto mb-1">J</div>
                  <h3 className="text-xl font-bold text-gray-800">Joydip Paul</h3>
                  <p className="text-base text-gray-600">Web Developer, YoTech</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-gray-100 rounded shadow p-8 text-center flex flex-col justify-center items-center">
                <img
                src={slideImg2}
                alt="slide-two"
                className="w-28 object-contain"
                />
                <p className="text-base italic text-gray-600 leading-normal px-16 mt-2">"Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."</p>
                <div className="flex flex-col justify-center mt-6">
                  <div className="text-2xl font-bold text-blue-700 w-10 h-10 flex justify-center items-center rounded-full bg-blue-200 mx-auto mb-1">K</div>
                  <h3 className="text-xl font-bold text-gray-800">Provakor Konik</h3>
                  <p className="text-base text-gray-600">Android Developer, TechnoLab</p>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
