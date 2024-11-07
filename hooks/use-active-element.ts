"use client"
import { useEffect, useState } from "react";

interface ActiveDivState {
    id: string | null; // ID of the active div, or null if none is active
}

interface Options {
    offset: number; // Offset from the top of the viewport in pixels
}

const useActiveDiv = (ids: string[], options: Options): ActiveDivState => {
    const { offset } = options;
    const [activeDiv, setActiveDiv] = useState<string | null>(null);

    useEffect(() => {
        // Locate each target div element
        const elements = ids.map((id) => document.querySelector(`[data-id="${id}"]`));

        // Scroll event handler
        const handleScroll = () => {
            const inViewElements: { id: string; distance: number }[] = [];

            elements.forEach((element) => {
                if (!element) return;

                const divId = element.getAttribute("data-id");
                if (!divId) return;

                const rect = element.getBoundingClientRect();
                const topReached = rect.top <= offset;
                const bottomPassed = rect.bottom < offset;

                if (topReached && !bottomPassed) {
                    const distance = Math.abs(rect.top - offset);
                    inViewElements.push({ id: divId, distance });
                }
            });

            // Activate the div closest to the offset, if any
            if (inViewElements.length > 0) {
                const closestElement = inViewElements.reduce((closest, element) =>
                    element.distance < closest.distance ? element : closest
                );
                setActiveDiv(closestElement.id);
            } else {
                setActiveDiv(null);
            }
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

    return { id: activeDiv };
};

export default useActiveDiv;
