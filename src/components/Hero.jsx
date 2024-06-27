export default function Hero(params) {
    return (
        <>
            <section>
                <div className="h-screen relative text-black mx-auto w-full bg-hero bg-no-repeat bg-center bg-cover top-32">
                    <div className="bg-gradient-to-r h-screen lg:from-[#121B21E5] from-black/80 to-transparent w-full">
                        <div className="flex flex-col justify-center h-full w-full lg:w-1/2 px-6 lg:px-20 lg:mx-6">
                            <h2 className="text-5xl lg:text-6xl text-white font-montserrat font-medium mb-4">
                                Start your story with <span className="font-semibold">Olvera</span>
                            </h2>
                            <div className="hidden lg:block">
                                <button type="button" className="lg:block bg-[#F837B7] uppercase focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full px-7 py-3 text-center font-plusjakarta font-medium">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}