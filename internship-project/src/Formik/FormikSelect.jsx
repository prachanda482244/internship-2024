import { Field } from "formik"

const FormikSelect = ({ name, genders }) => {

    return (
        <Field name={name}>
            {
                ({ field, meta }) => {
                    return (
                        <div className="flex flex-col mt-3  w-full md:w-1/2 gap-2 md:gap-0 px-3 mb-6 md:mb-0">
                            <label className="block mb-2 ml-1 sm:w-32 min-h-5 md:min-h-0 md:w-full uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor={name}>Gender</label>
                            <select
                                className=" tracking-tighter shadow-sm block w-full bg-blue-800 font-bold text-white border-black  border rounded py-3 px-4 mb-3 uppercase leading-tight focus:outline-none  "

                                {...field}
                                id={name}
                                value={meta.value}
                                onChange={field.onChange}
                            >
                                {genders?.map((gender) => (
                                    <option
                                        className="bg-black lowercase p-4 rounded-lg text-lg text-white font-semi-bold"
                                        key={gender.value}
                                        value={gender.value}>{gender.label}</option>
                                ))}
                            </select>
                        </div>
                    )
                }
            }
        </Field>
    )
}

export default FormikSelect
