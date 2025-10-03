import { Link, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const Navbar = () => {
  let { user, signOutUser } = useContext(AuthContext);
  let navigate = useNavigate();

  const logOut = async() => {
    try {
      await signOutUser();
      alert("User SignOut Successfully!");
      navigate("/login");
    } catch (error) {
      alert(`SignOut Failed! ${error.message}`);
    }
  };

  return (
    <header className="bg-white">
      <div className="container max-w-screen-xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link className="text-base font-medium text-gray-700" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-700"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-700"
                    to="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <details>
                    <summary className="text-base font-medium text-gray-700">
                      Categories
                    </summary>
                    <ul className="p-2">
                      <li>
                        <Link to="/">Web Design</Link>
                      </li>
                      <li>
                        <Link to="/">App Development</Link>
                      </li>
                      <li>
                        <Link to="/">UI/UX Design</Link>
                      </li>
                      <li>
                        <Link to="/">Web Development</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <a className="inline-flex items-center space-x-2">
              <img src={logo} alt="Logo" />
              <span className="text-xl font-bold text-gray-700">WebCode</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex z-50">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link className="text-base font-medium text-gray-700" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-700"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-700"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <details>
                  <summary className="text-base font-medium text-gray-700">
                    Categories
                  </summary>
                  <ul className="p-2">
                    <li>
                      <Link to="/">Web Design</Link>
                    </li>
                    <li>
                      <Link to="/">App Development</Link>
                    </li>
                    <li>
                      <Link to="/">UI/UX Design</Link>
                    </li>
                    <li>
                      <Link to="/">Web Development</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-3">
            {user ? (
              <>
                <Link
                  className="btn btn-outline btn-primary hidden sm:flex"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
                <button onClick={logOut} className="btn btn-primary">SignOut</button>
              </>
            ) : (
              <>
                <Link
                  className="btn btn-outline btn-primary hidden sm:flex"
                  to="/login"
                >
                  Log In
                </Link>
                <Link to="/price" className="btn btn-primary">
                  Start Free Trial
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
