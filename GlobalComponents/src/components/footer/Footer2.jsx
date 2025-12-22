export default function Footer2() {
  return (
    <footer>
      <div className="footer-top bg-[#F6F5F2] py-12 ">
        <div className="container mx-auto px-4">
          <div className="info-wrapper grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
            <div className="company-info">
              <div className="brandname flex items-center gap-3">
                <span className="rounded-full bg-gray-900 text-4xl w-8 h-8 flex items-center justify-center leading-none text-white">
                  *
                </span>
                <span className="text-2xl font-medium text-gray-900">
                  GlobalComponents
                </span>
              </div>
              <div className="footer-heading">
                <h2 className="text-5xl font-semibold mt-6 text-gray-900 leading-[1.5]">
                  Ready to <span className="text-green-600">take control</span>{" "}
                  of your design system?
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, cumque?
                </p>
              </div>
            </div>
            <div className="contact-info flex justify-end flex-col">
              <h4 className=" font-medium text-gray-900">Contact us</h4>
              <div className="contact-info-items-wrapper grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-700">
                <div className="contact-item">
                  <h5>Our phone</h5>
                  <a href="#">+91 123 456 789</a>
                </div>
                <div className="contact-item">
                  <h5>Our email</h5>
                  <a href="#">hello@global.com</a>
                </div>
                <div className="contact-item">
                  <h5>Mon-Fri:</h5>
                  8:30am - 5:30pm
                </div>
                <div className="contact-item">
                  <h5>San Francisco</h5>
                  123 Market St, Suite 500
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-12">
        <div className="container mx-auto">
          <div className="bg-white">
            <div className="menu-link-wrapper pb-12 border-b border-gray-200">
              <ul className="flex justify-between">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Who we are</a>
                </li>
              </ul>
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
        </div>
      </div>
    </footer>
  );
}
