const fs = require('fs');
const filepath = '/home/yogesh/Documents/myproject/gym_managment_system/client/src/app/register/page.tsx';
let content = fs.readFileSync(filepath, 'utf8');

const newLayout = `import { LeadGenSection } from "@/components/sections/LeadGenSection";
import { WaiverForm } from "@/components/forms/WaiverForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Register() {
    return (
        <main className="min-h-screen bg-[#f8fafc] flex">
            {/* Left Side: Modern Image Panel */}
            <div className="hidden lg:flex lg:w-1/2 relative">
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop")' }}
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent"></div>
                <div className="absolute bottom-16 left-12 right-12 z-10 text-white drop-shadow-lg">
                    <span className="inline-block px-4 py-1.5 bg-[#CCA028] text-[#0F2E23] text-xs font-bold tracking-widest rounded-full mb-6 uppercase">
                        FITZONE Sanctuary
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
                        Push Your Boundaries.
                    </h1>
                    <p className="text-gray-200 text-lg max-w-lg">
                        Join an exclusive community of athletes committed to peak performance. Elevate your training in our world-class facilities.
                    </p>
                </div>
            </div>

            {/* Right Side: Form Content scrollable */}
            <div className="w-full lg:w-1/2 h-screen overflow-y-auto px-6 py-12 lg:px-12 bg-white relative">
                <div className="max-w-xl mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#0F2E23] font-semibold transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <div className="text-center lg:text-left mb-12">
                        <h2 className="text-3xl font-bold text-[#121c22] mb-3">
                            Start Your Journey Today
                        </h2>
                        <p className="text-[#64748b] text-base">
                            Complete your registration and health waiver to get started. We're excited to have you join our community!
                        </p>
                    </div>

                    <div className="space-y-12">
                        <LeadGenSection />
                        <hr className="border-gray-100" />
                        <WaiverForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
`;

fs.writeFileSync(filepath, newLayout, 'utf8');
console.log("Updated register layout successfully!");
