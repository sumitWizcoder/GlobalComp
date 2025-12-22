import ButtonAnimate from "../ui/ButtonAnimate";

export default function HeroSplit() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center   md:text-left">
          <div className="content-wrapper p-3 flex flex-col gap-6 items-start">
            <p className="hero-tab-tagline px-3 py-2 bg-gray-600 rounded-full text-sm text-white inline-block">
              Lorem ipsum dolor sit
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-gray-500">Empower </span>
              Your Ideas with Our Component
              <span className="text-gray-500"> Library</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              neque perspiciatis, vitae accusamus repellendus iure. Eum autem
              quasi commodi saepe. Lorem ipsum dolor sit amet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonAnimate variant="primary" href="#get-started">
                Get Started
              </ButtonAnimate>
            </div>
            <div className="stats-wrapper grid grid-cols-3 gap-6 bg-white w-full p-5 rounded-lg shadow-xs">
              <div className="state-card flex flex-col gap-2 justify-center items-start">
                <h3 className="stat-value text-3xl font-bold">10K+</h3>
                <p className="stat-label">Users</p>
              </div>
              <div className="state-card flex flex-col gap-2 justify-center items-start">
                <h3 className="stat-value text-3xl font-bold">100+</h3>
                <p className="stat-label">Projects</p>
              </div>
              <div className="state-card flex flex-col gap-2 justify-center items-start">
                <h3 className="stat-value text-3xl font-bold">24/7</h3>
                <p className="stat-label">Support</p>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper relative">
            <img
              src="images/component-image.webp"
              alt="Component Illustration"
              className="w-full h-auto"
            />

            <div className="floating-card ">
              <div className="image-card absolute bottom-[5%] right-[5%] bg-blue-500 rounded-lg p-2 w-70">
                <img
                  src="images/component-image.webp"
                  alt="image-card-image"
                  className="rounded-md h-auto "
                />
                <p className="text-white mt-2">
                  Lorem ipsum dolor sit amet amet si consectetur adipisicing
                  elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
