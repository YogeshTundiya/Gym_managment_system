const fs = require('fs');
const filepath = '/home/yogesh/Documents/myproject/gym_managment_system/client/src/app/portal/page.tsx';
let content = fs.readFileSync(filepath, 'utf8');

const regexOuterLayout = /className="min-h-\[calc\(100vh-200px\)\] flex items-center justify-center p-6 bg-gradient-to-br from-background-main to-gray-50\/50"/g;

const newOuterLayout = `className="min-h-[calc(100vh-90px)] relative flex items-center justify-center p-6 overflow-hidden"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark overlay for the main background to make the card stand out */}
            <div className="absolute inset-0 bg-[#0F2E23]/80 backdrop-blur-sm z-0"></div>

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-5xl h-[650px] bg-white/50 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.12)] overflow-hidden flex`;

content = content.replace(/className="min-h-\[calc\(100vh-200px\)\] flex items-center justify-center p-6 bg-gradient-to-br from-background-main to-gray-50\/50">\s*{\/\* Main Container \*\/}\s*<div className="relative w-full max-w-5xl h-\[650px\] bg-white\/60 backdrop-blur-xl border border-white\/40 rounded-3xl shadow-\[0_8px_40px_rgb\(0,0,0,0.08\)\] overflow-hidden flex/m, newOuterLayout);

fs.writeFileSync(filepath, content, 'utf8');
console.log("Updated portal background successfully!");
