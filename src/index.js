import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter  } from "react-router-dom";
import App from "./App";
import { CommerceProvider } from "./Context/CommerceContext";
import { makeServer } from "./server";
import { APIprovider } from "./Components/APIcontext";
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>   
    <AuthProvider>
      <CommerceProvider>
        <CartProvider>
          <APIprovider>
          <App />
          </APIprovider>
        </CartProvider>
      </CommerceProvider>
    </AuthProvider> 
    </BrowserRouter>
  
    
  </React.StrictMode>,
  document.getElementById("root")
);