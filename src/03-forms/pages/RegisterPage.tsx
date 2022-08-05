import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

const RegisterPage = () => {
  const {
    handleChange,
    isValidEmail,
    resetForm,
    name,
    email,
    password1,
    password2,
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={name}
          onChange={handleChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este Campo es necesario</span>}
        <input
          type='text'
          name='email'
          placeholder='email'
          value={email}
          onChange={handleChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Email no es valido</span>}
        <input
          type='password'
          name='password1'
          placeholder='Password'
          value={password1}
          onChange={handleChange}
        />
        {password1.trim().length <= 0 && <span>Este Campo es necesario</span>}
        {password1.trim().length < 6 && (
          <span>Contraseña debe ser de 6 letras o más</span>
        )}
        <input
          type='password'
          name='password2'
          placeholder='Repeat Password'
          value={password2}
          onChange={handleChange}
        />
        {password2.trim().length <= 0 && <span>Este Campo es necesario</span>}
        {password2.trim() !== password1.trim() && (
          <span>Las contraseñas no son iguales</span>
        )}
        <button type='submit'>Create</button>
        <button type='button' onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
