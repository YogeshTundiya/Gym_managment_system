const fs = require('fs');
const filepath = '/home/yogesh/Documents/myproject/gym_managment_system/client/src/app/portal/page.tsx';
let content = fs.readFileSync(filepath, 'utf8');

// Replace the motion.div with our new background image layout
const regex = /<motion\.div[\s\S]*?<\/motion\.div>/m;

const newOverlay = `<motion.div
                    className="hidden md:flex absolute top-2 bottom-2 w-[calc(50%-16px)] rounded-2xl z-20 shadow-2xl items-center justify-center p-12 text-center overflow-hidden"
                    initial={false}
                    animate={{ x: isLogin ? 'calc(0% + 16px)' : 'calc(100% + 16px)' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <div 
                        className="absolute inset-0 z-0 bg-cover bg-center" 
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop")',
                        }}
                    />
                    <div className="absolute inset-0 z-0 bg-[#111827]/80 backdrop-blur-[2px]"></div>

                    <div className="absolute -top-24 -right-24 z-0 w-64 h-64 bg-[#CCA028] rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob"></div>
                    <div className="absolute -bottom-24 -left-24 z-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                    <div className="relative z-10 w-full max-w-sm">
                        <h3 className="text-3xl font-serif font-bold text-white mb-4 drop-shadow-md">
                            {isLogin ? "New to FITZONE?" : "Already a Member?"}
                        </h3>
                        <p className="text-gray-200 mb-8 drop-shadow-sm">
                            {isLogin
                                ? "Start your journey to peak performance today. Discover exclusive tracking, bookings, and more."
                                : "Welcome back to your personalized fitness hub. Log in to manage your schedule and track progress."}
                        </p>
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="px-8 py-3 rounded-xl border-2 border-white/80 text-white font-medium hover:bg-white hover:text-[#111827] transition-all duration-300 shadow-xl"
                        >
                            {isLogin ? "Create Account" : "Sign In"}
                        </button>

                        <div className="mt-12 text-left space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-200 bg-black/20 p-2 rounded-lg backdrop-blur-sm">
                                <CheckCircle2 size={18} className="text-[#CCA028]" />
                                <span className="font-medium">Seamless Class Bookings</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-200 bg-black/20 p-2 rounded-lg backdrop-blur-sm">
                                <CheckCircle2 size={18} className="text-[#CCA028]" />
                                <span className="font-medium">Personalized Performance Analytics</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-200 bg-black/20 p-2 rounded-lg backdrop-blur-sm">
                                <CheckCircle2 size={18} className="text-[#CCA028]" />
                                <span className="font-medium">Quick QR Front Desk Check-in</span>
                            </div>
                        </div>
                    </div>
                </motion.div>`;

content = content.replace(regex, newOverlay);

fs.writeFileSync(filepath, content, 'utf8');
console.log("Updated portal layout successfully!");
