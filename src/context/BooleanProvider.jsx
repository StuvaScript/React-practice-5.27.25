import { useState } from "react";
import { BooleanContext } from "./BooleanContext";

export function BooleanProvider({ children }) {
  const [boolean, setBoolean] = useState(false);

  return (
    <BooleanContext.Provider value={{ boolean, setBoolean }}>
      {children}
    </BooleanContext.Provider>
  );
}
