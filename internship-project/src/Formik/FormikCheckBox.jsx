import { Field } from "formik"
const FormikCheckBox = ({ name, label }) => {
    return (
        <Field name={name}>
            {
                ({ field, form, meta }) => {
                    return (
                        <div className="flex w-full border-red-900  items-center gap-2">
                            <label htmlFor={name} className="block  ml-1 uppercase tracking-wide text-gray-700 text-sm font-bold">{label}</label>
                            <input type="checkbox" className="h-5 w-5" onChange={field.onChange} {...field} name={name} />
                        </div>
                    )
                }
            }
        </Field>
    )
}
export default FormikCheckBox
