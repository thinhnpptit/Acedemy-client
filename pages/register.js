import { useState } from 'react'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.table({ name, email, password })
  }

  return (
    <>
      <h1 className='jumbotron p-4 text-center bg-primary'>Register</h1>

      <div className='container col-md-4 offset-md-4 pb-5'>
        <form onSubmit={handleSubmit}>
          <input
            className='form-control mb-4 p-4'
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className='form-control mb-4 p-4'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className='form-control mb-4 p-4'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='col-md-12 btn btn-primary p-2' type='submit'>
            Register
          </button>
        </form>
      </div>
    </>
  )
}

export default Register
