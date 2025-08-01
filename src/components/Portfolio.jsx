import Heading from './Heading'
import { HiArrowNarrowRight } from "react-icons/hi";


const Portfolio = () => {
    return (
        <div className='mt-20' id='Portfolio'>
            <div>
                <Heading heading={'My latest work'} />
            </div>

            <div className='mt-10 md:mt-20 flex flex-wrap justify-center gap-5'>
                <div className='w-full md:max-w-[300px] max-h-[300px] rounded-2xl cursor-pointer overflow-hidden hover:border-2 border-pink-700 hover:scale-105 transition-all duration-300 ease-in-out'>
                    <img className='w-full h-full object-cover' src="/website1.png" alt="" />
                </div>
                <div className='w-full md:max-w-[300px] max-h-[300px] rounded-2xl cursor-pointer overflow-hidden hover:border-2 border-pink-700 hover:scale-105 transition-all duration-300 ease-in-out'>
                    <img className='w-full h-full object-cover' src="/website1.png" alt="" />
                </div>
                <div className='w-full md:max-w-[300px] max-h-[300px] rounded-2xl cursor-pointer overflow-hidden hover:border-2 border-pink-700 hover:scale-105 transition-all duration-300 ease-in-out'>
                    <img className='w-full h-full object-cover' src="/website1.png" alt="" />
                </div>
                <div className='w-full md:max-w-[300px] max-h-[300px] rounded-2xl cursor-pointer overflow-hidden hover:border-2 border-pink-700 hover:scale-105 transition-all duration-300 ease-in-out'>
                    <img className='w-full h-full object-cover' src="/website1.png" alt="" />
                </div>
                <div className='w-full md:max-w-[300px] max-h-[300px] rounded-2xl cursor-pointer overflow-hidden hover:border-2 border-pink-700 hover:scale-105 transition-all duration-300 ease-in-out'>
                    <img className='w-full h-full object-cover' src="/website1.png" alt="" />
                </div>
                <div className='w-full md:max-w-[300px] max-h-[300px] rounded-2xl cursor-pointer overflow-hidden hover:border-2 border-pink-700 hover:scale-105 transition-all duration-300 ease-in-out'>
                    <img className='w-full h-full object-cover' src="/website1.png" alt="" />
                </div>
            </div>


            <div className='flex justify-center mt-7'>
                <div className="flex items-center text-center gap-2 my-2.5 text-gray-300 border w-max px-5 py-3 rounded-full hover:gap-4 cursor-pointer transition-all duration-300 ease-in-out">
                    <p>Read More</p>
                    <HiArrowNarrowRight className="text-[20px] translate-y-[1px]" />
                </div>
            </div>

        </div>
    )
}

export default Portfolio;