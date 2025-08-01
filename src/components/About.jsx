import Heading from "./Heading"

const About = () => {

    return (

        <div className="mt-20" id="About">
            <div>
                <Heading heading={'About me'} />
            </div>

            <div className="flex gap-12 mt-16">
                <div className="hidden md:block w-[40%]">
                    <div className="rounded-2xl overflow-hidden">
                        <img className="w-full h-full object-contain" src="/download.jpeg" alt="" />
                    </div>
                </div>

                <div className="text-white font-medium w-ful md:w-[55%]">
                    <p>I am an experienced Frontend Developer with over a year of professional expertise in the field.
                        Throughout my career, I have had the privilege of
                        collaborating with prestigious organizations, contributing to their success and growth.
                    </p>
                    <br />
                    <p>
                        My passion for frontend development is not only reflected in my extensive experience but also
                        in the enthusiasm and dedication I bring to each project.
                    </p>

                    <div className="text-white pt-10 space-y-5">
                        <div className="flex items-center justify-between hover:scale-105 transition-all duration-300 ease-in-out">
                            <span className="w-1/3 text-left">HTML && CSS</span>
                            <div className="w-2/3 h-2 rounded-full overflow-hidden">
                                <div className="w-[90%] h-2 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 rounded-full"></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between hover:scale-105 transition-all duration-300 ease-in-out">
                            <span className="w-1/3 text-left">React JS</span>
                            <div className="w-2/3 h-2 rounded-full overflow-hidden">
                                <div className="w-[80%] h-2 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 rounded-full"></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between hover:scale-105 transition-all duration-300 ease-in-out">
                            <span className="w-1/3 text-left">JavaScript</span>
                            <div className="w-2/3 h-2 rounded-full overflow-hidden">
                                <div className="w-[85%] h-2 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="text-white py-20">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">

                    <div className="flex flex-col items-center text-center px-4 hover:scale-110 transition-all duration-300 ease-in-out">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                            1+
                        </h1>
                        <p className="mt-1 text-sm sm:text-base">YEARS OF EXPERIENCE</p>
                    </div>

                    <div className="hidden sm:block h-12 w-px bg-white"></div>

                    <div className="flex flex-col items-center text-center px-4 hover:scale-110 transition-all duration-300 ease-in-out">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                            3+
                        </h1>
                        <p className="mt-1 text-sm sm:text-base">PROJECTS COMPLETED</p>
                    </div>

                    <div className="hidden sm:block h-12 w-px bg-white"></div>

                    <div className="flex flex-col items-center text-center px-4 hover:scale-110 transition-all duration-300 ease-in-out">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                            3+
                        </h1>
                        <p className="mt-1 text-sm sm:text-base">HAPPY CLIENTS</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About;