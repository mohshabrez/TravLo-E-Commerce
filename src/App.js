import "./App.css";
import { HomePage } from "./Pages/Home/HomePage";
import { ProductPage } from "./Pages/Product/ProductPage";
import { RootLayout } from "./Pages/Home/RootLayout";
import {Routes, Route} from "react-router-dom"
import { SearchBar } from "./Pages/Search/SearchBar";
import {CartPage} from "./Pages/Cart/CartPage"
import { Wishlist } from "./Pages/Wish/Wishlist";
import { ProductDetails } from "./Pages/Product/ProductDetails";
import { LoginPage } from "./Pages/Login/LoginPage";
import { RequiresAuth } from "./Components/RequiresAuth";
import { SignUp } from "./Pages/SignUp/SignUp";
import { CheckBox } from "./Pages/Cart/CheckBox";
import { OrderSummary } from "./Pages/Cart/orderSummary";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<RootLayout/>}/>
        <Route index element={<HomePage />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="ProductPage" element={<ProductPage/>}/>
          <Route path="SearchBar" element={<SearchBar/>}/>
          <Route path="CartPage" element={<RequiresAuth><CartPage/></RequiresAuth>}/>
          <Route path="Wishlist" element={<RequiresAuth><Wishlist/></RequiresAuth>}/>
          <Route path="productDetails/:productId" element={<ProductDetails/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="SignUp" element={<SignUp/>}/>
          <Route path="checkbox" element={<CheckBox/>}/>  
          <Route path="OrderSummary" element={<OrderSummary/>}/>
      </Routes>
      <ToastContainer position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
    </div>
     
  );
}

export default App;