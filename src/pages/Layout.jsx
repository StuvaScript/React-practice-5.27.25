import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

export function Layout() {
  const [activeUser, setActiveUser] = useState("stranger");

  return (
    <>
      <Header activeUser={activeUser} />

      <Outlet context={{ setActiveUser, activeUser }} />
    </>
  );
}
