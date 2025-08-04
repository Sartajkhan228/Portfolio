import Heading from "./Heading"
import { FcBusinessman } from "react-icons/fc";


const Footer = () => {

    return (

        <div className="mt-15 md:mt-20">
            <div className="text-white flex flex-col gap-3.5 md:flex-row justify-between items-center md:gap-6">
                <div className="w-full md:w-[45%]">
                    <div className="flex flex-start">
                        <Heading heading={'Sartaj'} />
                    </div>
                    <p className="my-5 font-semibold">I am a frontend developer from, Pakistan with one plus year of experience in Artillect solutions</p>
                </div>

                <div className="w-full md:w-[50%] flex justify-center md:flex-row items-center gap-3">
                    <div className="relative w-max">
                        <FcBusinessman className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-[rgb(50,50,60)] text-white pl-10 pr-4 py-3 rounded-full outline-none"
                            required
                        />
                    </div>

                    <button className="w-max md:w-auto bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 px-5 py-3 rounded-full shadow-md 
                            hover:scale-105 transition-transform duration-300 cursor-pointer text-white text-sm">
                        Subscribe
                    </button>
                </div>


            </div>
            <hr className="my-3.5 h-0.5 bg-white border-none rounded" />
            <div className="flex items-center justify-between text-white my-5">
                <div>
                    © 2025 Sartaj. All rights reserved.
                </div>
                <div className="flex items-center gap-5" >
                    <button>Term of Services</button>
                    <button>Privacy Policy</button>
                    <button>Connect with me</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;