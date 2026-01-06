import AnimateButton from "../ui/ButtonAnimate";

export default function HeroDark() {
  return (
    <section className="section bg-[#010101] text-white py-10 md:py-20 h-[100vh] flex  relative overflow-hidden">
      <div className="container mx-auto px-3">
        <div className="content-wrapper flex flex-col gap-8 items-center max-w-5xl mx-auto ">
          <h1 className="text-5xl md:text-7xl text-center font-medium">
            We invest in the companies of tomorrow, today
          </h1>
          <p className="text-xl text-center max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut qui at
            ducimus error odit animi adipisci voluptatum itaque reiciendis eum.
          </p>

          <div className="flex gap-3 relative z-2">
            <a
              href="#"
              className="text-white  text-lg border-b border-white pb-1 duration-300 opacity-70 hover:opacity-100"
            >
              <div className="button-content-wrappper align-center justify-center">
                <div className="button-text">Get in touch</div>
                <div className="button-icon"></div>
              </div>
            </a>
            <a
              href="#"
              className="text-white  text-lg opacity-70 hover:opacity-100 border-b border-white pb-1 duration-300 transition-opacity"
            >
              <div className="button-content-wrappper align-center justify-center">
                <div className="button-text">Explore More</div>
                <div className="button-icon"></div>
              </div>
            </a>
          </div>
        </div>
        <div className="dark-moon ">
          <img
            src="images/dark-moon.webp"
            alt="dark-moon hero-image"
            className="md:absolute md:bottom-[-100px] md:scale-180 opacity-70 md:w-130 md:h-130 w-100 h-100 md:left-[50%] md:translate-x-[-50%] "
          />
        </div>
      </div>
    </section>
  );
}
