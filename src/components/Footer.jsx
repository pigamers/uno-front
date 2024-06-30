export default function Footer() {
    return (
        <>
            <footer class="bg-black pb-52">
                <div className=" relative mx-auto  w-full">
                    <img src="/assets/footpat.png"/>
                    <div className="flex absolute gap-x-20 left-12 ml-20 right-0 top-96 items-center text-white">
                        <div className="flex flex-col items-start w-8/12 -mt-20">
                            <img src="/assets/olverafirst.png" className="h-[45px] w-[203px]" />
                            <img src="/assets/olveralast.png" className="h-[42px] w-[256px] mt-5" />
                            <p className="font-plusjakarta font-normal text-lg mt-3 w-full text-[#E0E0E0]">Turning Uncertainty Into Your Advantage</p>
                        </div>
                        <div className="flex flex-row gap-x-10 justify-center items-center w-full mt-20">
                            <ul className="space-y-4 w-3/12">
                                <li className="font-plusjakarta font-semibold text-lg">Resources</li>
                                <li className="text-[#E0E0E0]">Home</li>
                                <li className="text-[#E0E0E0]">Articles</li>
                                <li className="text-[#E0E0E0] ">Videos & Guides</li>
                                <li className="text-[#E0E0E0]">About Us</li>
                            </ul>
                            <ul className="space-y-4 w-3/12 -mt-1">
                                <li className="font-plusjakarta font-semibold text-lg">Careers</li>
                                <li className="text-[#E0E0E0]">Olvera Academy</li>
                                <li className="text-[#E0E0E0]">Privacy Policy</li>
                                <li className="text-[#E0E0E0]">Cookies</li>
                                <li><br /></li>
                            </ul>
                            <ul className="space-y-3 flex flex-col text-[10px] -mt-4">
                                <li className="font-montserrat text-[#E0E0E0] w-1/2 font-semibold">
                                    Liability Limited By A Scheme Approved Under Professional Services Scheme
                                    <br />
                                    <span>
                                        <br />
                                        Phone: (64) 09 973 4905
                                    </span>
                                </li>
                                <li>Email:
                                    <br/>
                                     ezibuyenquiries@olveraadvisors.com</li>
                                <li>Website: olvera.co.nz/ezibuy</li>
                                <li><br /></li>
                            </ul>
                        </div>
                    </div>
                        <div className="w-full bg-[#7C7C7C] h-[1px] mt-16">
                        </div>

                        <div className="flex mt-12 justify-between px-44 font-plusjakarta text-[#E0E0E0]">
                            <div>
                            ©2023 olevra advisors. All rights reserved
                            </div>
                            <div className="flex  text-white gap-x-10">
                                <img src="/assets/facebook.png" className="text-white"/>
                                <img src="/assets/instagram.png"/>
                                <img src="/assets/instagram.png"/>
                                <img src="/assets/linkedin.png"/>
                            </div>
                        </div>
                </div>

            </footer >
        </>
    )
}