
import Navbar from "./component/Navbar"; // Capital N
import CategoryBar from "./component/CategoryBar";
import Sidebar from "./component/Sidebar";
import Cards from "./component/Cards";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar /> {/* Capital N */}
      <CategoryBar />
      <Sidebar />
      <Cards />
    </div>
  );
};

export default App;
