import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInput } from '../components'
import '../styles/styles.css'

const FormikAbstraction = () => {
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
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='Fernando'
            />
            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='Herrera'
            />
            <MyTextInput
              label='E-mail'
              name='email'
              type='email'
              placeholder='john@google.com'
            />
            <MySelect name='jobType' label='Job Type'>
              <option value=''>Pick a job</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>It Senior</option>
              <option value='it-junior'>It Junior</option>
            </MySelect>
            <MyCheckbox name='terms' label='Terms and Conditions' />
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikAbstraction
