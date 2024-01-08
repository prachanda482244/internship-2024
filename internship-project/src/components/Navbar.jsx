import { FaSortDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {

    const academyListItens = [
        { name: 'About Academy' },
        { name: 'Academic Program' },
        { name: 'Why Hrit' },
        { name: 'Hrit Team' },
        { name: 'Blog' },
    ]

    const admissionListItems = [
        { name: 'Pre registration form +2' },
        { name: 'Admission Procedure' },
        { name: 'Scholarship Schemas' },
        { name: 'Hotel Management' },
        { name: 'Business Studies' },
        { name: 'Computer Science' },
    ]
    const ecaCCVListItems = [
        { name: "Hrit Student's Council" },
        { name: "Executive body" },
        { name: "Research" },
    ]

    const galleryListItems = [
        { name: "Photo Gallery" },
        { name: "Video Gallery" },
    ]
    const loginListItems = [
        { name: 'Login Exam' },
        { name: 'Login G suite' },
        { name: 'E-learning MS' },
        { name: 'Login MS 365' },
    ]
    return (
        <nav className='bg-blue-700 flex border items-center '>
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
