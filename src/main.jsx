import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import firebaseConfig from "../Firebase.config.js";
import "./index.css";
import App from "./App.jsx";
import { store } from './Slice/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
