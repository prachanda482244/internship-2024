import Background from "../components/Backgground"
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import leftSideImage from '../assets/images/left-side-image.jpg'
import middleImage from '../assets/images/middle-image.jpg'
import rightSideImage from '../assets/images/right-side-image.jpg'
const Home = () => {
    return (
        <div >
            <Background />
            <div className="max-w-7xl h-screen bg-white mx-auto flex border shadow-md relative z-10 ">
                <div className="flex flex-col bg-gray-300">
                    <div className="flex justify-between py-4 px-10 bg-orange-500 items-center">
                        <h1 className="text-2xl font-semibold text-slate-100 uppercase">Follow:</h1>
                        <div className="flex gap-2  items-center cursor-pointer ">
                            <FaFacebookF className="hover:text-white h-6 w-6" />
                            <FaTwitter className="hover:text-white h-6 w-6" />
                            <FaYoutube className="hover:text-white h-6 w-6" />
                            <FaInstagram className="hover:text-white h-6 w-6" />
                            <FaLinkedinIn className="hover:text-white h-6 w-6" />
                        </div>
                    </div>
                    <div className="p-4">
                        <img width={350} height={300} src={leftSideImage} alt="left" />
                    </div>
                </div>

                {/* Middle Section */}
                <div className="flex flex-col">
                    <div className="flex justify-start ml-8 py-4 items-center">
                        <h1 className="text-xl tracking-tight uppercase font-semibold text-sky-500">Welcome to <span className="text-gray-500">hrit academy</span></h1>
                    </div>
                    <hr className="bg-yellow-500 h-1" />

                    <div className="p-6">
                        <img width={600} height={400} src={middleImage} alt="" />
                    </div>
                </div>
                <div>
                    <div className="bg-yellow-500 p-4">
                        <h1 className="text-xl tracking-tight uppercase font-semibold text-slate-200">More</h1>
                    </div>
                    <div>
                        <div className="p-5 h-full bg-gray-300 ">
                            <div>
                                <h2 className="bg-blue-600 text-white tracking-tight font-semibold text-center p-2">CEO&apos;s Message</h2>
                                <img height={300} width={250} src={rightSideImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home
