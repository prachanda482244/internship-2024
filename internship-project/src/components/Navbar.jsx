
const Navbar = () => {
    return (
        <nav className='bg-blue-500'>
            <ul className="flex gap-4 p-2 max-w-7xl items-center justify-center space-x-7 text-slate-100 font-semibold text-lg tracking-tighter  mx-auto">
                <li>Home</li>
                <div className="flex relative group">
                    <li className="group-hover:text-blue-600  ">Academy </li>
                    <ul className="absolute hidden top-8  group-hover:flex flex-col w-52 p-4 -left-4  bg-blue-600 gap-4">
                        <li>About Academy</li>
                        <li>Academic Program</li>
                        <li>Why Hrit</li>
                        <li>Hrit Team</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="flex relative group">
                    <li className="group-hover:text-blue-600  ">Admission </li>
                    <ul className="absolute hidden top-8  group-hover:flex flex-col w-52 p-4 -left-4  bg-blue-600 gap-4">
                        <li>Pre registration form +2</li>
                        <li>Academic Program</li>
                        <li>Why Hrit</li>
                        <li>Hrit Team</li>
                        <li>Blog</li>
                    </ul>
                </div>


                <li>Alummi</li>
                <li>ECA/CCA</li>
                <li>Event</li>
                <li>News</li>
                <li>Notice</li>
                <li>Articles</li>

                <ul>
                    <li>Gallery</li>
                </ul>
                <ul>
                    <li>Download</li>
                </ul>
                <ul>
                    <li>Login</li>
                </ul>

                <li>contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
