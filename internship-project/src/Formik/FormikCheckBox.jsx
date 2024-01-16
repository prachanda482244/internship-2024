import { Field } from "formik"
const FormikCheckBox = ({ name, label }) => {
    return (
        <Field name={name}>
            {
                ({ field, form, meta }) => {
                    return (
                        <div className="flex items-center gap-2">
                            <label htmlFor={name} className="text-semibold  text-slate-500 uppercase">{label}</label>
                            <input type="checkbox" className="h-5 w-5" onChange={field.onChange} {...field} name={name} />
                        </div>
                    )
                }
            }
        </Field>
    )
}
export default FormikCheckBox
