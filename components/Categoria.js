import {useContext} from 'react'
import Image from 'next/image'
import QuioscoContext from '../context/QuioscoProvider'

const Categoria = ({categoria}) => {

    const {id, icono, nombre} = categoria

    const { handleClick, categoriaActual } = useContext(QuioscoContext)
  
  return (
    <div className={`${categoriaActual?.id === id ? "bg-amber-400" : ""} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
        <Image
            alt='imagen icono'
            width={70}
            height={70}
            src={`/assets/img/icono_${icono}.svg`}
            className='mr-5'
        />
    
        <button 
             type='button' 
             className='text-2xl font bold hover:cursor-pointer'
             onClick={ () => handleClick(id)}
        >
            {nombre}
        </button>



    </div>
  )
}

export default Categoria