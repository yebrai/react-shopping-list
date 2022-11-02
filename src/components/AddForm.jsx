import { useState } from "react"

// imports de css
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddForm(props) {

  // crear los estados para los campos (componente controlado)
  const [ nameInput, setNameInput ] = useState("")
  const [ priceInput, setPriceInput ] = useState(0)

  const añadirProducto = (event) => {
    event.preventDefault() // => previene el comportamiento normal de un formulario (recarga toda la pagina)
    console.log("intentando añadir producto")
    // tendriamos que hacer manupulacion de dom y eso quedo atras...
    // ... ahora con componetes controlador, tenemos los valores en nameInput y priceInput

    // ... ahora que ya tenemos los valores para actualizar la lista... como lo hacemos?
    // console.log(nameInput, priceInput)
    const productoParaAñadir = {
      name: nameInput,
      price: priceInput
    }
    console.log(productoParaAñadir)
    // console.log(props)

    // * opcion 1
    props.addProduct(productoParaAñadir)

    // * opcion 2
    // props.setCaja() // ??
    // en funciones que actualizar el estado, tenemos dos formas de usarlas
    // setCaja( el valor nuevo del estado )
    // setCaja( una funcion de callback )
    // props.setCaja((currentState) => {
    // // currentState es el valor del estado antes de actualizar
    //   const copy = [...currentState]
    //   copy.push(productoParaAñadir)
    //   // debemos retornar cual será el valor actual
    //   return copy
    // })

  }

  const handleChangeName = (event) => {
    // event es TODA la informacion de la interaccion del usuario con la pagina
    // event.target es EL LUGAR donde se ocasionó dicho evento

    // voy a cambiar estado solo con mayusculas
    let input = event.target.value.toUpperCase()

    setNameInput(input)
  }

  const handleChangePrice = (event) => {
    setPriceInput(event.target.value)
  }

  return (
    <div>
      
      <h4>Formulario de agregar</h4>

      <form>

        <Form.Label htmlFor="name">Nombre:</Form.Label>
        <Form.Control type="text" name="name" value={nameInput} onChange={handleChangeName}/>

        <Form.Label htmlFor="price">Precio:</Form.Label>
        <Form.Control type="number" name="price" value={priceInput} onChange={handleChangePrice} min={0}/>

        <Button onClick={añadirProducto}>Agregar</Button>

      </form>

    </div>
  )
}

export default AddForm