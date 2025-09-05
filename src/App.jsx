
import Navbar from "./component/Navbar"; // Capital N
import CategoryBar from "./component/CategoryBar";
import Sidebar from "./component/Sidebar";
import Cards from "./component/Cards";
import Product from "./component/Product";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar /> 
      <CategoryBar />
      <Sidebar />
      <Cards />
      <Product />
     
    </div>
  );
};

export default App;
