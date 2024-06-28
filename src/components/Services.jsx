export default function Services() {
    return (
        <>
            <div className="relative top-32 h-[593px] bg-[#C2278E] p-10">
                <div className="absolute inset-0 z-0">
                    <img src="/assets/purplegrad.png" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col lg:flex-row z-10 relative justify-start text-white items-center lg:p-16">
                    <h2 className="font-plusjakarta text-3xl">
                        About Olvera
                    </h2>
                    <h1 className="lg:hidden font-semibold font-plusjakarta text-4xl text-center mt-4 lg:mt-0">
                        Change is the one true constant in business
                    </h1>
                </div>
                <div className="relative z-10 flex justify-end text-white text-center lg:text-left">
                    <p className="font-archivo p-10 lg:w-2/5 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <ul className="grid grid-cols-2 place-items-center lg:flex lg:flex-row lg:justify-around lg:items-center relative z-10">
                    <li>
                        <img src="/assets/howardslogo.png" className="lg:h-full w-24 lg:w-32" />
                    </li>
                    <li>
                        <img src="/assets/commonlogo.png" className="h-24 w-24 lg:h-full" />
                    </li>
                    <li>
                        <img src="/assets/ellerylogo.png" className="w-24 lg:h-full" />
                    </li>
                    <li>
                        <img src="/assets/gingerlogo.png" className="w-24 lg:h-full" />
                    </li>
                </ul>
            </div>
        </>
    )
}