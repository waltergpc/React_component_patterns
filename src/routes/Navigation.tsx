import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom'
import {
  FormikAbstraction,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  RegisterPage,
} from '../03-forms/pages'
import logo from '../logo.svg'

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='logo' />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/'
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/yup'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-components'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-abstraction'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Abstraction
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<RegisterPage />} />
          <Route path='/formik' element={<FormikBasicPage />} />
          <Route path='/yup' element={<FormikYupPage />} />
          <Route path='/formik-components' element={<FormikComponents />} />
          <Route path='/formik-abstraction' element={<FormikAbstraction />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Navigation
