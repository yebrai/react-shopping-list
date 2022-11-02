import { useState } from "react"

function Search(props) {

  const [searchInput, setSearchInput] = useState("")

  const handleChange = (event) => {
    setSearchInput(event.target.value) // siki se ejecuten cuando termina la funcion
    // no tenemos acceso al estado actualizado dentro de la misma funcion que lo busca actualizar

    // console.log("event.target.value", event.target.value)
    // console.log("searchInput", searchInput); // estado desactualizado
    //... aqui vamos a tratar de filtrar los productos
    props.filterCaja(event.target.value)
  }


  return (
    <div>

    <h5>Buscar</h5>

    <input type="text" name="search" value={searchInput} onChange={handleChange}/>


    </div>
  )
}

export default Search