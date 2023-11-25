import React, { useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'

const Edit = () => {

    const [ titulo, setTitulo ] = useState('')
    const [ descripcion, setDescripcion ] = useState('')
    const [ prioridad, setPrioridad ] = useState ('')
    const [ vencimiento, setVencimiento ] = useState('')
    
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const note = doc(db, "notes", id)
        const data = {
            titulo: titulo, 
            descripcion: descripcion,
            prioridad: prioridad,
            vencimiento: vencimiento
        }
        await updateDoc(note, data)
        navigate('/')
    }

    const getNoteById = async (id) => {
        const note = await getDoc( doc(db, "notes", id) )
        if(note.exists()) {
            setTitulo(note.data().titulo)
            setDescripcion(note.data().descripcion)
            setPrioridad(note.data().prioridad)
            setVencimiento(note.data().vencimiento)
        }else{
            
        }
    }

    useEffect( () => {
        getNoteById(id)
    }, [] )

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Editar Tarea</h1>
                    <form onSubmit={ update }>
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
                        <button type='summit' className='btn btn-primary'> Actualizar Tarea </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit
