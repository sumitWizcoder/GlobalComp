import React, { useState, useEffect } from "react";
import {
    Menu,
    X,
    ChevronDown,
    Monitor,
    Smartphone,
    Layout,
    Zap,
    Users,
    Phone,
    Settings,
    Shield,
    Layers
} from "lucide-react";

const MegaNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMegaOpen, setIsMegaOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
    const timeoutRef = React.useRef(null);

    // Close menus on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
                setActiveMobileSubmenu(null);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMegaEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsMegaOpen(true);
    };

    const handleMegaLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsMegaOpen(false);
        }, 200); // 200ms delay to bridge the gap
    };

    const products = [
        {
            title: "Web Analytics",
            description: "Real-time insights into your traffic and users.",
            icon: <Monitor />,
            href: "#"
        },
        {
            title: "Mobile App",
            description: "Native apps for iOS and Android platforms.",
            icon: <Smartphone />,
            href: "#"
        },
        {
            title: "UI Components",
            description: "Pre-built blocks for faster development.",
            icon: <Layout />,
            href: "#"
        },
        {
            title: "Performance",
            description: "Optimized delivery for global scale.",
            icon: <Zap />,
            href: "#"
        },
        {
            title: "Automation",
            description: "Workflow builders for repetitive tasks.",
            icon: <Settings />,
            href: "#"
        },
        {
            title: "Security",
            description: "Enterprise-grade protection for your data.",
            icon: <Shield />,
            href: "#"
        }
    ];

    return (
        <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-100 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                            <Layers className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                            Skyline
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2">
                        <div
                            className="p-2"
                            onMouseEnter={handleMegaEnter}
                            onMouseLeave={handleMegaLeave}
                        >
                            <button
                                className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all ${isMegaOpen ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                                    }`}
                            >
                                Products
                                <ChevronDown className={`w-4 h-4 transition-transform ${isMegaOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Megamenu Dropdown - Positioned relative to the 7xl container */}
                            <div
                                className={`absolute top-full left-4 right-4 md:left-6 md:right-6 mt-0 bg-white rounded-b-2xl shadow-2xl border border-t-0 border-gray-100 p-8 transition-all duration-300 origin-top overflow-hidden z-50 ${isMegaOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                    }`}
                            >
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {products.map((product, idx) => (
                                        <a
                                            key={idx}
                                            href={product.href}
                                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-100 transition-colors group"
                                        >
                                            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                                {product.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{product.title}</h4>
                                                <p className="text-sm text-gray-500 leading-relaxed mt-1">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <div className="mt-8 pt-8 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <div>
                                        <h5 className="font-medium text-gray-900">Need help choosing?</h5>
                                        <p className="text-sm text-gray-500">Talk to our product experts anytime.</p>
                                    </div>
                                    <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 whitespace-nowrap">
                                        Contact Sales &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a href="#" className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50">Solutions</a>
                        <a href="#" className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50">Pricing</a>
                        <a href="#" className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50">Resources</a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button className="px-4 py-2 text-gray-600 font-medium hover:text-indigo-600 transition-colors">
                            Log in
                        </button>
                        <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:translate-y-[-2px] transition-all">
                            Sign up free
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay - Switches from fixed to absolute to align with relative nav */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-white z-[90] border-t border-gray-100 shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
                    }`}
            >
                <div className="h-full overflow-y-auto px-6 py-8">
                    <div className="flex flex-col gap-2">
                        {/* Products Mobile Collapsible */}
                        <div className="border-b border-gray-50">
                            <button
                                onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === 'products' ? null : 'products')}
                                className="w-full flex justify-between items-center py-4 text-lg font-semibold text-gray-900"
                            >
                                Products
                                <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileSubmenu === 'products' ? 'rotate-180' : ''}`} />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeMobileSubmenu === 'products' ? 'max-h-[800px] pb-6' : 'max-h-0'
                                    }`}
                            >
                                <div className="grid gap-4 mt-2">
                                    {products.map((product, idx) => (
                                        <a key={idx} href={product.href} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50">
                                            <div className="p-2 bg-indigo-50 rounded-lg">
                                                {product.icon}
                                            </div>
                                            <span className="font-medium text-gray-700">{product.title}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <a href="#" className="py-4 text-lg font-semibold text-gray-900 border-b border-gray-50">Solutions</a>
                        <a href="#" className="py-4 text-lg font-semibold text-gray-900 border-b border-gray-50">Pricing</a>
                        <a href="#" className="py-4 text-lg font-semibold text-gray-900 border-b border-gray-50">Resources</a>
                    </div>

                    <div className="mt-12 flex flex-col gap-4">
                        <button className="w-full py-4 text-center font-bold text-gray-900 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors">
                            Log in
                        </button>
                        <button className="w-full py-4 text-center font-bold text-white bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-colors">
                            Get started for free
                        </button>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-8 text-center border-t border-gray-50 pt-10">
                        <div>
                            <Users className="w-6 h-6 mx-auto text-gray-400 mb-2" />
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Community</span>
                        </div>
                        <div>
                            <Phone className="w-6 h-6 mx-auto text-gray-400 mb-2" />
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contact</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MegaNavbar;
