import Heading from "./Heading"
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";



const Contact = () => {


    const handleSubmit = async (e) => {

        e.preventDefault()
        const form = e.target;
        const data = new FormData(form)

        try {

            const response = await fetch("https://formspree.io/f/xwpqneze", {
                method: 'POST',
                body: data,
                headers: {
                    Accept: "application/json",
                }

            })

            if (response.ok) {
                toast.success("Form submitted successfuly")
                form.reset()
            }

        } catch (error) {
            console.log(error)
            toast.error("Something is wrong please try again later")
        }
    }


    return (

        <div id="Contact">
            <div className="mt-10 md:mt-15">
                <Heading heading={'Get in touch'} />
            </div>

            <div className="mt-10 md:mt-20 flex flex-col gap-0 md:flex-row items-center justify-between md:gap-7">
                {/* left */}
                <div className="text-white w-full md:w-[40%]">
                    <div>
                        <h1 className="text-4xl font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 text-transparent bg-clip-text">Let's talk</h1>
                        <p className="my-5 text-gray-300 font-semibold">I'm currently avaliable to take on new projects, so feel free to send me
                            a message about anything that you want me to work on. You can contact anytime.
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 text-gray-300 my-5 cursor-pointer">
                            <div className="text-3xl"><MdEmail /></div>
                            <p>hussainkhan86341674@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300 my-5 cursor-pointer">
                            <div className="text-3xl"><FaPhoneVolume /> </div>
                            <p>03434839106</p>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300 my-5 cursor-pointer">
                            <div className="text-3xl"><FaLocationDot /></div>
                            <p>Gilgit-Baltistan</p>
                        </div>

                    </div>
                </div>

                {/* right */}
                <form onSubmit={handleSubmit} className="mt-10 md:mt-0 w-full md:w-[55%]">
                    <div className="flex flex-col gap-2 my-4">
                        <label className="text-white text-sm">Your Name</label>
                        <input className="bg-[rgb(50,50,60)] p-3 text-gray-300 rounded" name="name" type="text" placeholder="Enter you name" required />
                    </div>
                    <div className="flex flex-col gap-2.5 my-4">
                        <label className="text-white text-sm">Your Email</label>
                        <input className="bg-[rgb(50,50,60)] p-3 text-gray-300 rounded" name="email" type="email" placeholder="Enter you email" required />
                    </div>
                    <div className="flex flex-col gap-2.5 my-4">
                        <label className="text-white text-sm">Write your message</label>
                        <textarea className="bg-[rgb(50,50,60)] p-3 text-gray-300 rounded" name="message" type="text" placeholder="Write your message here" required />
                    </div>


                    <button type="submit" className="bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 px-5 py-3 rounded-full font-xs shadow-md 
                    hover:scale-105 transition-transform duration-300 cursor-pointer text-white">Submit now</button>

                </form>
            </div>


        </div>
    )
}

export default Contact