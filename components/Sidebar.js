import Image from 'next/image'
import {useState, useContext} from 'react'
import QuioscoContext from '../context/QuioscoProvider'
import Categoria from './Categoria'


const Sidebar = () => {

  const { categorias } = useContext(QuioscoContext)
  return (
    <>
        <Image width={300} height={100} src='/assets/img/logo.svg' alt='imagen logo'/>

        <nav className='mt-10'>
          {
            categorias.map((categoria) => (
              <Categoria
                categoria={categoria}
                key={categoria.id}
              />
            ))
          }

        </nav>

    </>
  )
}

export default Sidebar