const FormikHeaderComponent = ({ heading }) => {
    return (
        <div>
            <h1 className='py-3  px-10 bg-red-400 uppercase text-nowrap text-white font-semibold'>
                {heading}
            </h1>
        </div>
    )
}

export default FormikHeaderComponent
