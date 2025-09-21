import HeadLine from "../HeadLine/HeadLine";

const NewsletterSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-screen-xl mx-auto">
        <HeadLine
          subheading="Newsletter"
          heading="Stay Updated With Our Newsletter"
          description="Subscribe to our newsletter to get the latest news, updates, and offers. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar."
        />
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 mx-4 xl:mx-0">
          <button className="px-8 py-2 bg-blue-600 hover:bg-blue-700 transition cursor-pointer text-white font-medium text-base rounded">
            Subscribe Now
          </button>
          <button className="px-8 py-2 text-blue-600 border border-blue-600 hover:bg-blue-600 transition cursor-pointer hover:text-white font-medium text-base rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
