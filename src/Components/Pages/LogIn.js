import React from 'react'
import { useForm } from 'react-hook-form';

const Login = () => {

  const { register, handleSubmit } = useForm();
  return <div>
    <section>
      <h1>LogIn</h1>
      <form>
        <div>
          <label>Correo eléctronico</label>
          <input type='text' name=''/>
        </div>
        <div>
          <label>Contraseña</label>
          <input type='text' name=''/>
        </div>
        <input type='submit' value='LogIn'/>
      </form>
    </section>
  </div>

}

export default Login;
