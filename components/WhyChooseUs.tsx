import { BriefcaseBusiness, Handshake, SwatchBook, Users } from "lucide-react"

const WhyChooseUs = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div>
                        {/* Section Label */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-[2px] bg-[#F28C28]"></div>
                            <span className="text-[#F28C28] text-sm font-medium tracking-widest uppercase">
                                Why Choose Us
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-6">
                            <span className="text-[#1F4E79]">Professional Services</span>
                            <br />
                            <span className="text-[#1F4E79]">That </span>
                            <span className="text-[#F28C28]">Delivers</span>
                            <span className="text-[#1F4E79]"> Results</span>
                        </h2>


                        {/* Points */}
                        <div className="space-y-8">
                            {/* 01 */}
                            <div className="flex gap-5">
                                <span className="text-[#F28C28]/60 text-2xl font-light w-10 flex-shrink-0">01</span>
                                <div>
                                    <h3 className="text-[#1F4E79] font-semibold text-lg mb-1">
                                        Experienced CA Team
                                    </h3>
                                    <p className="text-[#000000]/75 text-[15px] leading-relaxed">
                                        Led by a practicing Chartered Accountant with over 15+ years of hands-on
                                        experience across audit, taxation, and advisory domains.
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-[#F28C28]/30"></div>

                            {/* 02 */}
                            <div className="flex gap-5">
                                <span className="text-[#F28C28]/60 text-2xl font-light w-10 flex-shrink-0">02</span>
                                <div>
                                    <h3 className="text-[#1F4E79] font-semibold text-lg mb-1">
                                        End-to-End Financial Support
                                    </h3>
                                    <p className="text-[#000000]/75 text-[15px] leading-relaxed">
                                        From incorporation to audit, GST to litigation — a single firm handling all your
                                        financial and compliance requirements seamlessly.
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-[#F28C28]/30"></div>

                            {/* 03 */}
                            <div className="flex gap-5">
                                <span className="text-[#F28C28]/60 text-2xl font-light w-10 flex-shrink-0">03</span>
                                <div>
                                    <h3 className="text-[#1F4E79] font-semibold text-lg mb-1">
                                        Ethical & Confidential Practice
                                    </h3>
                                    <p className="text-[#000000]/75 text-[15px] leading-relaxed">
                                        Built on the highest standards of professional ethics, your financial
                                        information is handled with complete confidentiality and integrity.
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-[#F28C28]/30"></div>

                            {/* 04 */}
                            <div className="flex gap-5">
                                <span className="text-[#F28C28]/60 text-2xl font-light w-10 flex-shrink-0">04</span>
                                <div>
                                    <h3 className="text-[#1F4E79] font-semibold text-lg mb-1">
                                        Practical, Result-Oriented Solutions
                                    </h3>
                                    <p className="text-[#000000]/75 text-[15px] leading-relaxed">
                                        We don’t just advise — we implement. Every recommendation is actionable,
                                        practical, and tailored to your specific business context.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Stats + Banner */}
                    <div className="space-y-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Card 1 */}
                            <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-center items-center text-[#1F4E79] text-3xl mb-3"><BriefcaseBusiness size={30} /></div>
                                <div className="text-[#F28C28] text-2xl font-bold">15+</div>
                                <div className="text-[#1F4E79] text-xs font-medium tracking-wider uppercase mt-1">
                                    Years of Practice
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-center items-center text-[#1F4E79] text-3xl mb-3"><Handshake size={30} /></div>
                                <div className="text-[#F28C28] text-2xl font-bold">1200+</div>
                                <div className="text-[#1F4E79] text-xs font-medium tracking-wider uppercase mt-1">
                                    Clients Served
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-center items-center text-[#1F4E79] text-3xl mb-3"><SwatchBook size={30} /></div>
                                <div className="text-[#F28C28] text-2xl font-bold">9+</div>
                                <div className="text-[#1F4E79] text-xs font-medium tracking-wider uppercase mt-1">
                                    Core Service Areas
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-center items-center text-[#1F4E79] text-3xl mb-3"><Users size={30} /></div>
                                <div className="text-[#F28C28] text-2xl font-bold">3</div>
                                <div className="text-[#1F4E79] text-xs font-medium tracking-wider uppercase mt-1">
                                    Expert Partners
                                </div>
                            </div>
                        </div>

                        {/* Orange Banner */}
                        <div className="bg-[#F28C28] rounded-xl p-8 text-center text-white">
                            <div className="text-3xl mb-4">🛡️</div>
                            <h3 className="text-2xl sm:text-3xl font-semibold leading-snug">
                                Integrity. Accuracy.<br />Commitment.
                            </h3>
                            <p className="text-sm font-medium tracking-widest uppercase mt-4 opacity-90">
                                Our Professional Philosophy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs