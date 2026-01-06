
export default function HeroWithImage() {
    return (
        <>
            <section className="bg-green-50 py-10 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="content-wrapper flex flex-col gap-12">
                        <div className="max-w-7xl mx-auto px-4 py-20 text-center flex flex-col gap-6">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight max-w-2xl mx-auto">
                                Building Ventures With <span className="text-green-900">Founders Who Execute.</span>
                            </h1>

                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Our component library helps you launch beautiful products in minutes, not weeks. Fully responsive and customizable.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a className="px-8 py-4 rounded-xl bg-green-900 text-white duration-300 hover:bg-green-600" href="#">Get Started</a>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <section className="section image-wrapper-section">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="image-wrapper mt-[-6rem]">
                        <img src="images/component-image.webp" alt="hero-image" className="w-full md:h-[35rem] h-80 object-cover rounded-3xl border-5 border-green-900" />
                    </div>
                </div>
            </section>
        </>
    );
}