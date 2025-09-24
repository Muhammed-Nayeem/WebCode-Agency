import { Link } from "react-router";
import errorIcon from "../assets/rocket-icon.png";

const Error = ({ message = "Page cannot found", code = 404 }) => {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <img className="mx-auto mb-4" src={errorIcon} alt="Error-Image" />
            <h1 className="text-4xl font-bold to-gray-700">{message}</h1>
            <p className="text-[#21272A] md:w-2/5 w-full mx-auto my-4">
              Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
              sit nunc in eros scelerisque sed. Commodo in viverra nunc,
              ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
              pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo
              eleifend ultricies purus iaculis.
            </p>
            <Link
              to="/"
              className="px-4 py-1.5 text-white bg-blue-500 hover:bg-blue-600 cursor-pointer rounded"
            >
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
