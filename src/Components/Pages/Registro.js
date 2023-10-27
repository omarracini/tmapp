import React from 'react'
import { useForm } from 'react-hook-form';

const Registro = () => {

  
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {

  }

  return <div className='container'>
    <section className='vh-100 gradient-custom'>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></script>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row justify-content-center mt-5 text-center">
          <h2>REGISTRO</h2>
          <p>Por favor, introduce tus datos para registrarte!</p>
          <div>
            <input type='text' {...register('nombre', {
              required: true,
              maxLength: 25
            })}/>
            <label>Nombre</label>
            {errors.nombre?.type === 'required' && <p>Completa este campo</p>}
          </div>
          <div>
            <input type='text' {...register('apellido', {
              required: true,
              maxLength: 25
            })}/>
            <label>Apellido</label>
            {errors.apellido?.type === 'required' && <p>Completa este campo</p>}
          </div>
          <div>
            <input type='text' {...register('correo', {
              required: true,
              pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
            })}/>
            <label>Correo eléctronico</label>
            {errors.correo?.type === 'required' && <p>Completa este campo</p>}
            {errors.correo?.type === 'pattern' && <p>Ingresa un correo valido</p>}
          </div>
          <div>
            <input type='text' {...register('contraseña', {
              required: true
            })}/>
            <label>Contraseña</label>
            {errors.contraseña?.type === 'required' && <p>Completa este campo</p>}
          </div>
          <div>
            <label>Acepto términos y condiciones</label>
            <input type='checkbox' {...register('t&c')}/>
          </div>
          <input type='submit' value='Registrarse'/>
        </div>
      </form>
    </section>
  </div>
}

export default Registro;