import { useState } from "react"

function AddForm(props) {

  // Crear los estados para los campos (componente controlado)
  const [ nameInput, setNameInput ] = useState("")
  const [priceInput,setPriceInput] = useState(0)


  const añadirProducto = (event) => {
    event.preventDefault() // Prviene comportamiento normal de form(El cual recarga toda la pagina)
    console.log("intentado añadir producto")
    console.log((event.target))
    // tendriamos que hacer manipulacion de dom y eso quedo atras

    //.. ahora con componentes controlador

    // ahora que ya tenemos los componentes
    console.log(nameInput, priceInput)
    const productoParaAñadir = {
      name: nameInput,
      price: priceInput
    }

    console.log(productoParaAñadir)
    // Opcion 1
   // props.addProduct(productoParaAñadir)

    //*Opcion 2
    // props.stateUpdater()
    //en funciones que actualizan el estado, tenemos dos formas de usarlas
    //1º stateUpdater(PEl valor nuevo del estado)
    //2º stateUpdater(Una funcion de callback)

    //currenState es el valor del estado antes de actualizar
    props.setCaja((currentState) => {
        const copy = [...currentState]
        copy.push(productoParaAñadir)
        //debemos retornar cual sera el valor actual
        return copy
    })
  }

  const handleChangeName = (event) => {
    //evento es toda la info de la interacion del usuario sobre toda la pagina
    // event.target es el lugar dnd se ocasiono dicho evento
    
    // voy a cambiar el estado solo con mayusculas
    let input = event.target.value.toUpperCase()
    setNameInput(input)
    
  }

  const handleChangePrice = (event) => {
    setPriceInput(event.target.value)
  }

  return (
    <div>
    
      <h4>Formulario de agregar</h4>

      {/* <form onSubmit={añadirProducto}> */}
      <form>


        <label htmlFor="name">Nombre: </label>
        <input type="text" name="name" value={nameInput} onChange={handleChangeName}/>

        <label htmlFor="price">Precio:</label>
        <input type="number" name="price" value={priceInput} onChange={handleChangePrice}/>

        <button onClick={añadirProducto}>Agregar</button>

      </form>

    </div>
  )
}

export default AddForm