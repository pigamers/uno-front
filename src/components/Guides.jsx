export default function Guides() {
    return (
        <>
            <div className="relative h-full lg:h-[773px] bg-guides bg-no-repeat py-10 bg-center lg:bg-contain">
                <div className="flex flex-col items-center gap-12 h-full mt-10 lg:mt-0 lg:pt-36 my-5 text-white lg:px-10 mx-10 lg:mx-20">
                    <h1 className="font-plusjakarta font-normal text-3xl lg:pt-24">
                        Olvera Guides
                    </h1>
                    <h2 className="font-plusjakarta font-extrabold text-3xl">
                        Ollie Restructuring Guide
                    </h2>
                    <div className="hidden relative lg:flex justify-end">
                        <h1 className="flex items-center gap-6 text-xl font-montserrat font-normal">
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
                    <p className="lg:w-1/2 font-archivo font-normal text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="relative lg:hidden">
                        <h1 className="flex items-center gap-6 text-xl font-montserrat font-normal">
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