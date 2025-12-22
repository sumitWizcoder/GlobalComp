export default function Footer3() {
    return (

        <>
            <footer className="red-footer-gradient bg-[#010101] text-white py-12 md:py-20">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="gradient-link-wrapper grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        <div className="gradient-link">
                            <h3 className="text-gray-500 text-sm mb-4">// Product</h3>
                            <ul className="flex flex-col gap-2">
                                <li><a href="#" className="footer-links">What's New</a></li>
                                <li><a href="#" className="footer-links">Design</a></li>
                                <li><a href="#" className="footer-links">Collaboration</a></li>
                                <li><a href="#" className="footer-links">All Features</a></li>
                            </ul>
                        </div>
                        <div className="gradient-link">
                            <h3 className="text-gray-500 text-sm mb-4">// Product</h3>
                            <ul className="flex flex-col gap-2">
                                <li><a href="#" className="footer-links">What's New</a></li>
                                <li><a href="#" className="footer-links">Design</a></li>
                                <li><a href="#" className="footer-links">Collaboration</a></li>
                                <li><a href="#" className="footer-links">All Features</a></li>
                            </ul>
                        </div>
                        <div className="gradient-link">
                            <h3 className="text-gray-500 text-sm mb-4">// Product</h3>
                            <ul className="flex flex-col gap-2">
                                <li><a href="#" className="footer-links">What's New</a></li>
                                <li><a href="#" className="footer-links">Design</a></li>
                                <li><a href="#" className="footer-links">Collaboration</a></li>
                                <li><a href="#" className="footer-links">All Features</a></li>
                            </ul>
                        </div>
                        <div className="gradient-link">
                            <h3 className="text-gray-500 text-sm mb-4">// Product</h3>
                            <ul className="flex flex-col gap-2">
                                <li><a href="#" className="footer-links">What's New</a></li>
                                <li><a href="#" className="footer-links">Design</a></li>
                                <li><a href="#" className="footer-links">Collaboration</a></li>
                                <li><a href="#" className="footer-links">All Features</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="gradient-divider py-12 md:py-20"></div>
                    <div className="footer-bottom relative">
                        <div className="container mx-auto">
                            <div className="form-container flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
                                <div className="form-content w-full lg:w-1/2">
                                    <h3 className="text-gray-300 text-xl md:text-2xl mb-4 font-semibold">Never miss an update</h3>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">Sign up to our newsletter to get the latest updates and offers. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum labore hic laudantium quos quia, possimus reiciendis aspernatur eos cumque saepe?</p>
                                </div>
                                <div className="form-wrapper w-full lg:w-1/3">
                                    <form action="#" className="flex items-start gap-4 md:gap-5 flex-col w-full">
                                        <div className="input-wrapper flex flex-col sm:flex-row items-center gap-4 w-full">
                                            <input id="email" type="email" placeholder="example@gmail.com" autoComplete="off" className="bg-white/10 p-4 rounded-lg backdrop-blur-md w-full focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" />
                                            <button id="join" type="submit" className="bg-white p-4 rounded-lg text-black font-semibold hover:bg-gray-200 duration-300 cursor-pointer w-full sm:w-32">Join</button>
                                        </div>
                                        <div className="checkbox-wrapper flex items-center gap-3">
                                            <input type="checkbox" name="terms" id="terms" className="w-5 h-5 accent-red-600 rounded" />
                                            <label htmlFor="terms" className="text-sm text-gray-400">I agree to receive marketing emails from <a href="#" className="hover:text-white transition-colors">wizcoder</a></label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="copyright-container flex flex-col md:flex-row justify-between items-center gap-6 mt-16 md:mt-20 border-t border-white/10 pt-8">
                                <div className="copyright-text text-md text-gray-300 text-center md:text-left">
                                    copyright &copy; 2024 GlobalComponents. All rights reserved.
                                </div>
                                <div className="privacy-links">
                                    <ul className="flex gap-6 text-md text-gray-300">
                                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>


            <style>
                {`
                .red-footer-gradient {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .red-footer-gradient::before{
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(180deg, transparent 50%, #892026 100%);
                    z-index: 0;
                }
            

                .gradient-divider{
                    position: relative;
                }
                .gradient-divider::before{
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(136deg, #FFF 10%, #111 40%, #FFF 100%);
                }
            
                `}
            </style>
        </>
    )
}