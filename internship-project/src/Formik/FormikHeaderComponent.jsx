const FormikHeaderComponent = ({ heading }) => {
    return (
        <div className=" w-full md:w-auto">
            <h1 className='py-3 md:w-full px-10 bg-red-400 uppercase text-wrap text-white font-semibold'>
                {heading}
            </h1>
        </div>
    )
}

export default FormikHeaderComponent
