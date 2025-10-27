import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BoxForm from "./views/BoxForm";
import BoxList from "./views/BoxList";
import { BoxProvider } from "./state/BoxContext";

export default function App() {
  const [route, setRoute] = useState("addBox");

  return (
    <BoxProvider>
      <Navbar route={route} setRoute={setRoute} />
      <main className="container">
        {route === "addBox" && <BoxForm />}
        {route === "boxes" && <BoxList />}
      </main>
    </BoxProvider>
  );
}
