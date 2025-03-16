import { useEffect } from "react";

const DisableInspect = () => {
  useEffect(() => {
    // Disable Right Click
    document.addEventListener("contextmenu", (event) => event.preventDefault());

    // Disable DevTools Shortcuts
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) || 
        (event.ctrlKey && event.key === "U")
      ) {
        event.preventDefault();
      }
    });
  }, []);

  return null;
};

export default DisableInspect;
