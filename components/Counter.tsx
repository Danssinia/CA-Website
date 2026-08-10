const stats = [
    {
        number: "15",
        suffix: "+",
        title: "YEARS OF PRACTICE",
        description: "Practicing Chartered Accountants since 2011",
    },
    {
        number: "1,200",
        suffix: "+",
        title: "CLIENTS SERVED",
        description: "Corporate and non-corporate clients across sectors",
    },
    {
        number: "9",
        suffix: "+",
        title: "CORE SERVICE AREAS",
        description: "Audit, Taxation, GST, Advisory, Compliance & CFO Services",
    },
    {
        number: "100",
        suffix: "%",
        title: "CLIENT FOCUS",
        description: "Practical, result-oriented solutions built on trust",
    },
];

const Counter = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto grid max-w-[1920px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                {stats.map((stat, index) => (
                    <div
                        key={stat.title}
                        className={`flex min-h-[260px] flex-col items-center justify-center px-8 py-12 text-center ${index !== 0 ? "border-t border-[#1F4E79]/20 lg:border-l lg:border-t-0" : ""
                            }`}
                    >

                        {/* Number */}
                        <div className="font-serif text-6xl italic leading-none text-[#F28C28] sm:text-7xl">
                            {stat.number}
                            <sup className="ml-1 align-super text-3xl not-italic">
                                {stat.suffix}
                            </sup>
                        </div>

                        {/* Title */}
                        <p className="mt-8 text-xs font-medium tracking-[0.3em] text-[#1F4E79]">
                            {stat.title}
                        </p>

                        {/* Description */}
                        <p className="mt-4 max-w-xs text-sm leading-7 text-[#000000]">
                            {stat.description}
                        </p>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default Counter;