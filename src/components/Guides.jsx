export default function Guides() {
    return (
        <>
            <div className="relative h-full lg:h-[773px] bg-guides bg-gradient bg-no-repeat bg-center lg:bg-contain w-full">
                <div className="absolute inset-0 flex items-center text-white bg-custom-gradient mt-24 mb-24">
                    <div className="flex flex-col h-full ml-28 mt-28 w-1/2 gap-y-52 ">
                    
                        <h1 className="font-plusjakarta font-normal text-3xl lg:pt-24">
                            Olvera Guides
                        </h1>
                        <h2 className="font-plusjakarta hidden font-extrabold text-3xl">
                            Ollie Restructuring Guide
                        </h2>
                        <p className=" lg:w-10/12 leading-[26px] text-[17px] font-archivo font-normal text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="hidden relative lg:flex justify-end ml-40 mt-10">
                        <h1 className="flex items-center gap-6 text-xl font-montserrat">
                            View More
                            {/* circle */}
                            <div className="relative">
                                <img src="/assets/cir.png" className="h-[117px] w-[117px]" />
                                {/* arrow */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex items-center">
                                        <img src="/assets/path.png" style={{ backgroundColor: "#fff" }} />
                                        <img src="/assets/whitetriangle.png" />
                                    </div>
                                </div>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>

        </>
    )
}