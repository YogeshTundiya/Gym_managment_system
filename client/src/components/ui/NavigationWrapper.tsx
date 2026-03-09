"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export const NavigationWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    // Hide navbar and footer on specific pages (dashboard, portal)
    const hideNavAndFooter = pathname?.startsWith('/admin') ||
        pathname?.startsWith('/client') ||
        pathname?.startsWith('/portal');

    return (
        <>
            {!hideNavAndFooter && <Navbar />}
            <div className={!hideNavAndFooter ? "min-h-[calc(100vh-200px)]" : ""}>
                {children}
            </div>
            {!hideNavAndFooter && <Footer />}
        </>
    );
};
