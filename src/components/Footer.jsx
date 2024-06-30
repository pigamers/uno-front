export default function Footer() {
    return (
        <>
            <footer class="bg-black pb-8 pt-20 relative">
                <div class="relative mx-auto w-full">
                    <img src="/assets/footpat.png" class="w-full object-cover" />
                    <div class="absolute inset-x-0 top-0 flex flex-wrap gap-x-20 items-center text-white px-6 md:px-12 lg:px-20 pt-96">
                        <div class="flex flex-col items-start w-full lg:w-8/12 -mt-20">
                            <img src="/assets/olverafirst.png" class="h-[45px] w-[203px]" />
                            <img src="/assets/olveralast.png" class="h-[42px] w-[256px] mt-5" />
                            <p class="font-plusjakarta font-normal text-lg mt-3 w-full text-[#E0E0E0]">Turning Uncertainty Into Your Advantage</p>
                        </div>
                        <div class="flex flex-wrap gap-y-10 gap-x-10 justify-center items-start w-full lg:flex-nowrap mt-20">
                            <ul class="space-y-4 w-full sm:w-1/2 md:w-1/4 lg:w-3/12">
                                <li class="font-plusjakarta font-semibold text-lg">Resources</li>
                                <li class="text-[#E0E0E0]">Home</li>
                                <li class="text-[#E0E0E0]">Articles</li>
                                <li class="text-[#E0E0E0]">Videos & Guides</li>
                                <li class="text-[#E0E0E0]">About Us</li>
                            </ul>
                            <ul class="space-y-4 w-full sm:w-1/2 md:w-1/4 lg:w-3/12 -mt-1">
                                <li class="font-plusjakarta font-semibold text-lg">Careers</li>
                                <li class="text-[#E0E0E0]">Olvera Academy</li>
                                <li class="text-[#E0E0E0]">Privacy Policy</li>
                                <li class="text-[#E0E0E0]">Cookies</li>
                                <li><br /></li>
                            </ul>
                            <ul class="space-y-3 flex flex-col text-[10px] w-full sm:w-1/2 md:w-1/2 lg:w-3/12 -mt-4">
                                <li class="font-montserrat text-[#E0E0E0] w-full font-semibold">
                                    Liability Limited By A Scheme Approved Under Professional Services Scheme
                                    <br />
                                    <span>
                                        <br />
                                        Phone: (64) 09 973 4905
                                    </span>
                                </li>
                                <li>Email:
                                    <br />
                                    ezibuyenquiries@olveraadvisors.com</li>
                                <li>Website: olvera.co.nz/ezibuy</li>
                                <li><br /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full bg-[#7C7C7C] h-[1px] mt-16"></div>
                    <div class="flex flex-wrap mt-12 justify-between px-6 md:px-12 lg:px-44 font-plusjakarta text-[#E0E0E0]">
                        <div>
                            ©2023 olevra advisors. All rights reserved
                        </div>
                        <div class="flex gap-x-10 mt-4 lg:mt-0">
                            <img src="/assets/whitefb.png" class="w-6 h-6" />
                            <img src="/assets/instalogo.png" class="w-6 h-6" />
                            <img src="/assets/twitlogo.png" class="w-6 h-6" />
                            <img src="/assets/linkedinlogo.png" class="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}