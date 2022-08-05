import '../styles/styles.css'
import { FormikErrors, useFormik } from 'formik'

interface FormValues {
  firstName: string
  lastName: string
  email: string
}

const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {}
    if (!firstName.trim()) {
      errors.firstName = 'Required'
    } else if (firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less'
    }

    if (!lastName) {
      errors.lastName = 'Required'
    } else if (lastName.length > 10) {
      errors.lastName = 'Last name should be less than 10 characters'
    }
    if (!email) {
      errors.email = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
    return errors
  }

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => {
        console.log(values)
      },
      validate,
    })
  return (
    <div>
      <h1>Formik basic tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          value={values.firstName}
          id='firstName'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          value={values.lastName}
          id='lastName'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          value={values.email}
          id='email'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormikBasicPage
