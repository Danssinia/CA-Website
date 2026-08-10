const Footer = () => {
    return (
        <footer className="bg-[var(--black)] text-[var(--white)] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-5">
                            {/* Replace with your actual logo */}
                            <div className="w-8 h-8 rounded bg-[var(--navy)] flex items-center justify-center text-[var(--white)] font-bold text-sm">
                                GVJ
                            </div>
                            <span className="text-[var(--white)] font-semibold text-lg">GVJ & Associates</span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
                            Trusted Financial & Compliance Advisors. Delivering audit, tax, and advisory excellence since 2011.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-9 h-9 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[var(--orange)] hover:text-[var(--orange)] transition-colors">
                                in
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[var(--orange)] hover:text-[var(--orange)] transition-colors">
                                f
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[var(--orange)] hover:text-[var(--orange)] transition-colors">
                                ig
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Services</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-[var(--orange)] transition-colors">Audit & Assurance</a></li>
                            <li><a href="#" className="hover:text-[var(--orange)] transition-colors">Tax Advisory</a></li>
                            <li><a href="#" className="hover:text-[var(--orange)] transition-colors">GST Compliance</a></li>
                            <li><a href="#" className="hover:text-[var(--orange)] transition-colors">Financial Advisory</a></li>
                            <li><a href="#" className="hover:text-[var(--orange)] transition-colors">Business Consulting</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Company</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-[var(--orange)] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[var(--orange)] transition-colors">Our Team</a></li>
                            <li><a href="#" className="hover:text-[var(--orange)] transition-colors">Industries</a></li>
                            <li><a href="#" className="hover:text-[var(--orange)] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[var(--orange)] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Contact</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>
                                <a href="mailto:info@example.com" className="hover:text-[var(--orange)] transition-colors">
                                    info@example.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919876543210" className="hover:text-[var(--orange)] transition-colors">
                                    +91 ***** *****
                                </a>
                            </li>
                            <li className="pt-2 text-gray-500 text-xs leading-relaxed">
                                Address | address | address
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Gajendra V. Jain & Associates LLP. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-gray-500 text-sm">
                        <a href="#" className="hover:text-[var(--orange)] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[var(--orange)] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer