export default function Careers() {
    return (
        <>
            <div>
                <div className="relative px-7 pt-24">
                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* services div */}
                        <div className="w-full lg:w-1/2 px-4 lg:px-12 text-center">
                            {/* first image */}
                            <img src="/assets/ellipse.png" className="absolute top-0 right-40 -rotate-[81.87deg] lg:rotate-0 lg:left-72" />
                            {/* second image */}
                            <img src="/assets/ellipsehalf.png" className="hidden lg:block absolute bottom-0 left-0 translate-y-52" />
                            <h2 className="hidden py-3 lg:block font-oswald font-semibold text-xl uppercase text-[#C2278E]">
                                Services
                            </h2>
                            <p className="font-montserrat font-extrabold text-2xl lg:text-5xl pb-8">Our Services That Can Help Your Business</p>
                            <p className="font-archivo font-normal text-lg text-[#6E6E6E]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="font-archivo font-normal text-lg text-[#6E6E6E] py-3">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 py-5 px-6">
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center py-3">
                                    <h1 className="font-montserrat font-extrabold text-[#2D2D2D] text-2xl">
                                        Sustainability
                                    </h1>
                                    <div className="flex items-center">
                                        <img src="/assets/path.png" />
                                        <img src="/assets/triangle.png" />
                                    </div>
                                </li>
                                <li className="bg-[#BCBCBC] rounded-full h-0.5">
                                    <hr className="w-1/12 h-1" style={{ backgroundColor: '#000' }} />
                                </li>
                                <li className="py-3">
                                    <h2 className="font-montserrat font-semibold text-lg text-[#C2278E]">02.</h2>
                                </li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center py-3">
                                    <h1 className="font-montserrat font-extrabold text-[#2D2D2D] text-2xl">
                                        Small Business
                                    </h1>
                                    <div className="flex items-center">
                                        <img src="/assets/path.png" />
                                        <img src="/assets/triangle.png" />
                                    </div>
                                </li>
                                <li className="bg-[#BCBCBC] rounded-full h-0.5">
                                    <hr className="w-1/12 h-1" style={{ backgroundColor: '#000' }} />
                                </li>
                                <li className="py-3">
                                    <h2 className="font-montserrat font-semibold text-lg text-[#C2278E]">03.</h2>
                                </li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center py-3">
                                    <h1 className="font-montserrat font-extrabold text-[#2D2D2D] text-2xl">
                                        Forensic Services
                                    </h1>
                                    <div className="flex items-center">
                                        <img src="/assets/path.png" />
                                        <img src="/assets/triangle.png" />
                                    </div>
                                </li>
                                <li className="bg-[#BCBCBC] rounded-full h-0.5">
                                    <hr className="w-1/12 h-1" style={{ backgroundColor: '#000' }} />
                                </li>
                                <li className="py-3">
                                    <h2 className="font-montserrat font-semibold text-lg text-[#C2278E]">04.</h2>
                                </li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center py-3">
                                    <h1 className="font-montserrat font-extrabold text-[#2D2D2D] text-2xl">
                                        Risk Management
                                    </h1>
                                    <div className="flex items-center">
                                        <img src="/assets/path.png" />
                                        <img src="/assets/triangle.png" />
                                    </div>
                                </li>
                                <li className="bg-[#BCBCBC] rounded-full h-0.5">
                                    <hr className="w-1/12 h-1" style={{ backgroundColor: '#000' }} />
                                </li>
                                <li className="py-3">
                                    <h2 className="font-montserrat font-semibold text-lg text-[#C2278E]">05.</h2>
                                </li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center py-3">
                                    <h1 className="font-montserrat font-extrabold text-[#2D2D2D] text-2xl">
                                        CFO Advisory
                                    </h1>
                                    <div className="flex items-center">
                                        <img src="/assets/path.png" />
                                        <img src="/assets/triangle.png" />
                                    </div>
                                </li>
                                <li className="bg-[#BCBCBC] rounded-full h-0.5">
                                    <hr className="w-1/12 h-1" style={{ backgroundColor: '#000' }} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}