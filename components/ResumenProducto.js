import React from 'react'
import Image from 'next/image'
import { formatearDinero } from '../helpers'

const ResumenProducto = ({producto}) => {

  return (
    <div className='shadow p-5 mb-3 flex gap-10 items-center'>
        <div className='md:w-1/6'>

            <Image width={300} height={400} alt='imagen producto' src={`/assets/img/${producto.imagen}.jpg` }/>
        </div>

        <div className='md:w-5/6'>
            <p className='text-3xl font-bold'>{producto.nombre}</p>
            <p className='text-xl font-bold mt-2'>Cantidad: {producto.cantidad}</p>
            <p className='text-xl font-bold mt-2 text-amber-500'>Precio: {formatearDinero(producto.precio)}</p>
        </div>
    </div>




  )
}



export default ResumenProducto