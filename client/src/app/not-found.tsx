import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen relative flex flex-col items-center justify-center p-4 bg-[#121c22] text-white">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0F2E23]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#CCA028]/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />

            <div className="relative z-10 text-center max-w-2xl px-6">
                <h1 className="text-[120px] md:text-[180px] font-black leading-none text-white/10 select-none">
                    404
                </h1>
                <div className="-mt-16 md:-mt-24 mb-8">
                    <span className="inline-block px-4 py-1.5 bg-white/10 text-[#CCA028] text-xs font-bold tracking-widest rounded-full mb-6 uppercase border border-white/5">
                        Out of Bounds
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Lost Your Way?
                    </h2>
                    <p className="text-white/70 text-lg mb-10 leading-relaxed">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track to your fitness journey.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0F2E23] text-white rounded-full font-semibold hover:bg-[#CCA028] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Return Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
