import { FaSortDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { academyListItens, admissionListItems, ecaCCVListItems, galleryListItems, loginListItems } from "../constants/constant";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(true)
    return (
        <nav className='bg-blue-700 flex flex-col border  items-center relative z-[999999] '>
            <div className="flex  justify-between border-2 w-full items-center px-4">
                <div className="lg:hidden ">
                    <Banner height={150} width={200} />
                </div>

                <div className="cursor-pointer  flex items-center lg:hidden " onClick={() => setToggleNav(!toggleNav)}>
                    {
                        toggleNav ? <GiHamburgerMenu className="h-6 w-6" /> : <RxCross2 className="h-6 w-6" />
                    }
                </div>
            </div>

            <div>

                <ul className={` gap-3 ${toggleNav ? 'hidden' : 'block'} p-2  lg:flex items-center justify-center space-x-6 text-slate-300  font-semibold text-lg tracking-tighter w-[80vw] mx-auto
                `}>
                    <Link to='/'>Home</Link>
                    <div className="flex relative group">
                        <li className="group-hover:text-slate-100 flex items-center justify-center ">Academy <FaSortDown /> </li>
                        <ul className="absolute hidden top-8  group-hover:flex flex-col w-52 p-4 z-50 lg:-left-4 right-28 max-sm:top-1 bg-blue-600 gap-4">
                            {academyListItens.map((list) => (
                                <li key={list.name}>{list.name}</li>
                            ))
                            }
                        </ul>
                    </div>

                    <div className="flex relative group">
                        <li className="group-hover:text-slate-100 flex items-center justify-center ">Admission <FaSortDown /> </li>
                        <ul className="absolute hidden top-8  group-hover:flex flex-col w-52 p-4 z-50 lg:-left-4 right-28 max-sm:top-1 bg-blue-600 gap-4">
                            {admissionListItems.map((list) => (
                                <li key={list.name}>{list.name}</li>
                            ))
                            }
                        </ul>
                    </div>


                    <Link to='/alummi'>Alummi</Link>

                    <div className="flex relative group">
                        <li className="group-hover:text-slate-100 flex items-center justify-center ">ECA/CCA <FaSortDown /> </li>
                        <ul className="absolute hidden top-8  group-hover:flex flex-col w-52 p-4 z-50 lg:-left-4 right-28 max-sm:top-1 bg-blue-600 gap-4">
                            {ecaCCVListItems.map((list) => (
                                <li key={list.name}>{list.name}</li>
                            ))
                            }
                        </ul>
                    </div>
                    <Link to='/event'>Event</Link>
                    <Link to='/news'>News</Link>
                    <Link to='/notice'>Notice</Link>
                    <Link to='/articles'>Articles</Link>

                    <div className="flex relative group">
                        <li className="group-hover:text-slate-100 flex items-center justify-center ">Gallery <FaSortDown /> </li>

                        <ul className="absolute hidden top-8  group-hover:flex flex-col w-52 p-4 z-50 lg:-left-4 right-28 max-sm:top-1 bg-blue-600 gap-4">
                            {galleryListItems.map((list) => (
                                <li key={list.name}>{list.name}</li>
                            ))
                            }
                        </ul>
                    </div>
                    <Link to='/download'>Download</Link>

                    <div className="flex relative group">
                        <li className="group-hover:text-slate-100 flex items-center justify-center ">Login <FaSortDown /> </li>
                        <ul className="absolute hidden top-8  group-hover:flex flex-col w-52 p-4 z-50 lg:-left-4 right-28 max-sm:top-1 bg-blue-600 gap-4">
                            {loginListItems.map((list) => (
                                <li key={list.name}>{list.name}</li>
                            ))
                            }
                        </ul>
                    </div>
                    <li>contact</li>
                    <div className="w-96 border rounded-lg flex items-center justify-center gap-3 p-2">
                        <IoIosSearch color="white" className="h-6 w-6 cursor-pointer" />
                        <input type="text" className="lg:hidden text-black py-2 px-6 focus:outline-blue-600 rounded-lg " placeholder="Search Here" />
                    </div>
                </ul>
            </div>



        </nav>
    )
}

export default Navbar
