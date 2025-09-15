import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default App;
