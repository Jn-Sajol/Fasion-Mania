import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/home/Home";
import NavBar from "./routes/navbar/Navbar";
import Shop from "./components/shop/Shop";

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
