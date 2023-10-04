import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Shop from "./components/Shop";
import NavBar from "./components/navbar/Navbar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index={true} element={<Home />} />  
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};
export default App;
