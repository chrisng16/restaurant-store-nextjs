'use client'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export type Section = {
    id: string;
    threshold?: number;
};

const useActiveSection = (sections: Section[]) => {
    const [activeSection, setActiveSection] = useState<string>("");

    const observers = sections.map(({ id }) => {
        const { ref, inView } = useInView({ rootMargin: "0px 0px -100% 0px", threshold: 0 });

        useEffect(() => {
            if (inView) {
                setActiveSection(id);
            }
        }, [inView, id]);

        return { ref };
    });

    return { activeSection, observers };
};

export default useActiveSection;
