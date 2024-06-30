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
                <div className="mt-32 bg-white ">
                    <h1 className="text-center text-4xl font-plusjakarta font-bold">What our clients say about us</h1>
                    <div className="mt-42 flex justify-center items-center">
                        <img src="/assets/quotes.png"/>
                        <div className="bg-[#C2278E] h-52 w-52 mb-20 rounded-md text-white py-7 px-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}