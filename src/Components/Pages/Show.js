import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Show = () => {

    // 1. Configurar hooks
    const [notes, setNotes] = useState( [] )

    // 2. Referencias a la DB firestore
    const notesCollection = collection(db, "notes")

    // 3. Función para mostrar TODOS los docs
    const getNotes = async () => {
        const data = await getDocs(notesCollection)

        setNotes(
            data.docs.map( (doc) => ( {...doc.data(), id:doc.id}))
        )
    }

    // 4. Función para eliminar un doc
    const deleteNote = async (id) => {
        const noteDoc = doc(db, "notes", id)
        await deleteDoc(noteDoc)
        getNotes()
    }

    // 5. Funcion de confirmación para Sweet Alert 2
    const confirmDelete = (id) => {
        MySwal.fire({
            title: '¿remove the note?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteNote(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    // 6. Uso de useEffect
    useEffect( () => { 
        getNotes()
        // eslint-disable-next-line
    }, [] )
    // 7. Devolver la vista del componente
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='d-grid gap-2'>
                        <Link to="/create" className='btn btn-seecondary mt-2 mb-2' > Create </Link>
                    </div>

                    <table className='table table-dark table-hover'>

                        <tbody>
                            {notes.map((note) => (
                                <tr key={note.id}>
                                    <td>{note.Titulo}</td>
                                    <td>{note.Descripcion}</td>
                                    <td>{note.Prioridad}</td>
                                    <td>{note.Vencimiento}</td>
                                    <td>
                                        <Link to={`/edit/${note.id}`} className='btn btn-light'> <i className="fa-solid fa-pen"></i> </Link>
                                        <button onClick={() => deleteNote(note.id)} className='btn btn-danger'> <i className="fa-solid fa-trash"></i> </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Show
