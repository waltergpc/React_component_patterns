import * as Yup from 'yup'
import '../styles/styles.css'
import { Form, Formik } from 'formik'
import { MyTextInput } from '../components'

const RegisterFormikPage = () => {
  // const {
  //   handleChange,
  //   isValidEmail,
  //   resetForm,
  //   name,
  //   email,
  //   password1,
  //   password2,
  // } = useForm({
  //   name: '',
  //   email: '',
  //   password1: '',
  //   password2: '',
  // })

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  // }

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password1: '', password2: '' }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, '· characters at least')
            .required('Requerido'),
          email: Yup.string().email('Check email format').required('Required'),
          password1: Yup.string()
            .min(6, '& characters minimum')
            .required('Required'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Passwords are not the same')
            .required('Required'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              label='Name'
              name='name'
              type='text'
              placeholder='John'
            />
            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='john@gmail.com'
            />
            <MyTextInput
              label='Password'
              name='password1'
              type='password'
              placeholder='######'
            />
            <MyTextInput
              label='Confirm Password'
              name='password2'
              type='password'
              placeholder='######'
            />
            <button type='submit'>Create</button>
            <button type='button' onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterFormikPage
