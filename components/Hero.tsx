const Hero = () => {
    return (
        <section className="relative min-h-[700px] overflow-hidden bg-[#1F4E79]">
            <div className="mx-auto grid min-h-[700px] max-w-[1920px] lg:grid-cols-2">

                {/* LEFT SIDE */}
                <div className="relative z-20 flex flex-col justify-center px-8 py-20 sm:px-12 lg:px-16 xl:px-24">

                    {/* Company Name */}
                    <p className="mb-8 font-serif text-2xl text-white sm:text-3xl">
                        Gajendra V Jain & Associates LLP
                    </p>

                    {/* Small Label */}
                    <div className="mb-10 flex items-center gap-4">
                        <span className="h-px w-12 bg-[#F28C28]" />

                        <span className="text-xs font-medium tracking-[0.35em] text-[#F28C28] sm:text-sm">
                            CHARTERED ACCOUNTANTS · EST. 2011
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-2xl font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl xl:text-[72px]">
                        Clarity in Numbers.
                        <br />
                        Confidence in{" "}
                        <span className="italic text-[#F28C28]">
                            Growth.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                        From audits to advisory, we help businesses across Surat
                        and beyond stay compliant, informed, and ready for
                        whatever growth brings next.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                        <button className="bg-[#F28C28] px-10 py-5 text-sm font-semibold tracking-[0.2em] text-white transition-opacity hover:opacity-90">
                            OUR SERVICES
                        </button>

                        <button className="border border-white/60 px-10 py-5 text-sm font-semibold tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#1F4E79]">
                            GET IN TOUCH
                        </button>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative min-h-[500px] lg:min-h-full">

                    {/* Placeholder Image */}
                    <div className="absolute inset-0 bg-[#000000]">
                        <div className="flex h-full items-center justify-center">
                            <p className="text-sm tracking-[0.2em] text-white">
                                ACCOUNTING IMAGE
                            </p>
                        </div>
                    </div>

                    {/* Orange angled divider */}
                    <div
                        className="absolute -left-8 top-0 z-10 h-full w-14 bg-[#F28C28]"
                        style={{
                            clipPath: "polygon(70% 0, 100% 0, 30% 100%, 0 100%)",
                        }}
                    />

                </div>

            </div>
        </section>
    );
};

export default Hero;