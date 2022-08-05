import { ErrorMessage, useField } from 'formik'

interface Props {
  label: String
  name: string
  [x: string]: any
}

const MyCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' })

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input type='checkbox' id={props.name} {...field} {...props} />
      <ErrorMessage name={props.name} component='span' />
      {/* {meta.touched && meta.error && (
        <span className='error'>{meta.error}</span>
      )} */}
    </>
  )
}

export default MyCheckbox
