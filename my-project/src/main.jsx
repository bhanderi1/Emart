import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./Product_Data/Store.jsx";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Auth0Provider
    domain="dev-rrbce62746tt0wot.us.auth0.com"
    clientId="w8zUrsh45KSbsoRIkJJ2vLK1TQUoP5Cj"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
