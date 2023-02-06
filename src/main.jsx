import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import firebaseconfig from "../firebaseconfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseAppProvider firebaseConfig={firebaseconfig}>
        <Suspense fallback={<p>Cargando...</p>}>
          <App />
        </Suspense>
      </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
