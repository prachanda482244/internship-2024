import { Field } from "formik";

const FormikInput = ({ name, placeholder, type, required, labelName, ...props }) => {
    return (
        <Field name={name}>
            {
                ({ field, meta }) => {
                    return (
                        <div className='flex flex-col  mt-3  w-full md:w-1/2 gap-2 md:gap-0 px-3 mb-6 md:mb-0'>
                            <div>
                                <label className="block mb-2 ml-1 sm:w-32 min-h-5 md:min-h-0 md:w-full uppercase tracking-wide text-gray-700 text-xs font-bold " >
                                    {labelName}
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    className="appearance-none tracking-tighter block w-full bg-white border-red-700 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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

                            <p className='text-red-600 ml-2 h-5  text-xs italic '>
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
