import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Should contain 15 characaters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(15, 'Should be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Email is not valid').required('Required'),
    }),
  })
  return (
    <div>
      <h1>Formik basic tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' id='firstName' {...getFieldProps('firstName')} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' id='lastName' {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormikYupPage
