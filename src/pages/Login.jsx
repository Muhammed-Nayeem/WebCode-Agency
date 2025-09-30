import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  return (
    <section className="bg-gray-100 py-14">
      <div className="container max-w-screen-xl mx-auto">
        <div className="mx-4 xl:mx-0">
          <div className="w-full md:max-w-1/3 mx-auto bg-white px-8 py-12 rounded shadow">
            <h2 className="text-2xl text-gray-800 font-bold text-center">
              Please Login First!
            </h2>
            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium text-gray-800">
                  Email:{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium text-gray-800">
                  Password:{" "}
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-blue-500 focus:border-transparent"
                />
              </div>
              <input
                className="bg-blue-600 py-1.5 rounded text-white text-base hover:bg-blue-700 cursor-pointer mt-2"
                type="submit"
                value="LogIn"
              />
            </form>
            <div className="flex flex-col mt-6">
              <p className="text-center text-base text-gray-600">
                Or SignIn with
              </p>
              <div className="flex flex-col sm:flex-row justify-between mt-6">
                <button className="px-3 py-1.5 flex justify-center items-center gap-2 text-base text-white bg-blue-600 hover:bg-blue-700 cursor-pointer rounded">
                  <FaFacebook /> <span>Facebook</span>
                </button>
                <button className="px-3 py-1.5 flex justify-center items-center gap-2 text-base text-white bg-orange-600 hover:bg-orange-700 cursor-pointer rounded">
                  <FaGoogle /> <span>Google</span>
                </button>
                <button className="px-3 py-1.5 flex justify-center items-center gap-2 text-base text-white bg-gray-900 hover:bg-gray-950 cursor-pointer rounded">
                  <FaGithub /> <span>GitHub</span>
                </button>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-base text-gray-600">Don't have an account? Please <Link to="/register" className="text-blue-600 text-lg hover:underline">SignUp</Link> here!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
