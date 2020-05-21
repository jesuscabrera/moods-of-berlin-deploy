import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import axios from "axios";

// Get logged in user and pass it as a prop to <App.js />
axios
  .get("/api/auth/loggedin")
  .then((response) => {
    const user = response.data;
    ReactDOM.render(
      <BrowserRouter>
        <App user={user} />
      </BrowserRouter>,
      document.getElementById("root")
    );
  })
  .catch((err) => {
    console.log(err);
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
