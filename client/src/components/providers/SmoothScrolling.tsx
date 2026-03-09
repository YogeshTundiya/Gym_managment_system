"use client";

import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export const SmoothScrolling = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const pathname = usePathname();

    useGSAP(() => {
        // Clear any lingering ScrollTriggers on route change
        ScrollTrigger.refresh();

        // Globally animate any element with the .st-section class
        const scrollSections = gsap.utils.toArray('.st-section') as HTMLElement[];
        scrollSections.forEach((sec: HTMLElement) => {
            if (!sec) return;
            gsap.from(sec, {
                scrollTrigger: {
                    trigger: sec,
                    start: "top 85%", // Animates when it hits 85% down the viewport
                    toggleActions: "play reverse play reverse", // play on scroll down, reverse on scroll up
                },
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });
    }, { dependencies: [pathname] });

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {children as any}
        </ReactLenis>
    );
};
