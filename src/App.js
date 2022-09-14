import "./App.css";
import Home from "./routes/home/Home";
import { Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./routes/shop/Shop";
import { Contact } from "./routes/contact/Contact";
import SignIn from "./routes/signIn/SignIn";
import { Fragment } from "react";







const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<SignIn />}/>
        
        </Route>
       
      </Routes>
     
    </Fragment>
  );
};

export default App;
