import { useState } from "react"

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)

    return (

        <div className="flex items-center justify-between mt-6 text-white">
            <div>
                <h1 className="text-4xl bold font-semibold ">Sartaj</h1>
            </div>

            <div className="hidden md:flex gap-4 lg:gap-5">
                <a className="cursor-pointer hover:underline transition-all duration-300 ease-in-out" href="#Home">Home</a>
                <a className="cursor-pointer hover:underline transition-all duration-300 ease-in-out" href="#About">About me</a>
                <a className="cursor-pointer hover:underline transition-all duration-300 ease-in-out" href="#Services">Services</a>
                <a className="cursor-pointer hover:underline transition-all duration-300 ease-in-out" href="#Portfolio">Portfolio</a>
                <a className="cursor-pointer hover:underline transition-all duration-300 ease-in-out" href="#Contact">Contact</a>
            </div>

            {/* side bar */}

            <div className={`fixed top-0 right-0 bottom-0 z-50 bg-[rgb(31,0,22)] 
            transition-all duration-300 ease-in-out overflow-hidden md:hidden ${sidebar ? 'w-[78%]' : 'w-0'}`}>

                <div
                    onClick={() => setSidebar(false)}
                    className="flex justify-end mt-4 mr-4 cursor-pointer"
                >
                    <img className="w-8" src="/delete.png" alt="Close" />
                </div>

                <div className={`flex flex-col gap-5 pt-10 pl-8 pr-8 text-white font-semibold transition-opacity duration-300 ${sidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                >
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Services">Services</a>
                    <a href="#Portfolio">Portfolio</a>
                    <a href="#Contact">Contact</a>
                </div>
            </div>


            <div className="hidden md:block" >
                <button className="bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 px-5 py-3 rounded-full font-xs shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
                    Connect With Me
                </button>
            </div>
            <div onClick={() => setSidebar(true)} className="md:hidden cursor-pointer">
                <img className="w-10" src="/stack.png" alt="bar" />
            </div>

        </div>
    )
}

export default Navbar