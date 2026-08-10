import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative min-h-[700px] overflow-hidden bg-[var(--navy)]">
            <div className="mx-auto grid min-h-[700px] max-w-[1920px] lg:grid-cols-2">

                {/* LEFT SIDE - Content */}
                <div className="relative z-20 flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-16 xl:px-24">

                    {/* Company Name */}
                    <p className="mb-6 font-serif text-2xl text-[var(--white)] sm:text-3xl">
                        Gajendra V Jain & Associates LLP
                    </p>

                    {/* Small Label */}
                    <div className="mb-8 flex items-center gap-4">
                        <span className="h-px w-12 bg-[var(--orange)]" />
                        <span className="text-xs font-medium tracking-[0.35em] text-[var(--orange)] sm:text-sm">
                            CHARTERED ACCOUNTANTS · EST. 2011
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-2xl font-serif text-4xl leading-[1.1] text-[var(--white)] sm:text-5xl lg:text-6xl xl:text-[68px]">
                        Clarity in Numbers.
                        <br />
                        Confidence in{" "}
                        <span className="italic text-[var(--orange)]">Growth.</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-7 max-w-xl text-base leading-7 text-[var(--white-75)] sm:text-lg">
                        From audits to advisory, we help businesses across Surat and beyond
                        stay compliant, informed, and ready for whatever growth brings next.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <button className="bg-[var(--orange)] px-8 py-4 text-sm font-semibold tracking-[0.2em] text-[var(--white)] transition-opacity hover:opacity-90">
                            OUR SERVICES
                        </button>

                        <button className="border border-[var(--white-60)] px-8 py-4 text-sm font-semibold tracking-[0.2em] text-[var(--white)] transition-colors hover:bg-[var(--white)] hover:text-[var(--navy)]">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE - Image (exactly half) */}
                <div className="relative hidden min-h-[500px] lg:block lg:min-h-full">
                    {/* Image */}
                    <Image
                        src="/law.jpg"
                        alt="Gajendra V Jain & Associates"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="50vw"
                    />

                    {/* Orange angled divider */}
                    <div
                        className="absolute -left-8 top-0 z-10 h-full w-14 bg-[var(--orange)]"
                        style={{
                            clipPath: "polygon(70% 0, 100% 0, 30% 100%, 0 100%)",
                        }}
                    />
                </div>

                {/* Mobile Image (shows only on small screens) */}
                <div className="relative h-[420px] w-full lg:hidden">
                    <Image
                        src="/law.jpg"
                        alt="Gajendra V Jain & Associates"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;