"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export const NavigationWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    // Hide navbar and footer on dashboard and portal pages
    const isDashboardOrPortal = pathname?.startsWith('/admin') ||
        pathname?.startsWith('/client') ||
        pathname?.startsWith('/portal');

    return (
        <>
            {!isDashboardOrPortal && <Navbar />}
            <div className={!isDashboardOrPortal ? "min-h-[calc(100vh-200px)]" : ""}>
                {children}
            </div>
            {!isDashboardOrPortal && <Footer />}
        </>
    );
};
