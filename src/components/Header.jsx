import Navbar from "./Navbar"

const Header = () => {

    return (

        <div>
            <Navbar />
            <div>
                <div className="w-[200px] md:w-[230px] aspect-square rounded-full overflow-hidden mx-auto my-10 border">
                    <img
                        className="w-full h-full object-cover"
                        src="/download.jpeg"
                        alt="Profile"
                    />
                </div>

                <div>
                    <div className="w-full md:w-[80%] mx-auto">

                        <h1 className="text-center font-sans font-semibold text-white text-3xl sm:text-4xl md:text-5xl leading-12 md:leading-15">
                            <span className="bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                                I'm Sartaj Ali,
                            </span>{' '}
                            frontend developer based in Pakistan
                        </h1>
                        <p className="text-center my-3.5 text-white font-medium">I am a frontend developer from Gilgit-Baltistan, Pakistan with more than one year of
                            experience in Artillect Solutions</p>
                    </div>

                </div>

                <div className="my-3">
                    <div className="mx-auto w-[70%] flex flex-wrap items-center justify-center gap-3 sm:gap-2 md:gap-3 max-w-xs">
                        <button className="bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 px-5 py-2.5 rounded-full text-sm shadow-md hover:scale-105 transition-transform duration-300 text-white cursor-pointer w-full sm:w-auto">
                            Connect with me
                        </button>
                        <button className="px-5 py-2.5 border-2 border-white text-white rounded-full text-sm w-full sm:w-auto hover:border-purple-900 transition-all duration-200 ease-in-out cursor-pointer">
                            My Resume
                        </button>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Header