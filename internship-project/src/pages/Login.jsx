const Login = () => {
    return (
        <div>
            <form className="p-6 flex flex-col items-start justify-center gap-4 bg-gray-200">
                {/* Heading */}
                <div className="flex items-center gap-2 ">
                    <h1 className="bg-red-400 py-2 px-10 text-white font-semibold">1. CHILD’S PERSONAL INFORMATION: </h1>
                    <div className="text-sm font-light ">
                        <div className="bg-red-500 border h-1 w-[60vw]"></div>
                        <p>
                            <em>
                                (Please print clearly with
                            </em>
                        </p>
                        <p>
                            <em>
                                black ink in BLOCK letters)
                            </em>
                        </p>
                    </div>
                </div>
                <div className="name flex gap-3 items-center">
                    <div>
                        <label htmlFor="name" className="text-sm w-28 p-2 flex flex-col font-semibold text-right" >Name
                            <span>
                                (English)
                            </span>
                        </label>
                    </div>
                    <div className="flex items-center gap-2 justify-between ">
                        <input type="text" className="py-2 border  w-96 border-red-500 focus:outline-red-600 px-6 rounded-sm" placeholder="First" />
                        <input type="text" className="py-2 border w-96 border-red-500 focus:outline-red-600 px-6 rounded-sm" placeholder="Middle" />
                        <input type="text" className="py-2 border w-96 border-red-500 focus:outline-red-600  px-6 rounded-sm" placeholder="Last" />
                    </div>
                </div>

                <div className=" flex items-center  gap-3">
                    <div>
                        <label htmlFor="name" className="  text-sm w-28 p-2 flex flex-col font-semibold text-right" >Name
                            <span>
                                (Devanagari)
                            </span>
                        </label>
                    </div>
                    <div >
                        <input type="text" className="py-2 border  border-red-500 focus:outline-red-600 px-6  rounded-sm w-[77vw]" />
                    </div>
                </div>

                <div className=" flex items-center shrink  gap-3">
                    <div>
                        <label htmlFor="name" className="  text-sm w-28 p-2 flex flex-col font-semibold text-right" >Gender
                        </label>
                    </div>
                    <div >
                        <input type="text" className="py-2 border  border-red-500 focus:outline-red-600 px-6 w-80  rounded-sm " />
                    </div>
                    <div>
                        <label htmlFor="name" className="  text-sm  p-2 flex flex-col font-semibold text-right" >Nationality
                        </label>
                    </div>
                    <div >
                        <input type="text" className="py-2 ml-2 border  border-red-500 focus:outline-red-600 px-6  w-[48vw] rounded-sm " />
                    </div>
                </div>


                <div className=" flex items-center ">
                    <div className="flex items-center">
                        <div >
                            <label htmlFor="name" className="  text-sm w-28 p-2 flex flex-col font-semibold text-right" >Date of
                                <span>
                                    Birth BS
                                </span>
                            </label>
                        </div>
                        <div className="flex gap-2 items-center ml-3" >
                            <input type="text" className="py-2 border  w-44 border-red-500 focus:outline-red-600 px-6 rounded-sm" placeholder="Day" />
                            <input type="text" className="py-2 border w-44 border-red-500 focus:outline-red-600 px-6 rounded-sm" placeholder="Month" />
                            <input type="text" className="py-2 border w-44 border-red-500 focus:outline-red-600  px-6 rounded-sm" placeholder="Year" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                            <label htmlFor="name" className="  text-sm p-2 flex flex-col font-semibold text-right" >Date of
                                <span>
                                    Birth AD
                                </span>
                            </label>
                        </div>
                        <div className="flex gap-2 items-center  " >
                            <input type="text" className="py-2 border  w-44 border-red-500 focus:outline-red-600 px-6 rounded-sm" placeholder="Day" />
                            <input type="text" className="py-2 border w-44 border-red-500 focus:outline-red-600 px-6 rounded-sm" placeholder="Month" />
                            <input type="text" className="py-2 border w-44 border-red-500 focus:outline-red-600  px-6 rounded-sm" placeholder="Year" />
                        </div>
                    </div>
                </div>

                <div className=" w-full flex flex-col  ">
                    <h1 className="ml-10 text-red-500 ">PLEASE CHECK THE GRADE YOU ARE APPLYING FOR
                    </h1>
                    <div className=" flex items-center justify-center gap-48 p-3">
                        <div className="border border-red-700 w-80 p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <input className="w-5 h-5 border-red-400 border" type="checkbox" />Grade One*
                            </div>
                            <div className="flex items-center gap-2">
                                <input className="w-5 h-5 border-red-400 border" type="checkbox" />Other
                            </div>
                        </div>
                        <div className="flex items-center  w-[600px]" >
                            <label htmlFor="specify grade" className="w-40">Specify grade</label>
                            <input type="text" className="py-2 border  border-red-500 focus:outline-red-600 px-6 rounded-sm w-full" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
