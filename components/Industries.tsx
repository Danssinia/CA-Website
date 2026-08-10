import { Building2, CarFront, Factory, HandCoins, HeartPulse, Landmark, Laptop, Leaf, Rocket, ShelvingUnit, Shirt, ShoppingCart } from "lucide-react";

const Industries = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <p className="text-[#F28C28] text-sm font-medium tracking-widest uppercase mb-4">
                        Who We Work With
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5">
                        <span className="text-[#1F4E79]">Industries</span>{" "}
                        <span className="text-[#F28C28]">We Serve</span>
                    </h2>

                    <p className="text-[#000000]/80 text-base leading-relaxed">
                        Delivering audit, tax, and advisory expertise tailored to the unique needs of every sector.
                    </p>

                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">

                    {/* Item */}
                    {[
                        { icon: <CarFront />, title: "Automobiles" },
                        { icon: <ShoppingCart />, title: "Consumer Goods" },
                        { icon: <Leaf />, title: "Energy & Environment" },
                        { icon: <HandCoins />, title: "Financial Services" },
                        { icon: <Landmark />, title: "Banking & NBFC" },
                        { icon: <Factory />, title: "Manufacturing" },
                        { icon: <ShelvingUnit />, title: "Retail / Wholesale Trading" },
                        { icon: <Building2 />, title: "Real Estate" },
                        { icon: <HeartPulse />, title: "Healthcare" },
                        { icon: <Laptop />, title: "Information Technology" },
                        { icon: <Shirt />, title: "Textile & Apparel" },
                        { icon: <Rocket />, title: "Startups & SMEs" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-4 rounded-xl hover:bg-[#1F4E79]/5 transition-colors duration-300"
                        >
                            <div className="w-11 h-11 rounded-full bg-[#1F4E79]/10 flex items-center justify-center text-[#1F4E79] text-lg flex-shrink-0">
                                {item.icon}
                            </div>
                            <span className="text-[#1F4E79] font-medium text-[15px]">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Bottom text */}
                <p className="text-center text-[#000000]/60 text-sm italic mt-12">
                    ...and many more related industries across sectors
                </p>
            </div>
        </section>
    );
}

export default Industries;