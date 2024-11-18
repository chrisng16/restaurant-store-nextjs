"use client"
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useActiveElement = (ids: string[], offset?: number): string => {
    const [activeDiv, setActiveDiv] = useState<string>("");

    const offsetFromTop = offset || 130

    useEffect(() => {
        // Locate each target div element
        const elements = ids.map((id) => document.querySelector(`[id="${id}"]`));

        // Scroll event handler
        const handleScroll = debounce(() => {
            let inViewElement = "";

            elements.forEach((element) => {
                if (!element) return;

                const divId = element.getAttribute("id");
                if (!divId) return;

                const rect = element.getBoundingClientRect();
                const topReached = rect.top <= offsetFromTop;
                const bottomPassed = rect.bottom <= offsetFromTop + 1;

                if (topReached && !bottomPassed) {
                    inViewElement = divId;
                }
            });
            setActiveDiv(inViewElement);
        }, 15); // Adjust debounce delay as needed

        // Attach scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Initial check
        handleScroll();

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [ids, offsetFromTop]);

    return activeDiv;
};

export default useActiveElement;
