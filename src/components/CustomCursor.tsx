"use client";

import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    // Create the outer and inner cursor elements
    const cursorOuter = document.createElement("div");
    cursorOuter.classList.add("cursor-outer");
    document.body.appendChild(cursorOuter);

    const cursorInner = document.createElement("div");
    cursorInner.classList.add("cursor-inner");
    document.body.appendChild(cursorInner);

    // Move the cursor with mouse movements
    const moveCursor = (e: MouseEvent) => {
      cursorOuter.style.left = `${e.pageX}px`;
      cursorOuter.style.top = `${e.pageY}px`;
      cursorInner.style.left = `${e.pageX}px`;
      cursorInner.style.top = `${e.pageY}px`;
    };

    // Handle mouseover event to enlarge the cursor when hovering over interactive elements
    const mouseOverHandler = () => {
      cursorOuter.classList.add("cursor-hover"); // Enlarge outer cursor
      cursorInner.classList.add("cursor-hover-inner"); // Enlarge inner cursor
    };

    // Handle mouseout event to reset cursor size
    const mouseOutHandler = () => {
      cursorOuter.classList.remove("cursor-hover"); // Reset outer cursor
      cursorInner.classList.remove("cursor-hover-inner"); // Reset inner cursor
    };

    // Add event listeners for mouse movement and interactions
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", mouseOverHandler);
    window.addEventListener("mouseout", mouseOutHandler);

    // Cleanup function to remove event listeners and the cursor elements when the component unmounts
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", mouseOverHandler);
      window.removeEventListener("mouseout", mouseOutHandler);
      document.body.removeChild(cursorOuter);
      document.body.removeChild(cursorInner);
    };
  }, []);

  return null;
};

export default CustomCursor;
