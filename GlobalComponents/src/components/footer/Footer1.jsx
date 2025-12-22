export default function Footer1() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="info-wrapper flex flex-col md:flex-row md:justify-between md:items-center pb-12 border-b border-gray-500">
          <div className="footer-logo">
            <h2 className="text-2xl font-bold">GlobalComponents</h2>
          </div>
          <div className="footer-description md:mt-0 max-w-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            perferendis sed similique distinctio tempore voluptatem
          </div>
        </div>

        <div className="footer-menu-wrapper py-12 border-b border-gray-500">
          <div className="footer-menu grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            <div className="menu-column">
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-column">
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-column">
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Documentation
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    API Reference
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-column">
              <h3 className="text-xl font-semibold mb-4">
                Subscribe to our newsletter
              </h3>
              <p>
                Subscribe to our newsletter for the latest updates and news.
              </p>
              <div className="mt-4">
                <input
                  id="footer-subscribe"
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 border-b border-white focus:outline-none w-full text-white placeholder-gray-500"
                />
                <button className="bg-white text-gray-800 px-6 py-4 hover:bg-blue-700 mt-5 text-sm font-medium duration-300 hover:text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-wrapper flex flex-col md:flex-row md:justify-between md:items-center pt-6">
          <div className="copyright-text">
            copyright &copy; 2024 GlobalComponents. All rights reserved.
          </div>

          <div className="social-icon-wrapper">
            <a href="#" className="mr-4 hover:text-gray-400 duration-300">
              Facebook
            </a>
            <a href="#" className="mr-4 hover:text-gray-400 duration-300">
              Twitter
            </a>
            <a href="#" className="mr-4 hover:text-gray-400 duration-300">
              LinkedIn
            </a>
            <a href="#" className="hover:text-gray-400 duration-300">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
