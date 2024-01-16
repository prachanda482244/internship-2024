import { Field } from "formik";

const FormikInput = ({ name, placeholder, type, required, w, ...props }) => {
    return (
        <Field name={name}>
            {
                ({ field, meta }) => {
                    return (
                        <div className='flex flex-col relative h-20 p-2'>
                            <input
                                className={`border-red-500 border text-slate-800 text-left placeholder:font-semibold w-${w ? w : 96} p-2 rounded focus:outline-red-600`}
                                type={type}
                                name={name}
                                onChange={field.onChange}
                                {...field}
                                value={meta.value}
                                placeholder={placeholder}
                                {...props}
                            />

                            <p className="text-red-900 absolute text-3xl -right-1 -top-2">{required && !meta.error ? '*' : ''}</p>
                            <p className='text-red-600 font-semibold text-sm '>
                                <em>
                                    {meta.touched && meta.error ? meta.error + ' *' : ''}
                                </em>
                            </p>
                        </div>
                    )
                }
            }
        </Field>
    )
}
export default FormikInput
