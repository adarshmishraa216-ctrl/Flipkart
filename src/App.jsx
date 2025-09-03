
import Navbar from "./component/Navbar"; // Capital N
import CategoryBar from "./component/CategoryBar";
import Sidebar from "./component/Sidebar";
import Description from "./component/Description";
import Cards from "./component/Cards";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar /> {/* Capital N */}
      <CategoryBar />
      <Sidebar />
      <Description />
      <Cards />
    </div>
  );
};

export default App;
