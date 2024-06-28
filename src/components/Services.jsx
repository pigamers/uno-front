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
                <div className="relative px-10">
                    <div className="flex justify-center items-center gap-10">
                        <div className="w-1/2">
                            <img src="/assets/ellipse.png" className="absolute" />
                            <h2 className="font-oswald font-semibold text-xl uppercase text-[#C2278E]">
                                Services
                            </h2>
                            <p className="font-plusjakarta font-extrabold text-4xl">Our Services That Can Help Your Business</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            </p>
                        </div>
                        <div className="w-1/2">
                            <ul>
                                <li className="flex justify-between items-center">
                                    <h1 className="font-montserrat font-extrabold text-[#2D2D2D] text-2xl">
                                        Sustainability
                                    </h1>
                                    <div className="flex items-center">
                                        <img src="/assets/path.png" />
                                        <img src="/assets/triangle.png" />
                                    </div>
                                </li>
                                <li className="bg-[#BCBCBC]">
                                    <hr className="w-full relative z-50 text-red-500 h-10" style={{ color: 'blue'}} />
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}