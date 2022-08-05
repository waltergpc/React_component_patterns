import { ErrorMessage, useField } from 'formik'

interface Props {
  label: String
  name: string
  [x: string]: any
}

const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props)

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <select className='text-input' id={props.name} {...field} {...props} />
      <ErrorMessage name={props.name} component='span' />
      {/* {meta.touched && meta.error && (
        <span className='error'>{meta.error}</span>
      )} */}
    </>
  )
}

export default MySelect
