import { Field } from "formik";

const FormikInput = ({ name, placeholder, type, required, labelName, ...props }) => {
    return (
        <Field name={name}>
            {
                ({ field, meta }) => {
                    return (
                        <div className='flex flex-col  mt-3 h-24  md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className="block mb-2 ml-1 uppercase tracking-wide text-gray-700 text-xs font-bold " >
                                {labelName}
                            </label>

                            <div className="relative">
                                <input
                                    className={`appearance-none block w-full bg-white border-red-700 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
                                    type={type}
                                    name={name}
                                    onChange={field.onChange}
                                    {...field}
                                    value={meta.value}
                                    placeholder={placeholder}
                                    {...props}
                                />
                                <p className="text-red-900 absolute top-0 right-2 text-lg ">{required && !meta.error ? '*' : ''}</p>
                            </div>

                            <p className='text-red-600 ml-2  text-xs italic '>
                                {meta.touched && meta.error ? meta.error + ' *' : ''}
                            </p>
                        </div>
                    )
                }
            }
        </Field>
    )
}
export default FormikInput
