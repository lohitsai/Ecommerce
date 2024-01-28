import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PayPalScriptProvider
      options={{
        clientId:
          "AaDvkAlMLQh_TwfSxKJIgTKNHkx0VMAWZL4kehn5MekmqqqbviDwcu9KOXXMaUG8D4PvKnORKFpXP2gt",
        components: "buttons",
        currency: "USD",
        intent: "capture",
      }}
    >
      <App />
    </PayPalScriptProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
