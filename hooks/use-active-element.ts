"use client"
import { useEffect, useState } from "react";


interface Options {
    offset: number; // Offset from the top of the viewport in pixels
}

const useActiveDiv = (ids: string[], options: Options): string => {
    const { offset } = options;
    const [activeDiv, setActiveDiv] = useState<string>("");

    useEffect(() => {
        // Locate each target div element
        const elements = ids.map((id) => document.querySelector(`[id="${id}"]`));

        // Scroll event handler
        const handleScroll = () => {
            let inViewElement: string = "";

            elements.forEach((element) => {
                if (!element) return;

                const divId = element.getAttribute("id");
                if (!divId) return;

                const rect = element.getBoundingClientRect();
                const topReached = rect.top <= offset;
                const bottomPassed = rect.bottom <= offset;

                if (topReached && !bottomPassed) {
                    inViewElement = divId;
                }
            });
            setActiveDiv(inViewElement)
        };

        // Attach scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Initial check
        handleScroll();

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [ids, offset]);

    return activeDiv;
};

export default useActiveDiv;
