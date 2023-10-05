import { Route, Routes } from "react-router-dom";
import Shop from "./components/shop/Shop";
import NavBar from "./routes/navbar/Navbar";
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index={true} element={<Home />} />  
        <Route path="shop" element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;
