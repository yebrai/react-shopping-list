import Card from 'react-bootstrap/Card';

function Item({eachItem: {name, price}}) {

 //dest 1   const {eachItem} = props
 //   const {name,price} = eachItem
 //destructuracion inline   const {name, price} = props.eachItem
  return (
    <Card>

    <Card.Header>{name}</Card.Header>
    <Card.Body>
     <Card.Text>Price: {price}$</Card.Text>
    </Card.Body>
   

    </Card>
  )
}

export default Item