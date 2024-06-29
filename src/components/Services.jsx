export default function Services() {
    return (
        <>
            <div>
                <div className="relative top-32 h-full bg-[#C2278E] p-10 select-none">
                    <div className="absolute inset-0 z-0">
                        <img src="/assets/purplegrad.png" className="h-full w-full lg:object-scale-down" />
                    </div>
                    <div className="flex flex-col lg:flex-row z-10 relative lg:py-16  justify-start text-white items-center lg:p-16">
                        <h2 className="font-plusjakarta text-3xl">
                            About Olvera
                        </h2>
                        <h1 className="lg:hidden font-semibold font-plusjakarta text-4xl text-center mt-4 lg:mt-0">
                            Change Is The One True Constant In Business
                        </h1>
                    </div>
                    <div className="relative z-10 flex justify-end text-white text-center lg:text-left">
                        <p className="font-archivo p-10 lg:w-2/5 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <ul className="grid grid-cols-2 place-items-center lg:flex lg:flex-row lg:justify-around lg:items-center relative z-10">
                        <li>
                            <img src="/assets/howardslogo.png" className="lg:h-[178px] w-24 h-24 lg:w-[178px]" />
                        </li>
                        <li>
                            <img src="/assets/commonlogo.png" className="h-[133px] w-[203px] lg:w-[297px] lg:h-[193px]" />
                        </li>
                        <li>
                            <img src="/assets/ellerylogo.png" className="h-[17px] w-[129px] lg:w-[180px] lg:h-[24px]" />
                        </li>
                        <li>
                            <img src="/assets/gingerlogo.png" className="h-[66px] w-[219px] lg:w-[290px] lg:h-[87px]" />
                        </li>
                    </ul>
                </div>
                <div className="relative grid grid-cols-2 place-items-center mt-32 py-12 lg:flex justify-evenly items-center font-montserrat select-none">
                    <div>
                        <h1 className="text-[#CC0E8C] text-5xl lg:text-6xl font-extrabold">150+</h1>
                        <h2 className="text-[#292929] font-semibold py-4 text-xl mt-3">Projects</h2>
                    </div>
                    <div>
                        <h1 className="text-[#CC0E8C] text-5xl lg:text-6xl font-extrabold">80+</h1>
                        <h2 className="text-[#292929] font-semibold py-4 text-xl mt-3">Clients</h2>
                    </div>
                    <div>
                        <h1 className="text-[#CC0E8C] text-5xl lg:text-6xl font-extrabold">200+</h1>
                        <h2 className="text-[#292929] font-semibold py-4 text-xl mt-3">Professionals</h2>
                    </div>
                    <div>
                        <h1 className="text-[#CC0E8C] text-5xl lg:text-6xl font-extrabold">97%</h1>
                        <h2 className="text-[#292929] font-semibold py-4 text-xl mt-3">Clients</h2>
                    </div>
                </div>
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