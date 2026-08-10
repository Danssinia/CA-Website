const Testimonials = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-[2px] bg-[var(--orange)]"></div>
                        <span className="text-[var(--orange)] text-sm font-medium tracking-widest uppercase">
                            Client Stories
                        </span>
                        <div className="w-8 h-[2px] bg-[var(--orange)]"></div>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5">
                        <span className="text-[var(--navy)]">What Our Clients</span>{" "}
                        <span className="text-[var(--orange)]">Say</span>
                    </h2>

                    <p className="text-[var(--black-75)] text-base">
                        Trusted by businesses across industries for reliable and result-driven financial guidance.
                    </p>


                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Testimonial 1 */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-[var(--orange)] text-4xl mb-5">“</div>
                        <p className="text-[var(--black-80)] text-[15px] leading-relaxed mb-6">
                            Working with Gajendra V. Jain & Associates has been a game-changer for our company.
                            Their proactive approach to tax planning and compliance has saved us significant time and money.
                        </p>
                        <div className="border-t border-gray-100 pt-5">
                            <h4 className="text-[var(--navy)] font-semibold">Rajesh Mehta</h4>
                            <p className="text-[var(--black-60)] text-sm mt-1">Managing Director, Mehta Industries</p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-[var(--orange)] text-4xl mb-5">“</div>
                        <p className="text-[var(--black-80)] text-[15px] leading-relaxed mb-6">
                            The team is highly professional and extremely responsive. They handled our complex GST
                            and audit requirements with complete transparency and expertise. Highly recommended.
                        </p>
                        <div className="border-t border-gray-100 pt-5">
                            <h4 className="text-[var(--navy)] font-semibold">Priya Sharma</h4>
                            <p className="text-[var(--black-60)] text-sm mt-1">Founder, NexaTech Solutions</p>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-[var(--orange)] text-4xl mb-5">“</div>
                        <p className="text-[var(--black-80)] text-[15px] leading-relaxed mb-6">
                            From incorporation to ongoing advisory, they have been our trusted partners.
                            Their practical advice and deep knowledge of regulations give us complete peace of mind.
                        </p>
                        <div className="border-t border-gray-100 pt-5">
                            <h4 className="text-[var(--navy)] font-semibold">Amit Patel</h4>
                            <p className="text-[var(--black-60)] text-sm mt-1">CEO, GreenField Retail Pvt. Ltd.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonials