import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 font-montserrat">
                <div className="flex items-center bg-[#C2278E] text-white justify-center h-10 uppercase font-semibold text-opacity-75 text-sm md:text-lg">
                    Turning Uncertainity Into your advantage
                </div>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-5 mx-auto">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/assets/logo.png" alt="logo" />
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0">
                        <button className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
                            </svg>
                        </button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between gap-5 hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col items-center p-4 ml-20 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white uppercase">
                            <li>
                                <a href="#" className="block py-2 px-3 text-[#1C1C1C] bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
                                <hr className="bg-[#B31E8C] h-1 rounded-full w-2/3" />
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-[#292929BF] text-opacity-75 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-[#292929BF] text-opacity-75 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Our Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-[#292929BF] text-opacity-75 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Our Experience</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-[#292929BF] text-opacity-75 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Resources</a>
                            </li>
                            <li>
                                <button type="button" className="hidden lg:block text-white bg-[#C2278E] tracking-widest uppercase focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full px-5 py-3 text-center font-oswald">Contact Us</button>
                            </li>
                        </ul>
                        <ul className="hidden lg:flex items-center gap-3 px-3">
                            <li>
                                <img src="/assets/facebook.png" alt="logo" className="h-5" />
                            </li>
                            <li>
                                <img src="/assets/instagram.png" alt="logo" className="h-5" />
                            </li>
                            <li>
                                <img src="/assets/linkedin.png" alt="logo" className="h-5" />
                            </li>
                        </ul>
                    </div>
                    {isOpen && (
                        <div className="w-full" id="navbar-sticky">
                            <ul className="flex flex-col p-4 mt-4 font-semibold border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse uppercase">
                                <li>
                                    <a href="#" className="block py-2 px-3 text-[#292929BF] text-opacity-75 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-[#292929BF] text-opacity-75 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-[#292929BF] text-opacity-75 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Our Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-[#292929BF] text-opacity-75 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Our Experience</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-[#292929BF] text-opacity-75 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Resources</a>
                                </li>

                            </ul>
                        </div>
                    )}
                </div>
            </nav>

        </>
    )
}