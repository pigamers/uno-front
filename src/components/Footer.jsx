export default function Footer() {
    return (
        <>
            <footer class="bg-black">
                <div className="mx-auto w-full pt-20 pb-40">
                    <img src="/assets/footpat.png" />
                    <div className="flex flex-col items-center text-white">
                        <div className="flex flex-col items-center">
                            <img src="/assets/olverafirst.png" className="h-[45px] w-[203px]" />
                            <img src="/assets/olveralast.png" className="h-[42px] w-[256px]" />
                            <p className="font-plusjakarta font-normal text-lg text-[#E0E0E0]">Turning Uncertainty Into Your Advantage</p>
                        </div>
                        <div className="flex flex-row justify-evenly items-center w-full mt-0">
                            <ul className="space-y-4">
                                <li className="font-plusjakarta font-semibold text-lg">Resources</li>
                                <li className="text-[#E0E0E0]">Home</li>
                                <li className="text-[#E0E0E0]">Articles</li>
                                <li className="text-[#E0E0E0]">Videos & Guides</li>
                                <li className="text-[#E0E0E0]">About Us</li>
                            </ul>
                            <ul className="space-y-4">
                                <li className="font-plusjakarta font-semibold text-lg">Careers</li>
                                <li className="text-[#E0E0E0]">Olvera Academy</li>
                                <li className="text-[#E0E0E0]">Privacy Policy</li>
                                <li className="text-[#E0E0E0]">Cookies</li>
                                <li><br /></li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="font-montserrat text-[#E0E0E0] w-2/5 font-semibold text-xs">
                                    Liability Limited By A Scheme Approved Under Professional Services Scheme
                                    <br />
                                    <span>
                                        <br />
                                        Phone: (64) 09 973 4905
                                    </span>
                                </li>
                                <li>Email: ezibuyenquiries@olveraadvisors.com</li>
                                <li>Website: olvera.co.nz/ezibuy</li>
                                <li><br /></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer >
        </>
    )
}