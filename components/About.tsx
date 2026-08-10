const About = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        {/* Section Label */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[2px] bg-[#F28C28]"></div>
                            <span className="text-[#F28C28] text-sm font-medium tracking-widest uppercase">
                                Our Story
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-6">
                            <span className="text-[#1F4E79]">Trusted Financial &</span>
                            <br />
                            <span className="text-[#F28C28]">Compliance Advisors</span>
                        </h2>


                        {/* Paragraphs */}
                        <div className="space-y-5 text-[#000000]/90 text-[15px] leading-relaxed">
                            <p>
                                Gajendra V. Jain & Associates LLP is a professionally managed Chartered Accountancy
                                firm established in 2011, delivering comprehensive Audit & Assurance, Tax Advisory,
                                Financial Advisory, Regulatory Compliance, and Business Consulting services. With a
                                strong foundation of professional ethics, technical expertise, and client-focused
                                solutions, we help businesses, entrepreneurs, and professionals navigate today’s
                                evolving financial and regulatory landscape.
                            </p>

                            <p>
                                Our approach goes beyond compliance. We work closely with clients to simplify
                                complex regulations, strengthen financial management, optimize business processes,
                                and support informed decision-making that drives sustainable growth. Serving
                                diverse industries across India, we combine practical insights with deep domain
                                expertise to deliver solutions tailored to each client’s unique business objectives.
                            </p>

                            <p>
                                From startups and SMEs to established enterprises, we provide reliable, value-driven
                                advisory services that foster long-term partnerships built on trust, transparency, and
                                excellence. Our commitment is to empower every client with strategic financial
                                guidance and dependable professional support at every stage of their business
                                journey.
                            </p>
                        </div>

                        {/* Signature style text */}
                        <p className="mt-10 text-[#F28C28] text-lg italic font-medium">
                            GVJ & Associates, 2011
                        </p>
                    </div>

                    {/* Right Image + Badge */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            {/* Replace this with your actual image */}
                            <img
                                src="/images/about-office.jpg"   // ← put your image here
                                alt="Financial Advisors - Scales, Books & Reports"
                                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-[5/6]"
                            />

                            {/* Orange Badge */}
                            <div className="absolute bottom-6 left-6 bg-[#F28C28] text-white px-5 py-3 rounded-lg shadow-lg">
                                <div className="text-2xl font-bold leading-none">15+</div>
                                <div className="text-[11px] font-medium tracking-wider uppercase mt-1">
                                    Years of Excellence
                                </div>
                            </div>
                        </div>

                        {/* Soft decorative circle (optional - matches the soft white circle in the image) */}
                        <div className="absolute -z-10 -right-8 -bottom-8 w-48 h-48 rounded-full bg-[#1F4E79]/5 blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
