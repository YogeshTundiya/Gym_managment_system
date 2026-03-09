import Link from "next/link";

export const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Marcus T.",
            role: "Member since 2022",
            content: "FITZONE completely changed my approach to fitness. The trainers actually care about your progress and the facilities are always spotless.",
            rating: 5,
        },
        {
            id: 2,
            name: "Sarah L.",
            role: "Group Class Enthusiast",
            content: "The energy in the HIIT classes is unreal. I've never pushed myself this hard and had so much fun doing it. Highly recommend!",
            rating: 5,
        },
        {
            id: 3,
            name: "James D.",
            role: "PT Client",
            content: "Recovering from an injury was daunting, but my coach created a program that rebuilt my strength safely. World-class expertise here.",
            rating: 5,
        }
    ];

    return (
        <section className="st-section w-full bg-[#121c22] py-24 relative overflow-hidden">
            {/* Background Decorator */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0F2E23]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-white/10 text-[#CCA028] text-xs font-bold tracking-widest rounded-full mb-6 uppercase border border-white/5">
                        Success Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Don&apos;t Just Take Our Word For It
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        See what our community has to say about their transformations and experiences at FITZONE.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.05] transition-colors flex flex-col">
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-white/80 text-lg leading-relaxed mb-8 flex-1 italic">
                                &quot;{review.content}&quot;
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0F2E23] to-[#CCA028] flex items-center justify-center text-white font-bold text-lg">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{review.name}</h4>
                                    <p className="text-white/50 text-sm">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/reviews" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#CCA028] transition-colors">
                        View All Google Reviews
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>

            </div>
        </section >
    );
};
