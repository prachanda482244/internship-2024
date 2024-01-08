import { FaSortDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { academyListItens, admissionListItems, ecaCCVListItems, galleryListItems, loginListItems } from "../constants/constant";

const Navbar = () => {

    return (
        <nav className='bg-blue-700 flex border items-center relative z-[999999] '>
            <ul className="flex gap-3 p-2 max-w-7xl items-center justify-center space-x-6 text-slate-300 font-semibold text-lg tracking-tighter  mx-auto">
                <li>Home</li>
                <div className="flex relative group">
                    <li className="group-hover:text-slate-100 flex items-center justify-center ">Academy <FaSortDown /> </li>
                    <ul className="absolute hidden top-8  group-hover:flex flex-col w-52 p-4 -left-4  bg-blue-600 gap-4">
                        {academyListItens.map((list) => (
                            <li key={list.name}>{list.name}</li>
                        ))
                        }
                    </ul>
                </div>

                <div className="flex relative group">
                    <li className="group-hover:text-slate-100 flex items-center justify-center ">Admission <FaSortDown /> </li>
                    <ul className="absolute hidden top-8  group-hover:flex flex-col w-52 p-4 -left-4  bg-blue-600 gap-4">
                        {admissionListItems.map((list) => (
                            <li key={list.name}>{list.name}</li>
                        ))
                        }
                    </ul>
                </div>


                <li>Alummi</li>

                <div className="flex relative group">
                    <li className="group-hover:text-slate-100 flex items-center justify-center ">ECA/CCA <FaSortDown /> </li>
                    <ul className="absolute hidden top-8  group-hover:flex flex-col w-52 p-4 -left-4  bg-blue-600 gap-4">
                        {ecaCCVListItems.map((list) => (
                            <li key={list.name}>{list.name}</li>
                        ))
                        }
                    </ul>
                </div>
                <li>Event</li>
                <li>News</li>
                <li>Notice</li>
                <li>Articles</li>

                <div className="flex relative group">
                    <li className="group-hover:text-slate-100 flex items-center justify-center ">Gallery <FaSortDown /> </li>

                    <ul className="absolute hidden top-8  group-hover:flex flex-col w-52 p-4 -left-4  bg-blue-600 gap-4">
                        {galleryListItems.map((list) => (
                            <li key={list.name}>{list.name}</li>
                        ))
                        }
                    </ul>
                </div>
                <li>Download</li>

                <div className="flex relative group">
                    <li className="group-hover:text-slate-100 flex items-center justify-center ">Login <FaSortDown /> </li>
                    <ul className="absolute hidden top-8  group-hover:flex flex-col w-52 p-4 -left-4  bg-blue-600 gap-4">
                        {loginListItems.map((list) => (
                            <li key={list.name}>{list.name}</li>
                        ))
                        }
                    </ul>
                </div>
                <li>contact</li>
            </ul>
            <div>
                <IoIosSearch color="white" />
            </div>
        </nav>
    )
}

export default Navbar
