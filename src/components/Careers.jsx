export default function Careers() {
    return (
        <>
            <div className="relative">
                <div className="relative mb-10">
                    <div className="flex flex-col  lg:flex-row gap-5">
                        {/* services div */}
                        <div className="w-full lg:w-1/2 px-4 lg:px-12 text-center">
                            {/* first image */}
                            <img src="/assets/ellipse.png" className="absolute top-0 right-40 -rotate-[81.87deg] lg:rotate-0 lg:left-72 mt-24" />
                            {/* second image */}
                            <img src="/assets/ellipsehalf.png" className="hidden lg:block absolute bottom-0 left-0 translate-y-52" />
                            <div className="mt-48 ml-20 gap-y-10 flex justify-start flex-col items-start">
                            <h2 className="hidden lg:block font-oswald font-semibold text-xl uppercase text-[#C2278E]">
                            CAREERS
                            </h2>
                            <p className="font-montserrat font-semibold text-2xl lg:text-5xl"> Careers at Olvera</p>
                            <p className="font-plusjakarta text-start font-normal text-lg w-11/12 text-[#6E6E6E]">
                            Navigate change, develop on-demand skills. Your turnaround journey starts with Olvera.
                            </p>
                            <button className="font-plusjakarta bg-[#FF74D0] rounded-full font-bold py-3 px-5">
                                Search Careers
                            </button>
                            </div>
                        </div>
                        <div className="w-full bg- lg:w-1/2 h-[752px] bg-yellow-100 ml-10 -mt-10">
                          <img src="/assets/servicespic.png" className="h-full w-full bg-contain"/>
                        </div>
                    </div>
                </div>
                {/* <div className="flex justify-center mb-20">
                    <img src="/assets/services2.png" className="absolute"/>
                    <div className="w-full bg-pink-gradient absolute mt-1/2 inset-0 z-1"></div>
                    <img src="/assets/Vector.png" className="absolute mt-60 z-10"/>
                </div> */}
                <div className="mt-20 bg-white ">
                    <h1 className="text-center text-4xl font-plusjakarta font-bold">What our clients say about us</h1>
                    
                <div className="flex mt-20">
                    <div className=" flex justify-center items-center">
                        <div className="bg-[#C2278E] h-fit w-9/12 mb-20 mt-10 rounded-md text-white px-10 py-6">
                            <img src="/assets/qoutes.png" className="mt-2"/>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            <img src="/assets/qouteReverse.png" className="ml-56 "/>
                            <div className="flex items-center justify-start gap-x-4 mb-3">
                                <img src="/assets/Icon.png" className="w-14 mt-5"/>
                                <div className="flex flex-col items-start justify-start mt-5">
                                    <p className="font-poppins text-white font-bold">Aaron Boby</p>
                                    <p className="text-[#C5E9FB] mt-2 font-poppins text-[14px]">2 November 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="bg-[#C2278E08] h-fit w-9/12 mb-20 mt-10 rounded-md text-[#5E84A1] px-10 py-7">
                            <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            <div className="flex items-center justify-start mt-6 gap-x-4 mb-3">
                                <img src="/assets/Icon2.png" className="w-14 mt-10"/>
                                <div className="flex flex-col items-start justify-start mt-10">
                                    <p className="font-poppins text-[#1E5068] font-bold">Aaron Boby</p>
                                    <p className="text-[#5E84A1] font-poppins text-[14px]">2 November 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="bg-[#C2278E08] h-fit w-9/12 mb-20 mt-10 rounded-md text-[#5E84A1] px-10 py-7">
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            <div className="flex items-center justify-start gap-x-4 mt-5 mb-3">
                                <img src="/assets/Icon2.png" className="w-14 mt-10"/>
                                <div className="flex flex-col items-start justify-start mt-10">
                                    <p className="font-poppins text-[#1E5068] font-bold">Dion Channing</p>
                                    <p className="text-[#5E84A1] font-poppins text-[14px]">22 August 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    </div>
                </div>
            </div>
        </>
    )
}