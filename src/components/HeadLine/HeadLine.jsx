const HeadLine = ({ subheading, heading, description }) => {
  return (
    <article className="text-center">
      <span className="uppercase text-base text-blue-600 font-medium">{subheading}</span>
      <h2 className="w-full md:max-w-2/3 mx-auto leading-snug text-3xl md:text-4xl font-bold text-gray-700 mt-2 capitalize">{heading}</h2>
      {description && <p className="w-full md:max-w-2/3 mx-auto text-base text-gray-600 mt-3">{description}</p>}
    </article>
  );
};

export default HeadLine;
