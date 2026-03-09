import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full bg-background-card border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-[#CCA028] rounded-lg flex items-center justify-center text-[#0F2E23]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </div>
                        <span className="font-serif text-xl font-bold text-[#111827] tracking-tight">FITZONE</span>
                    </div>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                        The world&apos;s premier fitness destination for those who demand excellence in every facet of their training and recovery.
                    </p>
                    <div className="flex gap-4 mt-6">
                        {/* Social mock icons */}
                        <div className="w-8 h-8 rounded-full bg-[#FAFAF8] flex items-center justify-center text-[#6B7280] hover:text-[#0F2E23] hover:bg-[#EAE8E2] transition-colors cursor-pointer">
                            in
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#FAFAF8] flex items-center justify-center text-[#6B7280] hover:text-[#0F2E23] hover:bg-[#EAE8E2] transition-colors cursor-pointer">
                            fb
                        </div>
                    </div>
                </div>

                {/* Facility Links */}
                <div>
                    <h4 className="font-semibold text-[#111827] mb-6">Facility</h4>
                    <ul className="space-y-4 text-sm text-[#6B7280]">
                        <li><Link href="/equipment" className="hover:text-[#CCA028] transition-colors">Equipment List</Link></li>
                        <li><Link href="/facility/tour" className="hover:text-[#CCA028] transition-colors">Virtual Tour</Link></li>
                        <li><Link href="/safety" className="hover:text-[#CCA028] transition-colors">Safety Protocols</Link></li>
                    </ul>
                </div>

                {/* Team Links */}
                <div>
                    <h4 className="font-semibold text-[#111827] mb-6">Team</h4>
                    <ul className="space-y-4 text-sm text-[#6B7280]">
                        <li><Link href="/trainers/personal-training" className="hover:text-[#CCA028] transition-colors">Personal Training</Link></li>
                        <li><Link href="/trainers/group-instructors" className="hover:text-[#CCA028] transition-colors">Group Instructors</Link></li>
                        <li><Link href="/careers" className="hover:text-[#CCA028] transition-colors">Join the Team</Link></li>
                    </ul>
                </div>

                {/* Location */}
                <div>
                    <h4 className="font-semibold text-[#111827] mb-6">Location</h4>
                    <ul className="space-y-4 text-sm text-[#6B7280]">
                        <li>123 Fitness Ave, Wellness District</li>
                        <li>Metro City, MC 54321</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#6B7280] uppercase tracking-wider">
                <p>© 2024 FITZONE // All Rights Reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="/privacy" className="hover:text-[#CCA028] transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-[#CCA028] transition-colors">Terms of Membership</Link>
                </div>
            </div>
        </footer>
    );
};
