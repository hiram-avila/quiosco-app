import {useState, useEffect, createContext } from 'react'
import axios from 'axios'

const QuioscoContext = createContext()

const QuioscoProvider = ( {children}) => {
       //states
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [paso, setPaso] = useState({})
    

    const obtenerCategorias = async() => {
        const{data} =  await axios('/api/categorias')
        const data1 =  data.filter((data) => data.id != 0)
        setCategorias(data1)   
    }
    
    useEffect(() => {
        obtenerCategorias()
    },[])

    useEffect(()=>{
        setCategoriaActual(categorias[0])
    },[categorias])

    const handleClick = (id) => {
        const categoria = categorias.filter((cat) => cat.id  === id )
        setCategoriaActual(categoria[0] )
    }

    const handleSetProducto = (producto) => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }
    
    const handleAddOrder = ({categoriaId, ...pro}) => {
       if(pedido[0]?.id === producto.id){
        console.log('es igual')
        return
       }
        setPedido([...pedido, pro])  
    }

    const handleChangePaso = ( paso ) => {
        setPaso(paso)
    }


    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClick,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                handleAddOrder, 
                paso,
                handleChangePaso,
                pedido
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}


export {
    QuioscoProvider
}

export default QuioscoContext