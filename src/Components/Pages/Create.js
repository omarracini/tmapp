import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'

const Create = () => {

  const [ titulo, setTitulo ] = useState('')
  const [ descripcion, setDescripcion ] = useState('')
  const [ prioridad, setPrioridad ] = useState ('')
  const [ vencimiento, setVencimiento ] = useState('')
  const navigate = useNavigate();
  const notesCollection = collection(db, "notes")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( notesCollection, { 
      titulo: titulo, 
      descripcion: descripcion,
      prioridad: prioridad,
      vencimiento: vencimiento
    })
    navigate('/')
  } 

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Crear Tarea</h1>
          <form onSubmit={ store }>
            <div className='mb-3'>
              <label className='form-label'>Titulo</label>
              <input 
                value={titulo}
                onChange={ (e) => setTitulo(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Descripción</label>
              <input 
                value={descripcion}
                onChange={ (e) => setDescripcion(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Prioridad</label>
              <input 
                value={prioridad}
                onChange={ (e) => setPrioridad(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Vencimiento</label>
              <input 
                value={vencimiento}
                onChange={ (e) => setVencimiento(e.target.value)}
                type='date'
                className='form-control'
              />
            </div>
            <button type='summit' className='btn btn-primary'> Crear Tarea </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
