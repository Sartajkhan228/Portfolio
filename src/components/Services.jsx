import Heading from "./Heading"
import { HiArrowNarrowRight } from "react-icons/hi";

const Services = () => {

    return (

        <div id="Services">
            <div>
                <Heading heading={"My Services"} />
            </div>

            <div className="flex flex-wrap mt-10 md:mt-20 gap-5 justify-center">

                <div className="max-w-2xs text-white border border-amber-100 p-5 rounded-2xl cursor-pointer hover:bg-orange-900 hover:border-purple-700 hover:scale-105 transition-all duration-300 ease-in-out">
                    <h1 className="text-3xl font-medium">01</h1>
                    <h1 className="text-3xl font-medium my-3 bg-gradient-to-r from-purple-300 via-pink-500 to-orange-500 text-transparent bg-clip-text">Web design</h1>

                    <p className="font-medium my-2.5 text-gray-300">Web development is the process of building, programming...</p>
                    <div className="flex items-center gap-1 my-2.5 text-gray-300">
                        <p>Read More</p>
                        <HiArrowNarrowRight className="text-[20px] translate-y-[1px]" />
                    </div>
                </div>
                <div className="max-w-2xs text-white border border-amber-100 p-5 rounded-2xl cursor-pointer hover:bg-orange-900 hover:border-purple-700 hover:scale-105 transition-all duration-300 ease-in-out">
                    <h1 className="text-3xl font-medium">02</h1>
                    <h1 className="text-3xl font-medium my-3 bg-gradient-to-r from-purple-300 via-pink-500 to-orange-500 text-transparent bg-clip-text">Graphics design</h1>

                    <p className="font-medium my-2.5 text-gray-300">Web development is the process of building, programming...</p>
                    <div className="flex items-center gap-1 my-2.5 text-gray-300">
                        <p>Read More</p>
                        <HiArrowNarrowRight className="text-[20px] translate-y-[1px]" />
                    </div>
                </div>
                <div className="max-w-2xs text-white border border-amber-100 p-5 rounded-2xl cursor-pointer hover:bg-orange-900 hover:border-purple-700 hover:scale-105 transition-all duration-300 ease-in-out">
                    <h1 className="text-3xl font-medium">03</h1>
                    <h1 className="text-3xl font-medium my-3 bg-gradient-to-r from-purple-300 via-pink-500 to-orange-500 text-transparent bg-clip-text">Social media</h1>

                    <p className="font-medium my-2.5 text-gray-300">Web development is the process of building, programming...</p>
                    <div className="flex items-center gap-1 my-2.5 text-gray-300">
                        <p>Read More</p>
                        <HiArrowNarrowRight className="text-[20px] translate-y-[1px]" />
                    </div>
                </div>
                <div className="max-w-2xs text-white border border-amber-100 p-5 rounded-2xl cursor-pointer hover:bg-orange-900 hover:border-purple-700 hover:scale-105 transition-all duration-300 ease-in-out">
                    <h1 className="text-3xl font-medium">04</h1>
                    <h1 className="text-3xl font-medium my-3 bg-gradient-to-r from-purple-300 via-pink-500 to-orange-500 text-transparent bg-clip-text">App design</h1>

                    <p className="font-medium my-2.5 text-gray-300">Web development is the process of building, programming...</p>
                    <div className="flex items-center gap-1 my-2.5 text-gray-300">
                        <p>Read More</p>
                        <HiArrowNarrowRight className="text-[20px] translate-y-[1px]" />
                    </div>
                </div>
                <div className="max-w-2xs text-white border border-amber-100 p-5 rounded-2xl cursor-pointer hover:bg-orange-900 hover:border-purple-700 hover:scale-105 transition-all duration-300 ease-in-out">
                    <h1 className="text-3xl font-medium">05</h1>
                    <h1 className="text-3xl font-medium my-3 bg-gradient-to-r from-purple-300 via-pink-500 to-orange-500 text-transparent bg-clip-text">Digital marketing</h1>

                    <p className="font-medium my-2.5 text-gray-300">Web development is the process of building, programming...</p>
                    <div className="flex items-center gap-1 my-2.5 text-gray-300">
                        <p>Read More</p>
                        <HiArrowNarrowRight className="text-[20px] translate-y-[1px]" />
                    </div>
                </div>
                <div className="max-w-2xs text-white border border-amber-100 p-5 rounded-2xl cursor-pointer hover:bg-orange-900 hover:border-purple-700 hover:scale-105 transition-all duration-300 ease-in-out">
                    <h1 className="text-3xl font-medium">06</h1>
                    <h1 className="text-3xl font-medium my-3 bg-gradient-to-r from-purple-300 via-pink-500 to-orange-500 text-transparent bg-clip-text">Content writing</h1>

                    <p className="font-medium my-2.5 text-gray-300">Web development is the process of building, programming...</p>
                    <div className="flex items-center gap-1 my-2.5 text-gray-300">
                        <p>Read More</p>
                        <HiArrowNarrowRight className="text-[20px] translate-y-[1px]" />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Services