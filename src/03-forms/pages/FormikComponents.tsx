import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

const FormikComponents = () => {
  return (
    <div>
      <h1>Formik components</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Should contain 15 characaters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(15, 'Should be 15 characters or less')
            .required('Required'),
          email: Yup.string().email('Email is not valid').required('Required'),
          terms: Yup.boolean().oneOf([true], 'Must accept terms'),
          jobType: Yup.string()
            .required('Required')
            .notOneOf(['it-junior'], 'Job without openings'),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='firstName' component='span' />
            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage name='lastName' component='span' />
            <label htmlFor='email'>Email</label>
            <Field name='email' type='text' />
            <ErrorMessage name='email' component='span' />
            <label htmlFor='jobType'>Job Type</label>
            <Field name='jobType' as='select'>
              <option value=''>Pick a job</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>It Senior</option>
              <option value='it-junior'>It Junior</option>
            </Field>
            <ErrorMessage name='jobType' component='span' />

            <label htmlFor='terms'>Terms & Conditions</label>
            <Field name='terms' type='checkbox' id='terms' />
            <ErrorMessage name='terms' component='span' />
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikComponents
