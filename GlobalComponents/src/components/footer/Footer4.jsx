export default function Footer4() {
    return (
        <>
            <footer className="py-12 md:py-20 border-footer border-2 border-red-500 bg-black text-white rounded-xl m-5">
                <div className="container mx-auto px-4 ">
                    <div className="footer-wrapper">
                        <div className="footer-title-sec text-center max-w-2xl mx-auto flex flex-col gap-12 items-center">
                            <h2 className="text-5xl font-bold">Have a great idea in mind<span className="text-red-600">?</span> let's make it real</h2>
                            <a href="#" className="white-button px-6 py-4 rounded-full bg-white text-black">
                                <div className="button-content-wrapper flex items-center gap-2">
                                    <span className="button-text">Let's work together</span>
                                    <span className="button-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 mt-20">
                        <div className="footer-content-wrapper flex gap-4 justify-between flex-col md:flex-row items-end">
                            <div className="footer-intro-box max-w-md flex flex-col gap-4">
                                <h3 className="text-3xl font-bold">
                                    NUR
                                </h3>
                                <p className="text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid et dicta distinctio possimus error, ea nulla harum sequi, expedita placeat velit nihil mollitia, perferendis laboriosam.
                                </p>
                                <div className="social-icons-wrapper">
                                    <ul className="social-icon-list flex gap-4 flex-col md:flex-row">
                                        <li className="social-icon-item">
                                            <a href="#">
                                                LinkedIn
                                            </a>
                                        </li>
                                        <li className="social-icon-item">
                                            <a href="#">
                                                Dribble
                                            </a>
                                        </li>
                                        <li className="social-icon-item">
                                            <a href="#">
                                                Instagram
                                            </a>
                                        </li>
                                        <li className="social-icon-item">
                                            <a href="#">
                                                Twitter
                                            </a>
                                        </li>
                                        <li className="social-icon-item">
                                            <a href="#">
                                                Facebook
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-link-wrapper max-w-md">
                                <ul className="footer-links-item-wrapper flex flex-wrap justify-center">
                                    <li className="footer-link-item px-4 py-2 duration-300 bg-transparent hover:bg-white hover:text-black rounded-full"> <a href="#"> Home </a> </li>
                                    <li className="footer-link-item px-4 py-2 duration-300 bg-transparent hover:bg-white hover:text-black rounded-full"> <a href="#"> About </a> </li>
                                    <li className="footer-link-item px-4 py-2 duration-300 bg-transparent hover:bg-white hover:text-black rounded-full"> <a href="#"> Services </a> </li>
                                    <li className="footer-link-item px-4 py-2 duration-300 bg-transparent hover:bg-white hover:text-black rounded-full"> <a href="#"> Contact </a> </li>
                                    <li className="footer-link-item px-4 py-2 duration-300 bg-transparent hover:bg-white hover:text-black rounded-full"> <a href="#"> Blog </a> </li>
                                    <li className="footer-link-item px-4 py-2 duration-300 bg-transparent hover:bg-white hover:text-black rounded-full"> <a href="#"> Privacy Policy </a> </li>
                                    <li className="footer-link-item px-4 py-2 duration-300 bg-transparent hover:bg-white hover:text-black rounded-full"> <a href="#"> Terms & Conditions </a> </li>
                                    <li className="footer-link-item px-4 py-2 duration-300 bg-transparent hover:bg-white hover:text-black rounded-full"> <a href="#"> Cookies </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright px-4 mt-10 border-t border-white text-center pt-10">
                        <p className="text-gray-400">
                            ©2025 All rights reserved
                        </p>

                    </div>
                </div>
            </footer>
        </>
    )
}