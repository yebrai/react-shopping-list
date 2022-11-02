import AddForm from "./AddForm"
import Item from "./Item"
import Search from "./Search"
import { useState } from "react"

const testInitialList = [
    {name: "Tablet", price: 200 },
    {name: "Juego de Mesa", price: 40 },
    {name: "Conga", price: 120 }
]


function ShoppingList() {

    const [caja, setCaja] = useState(testInitialList)

    // const añadirProducto = (product) => {
    //     //lifting the state up
    //     console.log("añadiendo producto desde shopping list", product)
    //     const copy = [...caja]

    //     copy.push(product)

    //     setCaja(copy)
    // }

  return (
    <div>

        <h3>Lista de compra</h3>

        <hr />

    <AddForm
    // addProduct={añadirProducto}
    setCaja={setCaja}
    />

    <hr />

    <Search />
    <hr />

    {caja.map((eachProduct, index) => {
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