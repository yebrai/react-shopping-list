import { useState } from "react"

import AddForm from "./AddForm"
import Item from "./Item"
import Search from "./Search"

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const testInitialList = [
    {name: "Tablet", price: 200 },
    {name: "Juego de Mesa", price: 40 },
    {name: "Conga", price: 120 }
]


function ShoppingList() {

    const [caja, setCaja] = useState(testInitialList)   //donde esta toda la informacion
    const [cajaAMostrar, setCajaAMostrar] = useState(testInitialList) //estado paralelo
    const [formIsShowing, setFormIsShowing] = useState(false)


     const añadirProducto = (product) => {
         //lifting the state up
         console.log("añadiendo producto desde shopping list", product)
         const copy = [...caja]
         copy.push(product)
         setCaja(copy)

         // esto es para que el filtro funcione bien
         const copy2 = [...cajaAMostrar]
         copy2.push(product)
         setCajaAMostrar(copy2)

     }

    const toggleForm = () => {

        console.log("se ve?");
        setFormIsShowing(true)

        // if (formIsShowing=== true)  {
        //     setFormIsShowing(false)
        // } else {
        //     setFormIsShowing(true)
        // }
        setFormIsShowing(!formIsShowing)

    }

    const filterCaja = (filterQuery) => {
        console.log(filterQuery)

        const filteredArr = caja.filter((eachProduct) => {
          return  eachProduct.name.startsWith(filterQuery) 
        })
        // ... aqui aremos el filtro, tenemos caja y el filterQuery

        console.log(filteredArr)
        setCajaAMostrar(filteredArr)
    }

  return (
    <div>

        <h3>Lista de compra</h3>

        <hr />
    <Button variant="outline-info" onClick={toggleForm}>Abrir el Form</Button>
    {/* {formIsShowing === true 
    &&  <AddForm
     addProduct={añadirProducto}
    //setCajaAMostrar={setCaja}
    />
    } */}
    <Collapse in={formIsShowing}>
    <div>
    <AddForm
     addProduct={añadirProducto}
    //setCajaAMostrar={setCaja}
    />
    </div>
    </Collapse>
    <hr />

    <Search filterCaja={filterCaja}/>
    <hr />

    {cajaAMostrar.map((eachProduct, index) => {
        return (
            <Item
            key={eachProduct.name + index}
            eachItem={eachProduct}/>
            )
    })}



    </div>
  )
}

export default ShoppingList