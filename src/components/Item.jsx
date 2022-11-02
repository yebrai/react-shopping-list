
function Item({eachItem: {name, price}}) {

 //dest 1   const {eachItem} = props
 //   const {name,price} = eachItem
 //destructuracion inline   const {name, price} = props.eachItem
  return (
    <div>

    <h5>{name}</h5>
    <p>Price: {price}$</p>

    </div>
  )
}

export default Item