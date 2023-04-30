import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import { Link } from "react-router-dom";

export const ProductCard = (item) => {

    const {cartHandler} = useContext(ProductContext);
    const {cartRemove, addCount, subtractCount, totalPrice} =useContext(ProductContext);

    const  {id,
    name,
    description,
    price,
    image,
    is_vegetarian,
    is_spicy,
    delivery_time,
is_added, 
showRemove,
showAdd,
addMore,count,   } = item;

    return(
        <div key={id} 
        style={{ border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#ffbc7d",
        width: "160px",
        margin: "20px"}}>
            <img style={{height : "150px", width : "150px"}} src = {image} alt = ""/>
            <p>{name}</p>
            <p>{description}</p>
            <p>Price: INR {price} </p>
            <p>DeliveryTime: {delivery_time} </p>

            {showAdd && <button onClick={() => cartHandler(item, id)} key = {id}>{is_added === false ? "Add" : <Link to = "/cart">Go to Cart</Link>}</button> }
            {showRemove && <button onClick={() => cartRemove(id)}>Remove from Cart</button>}
            {addMore && <div>
                    <button onClick={() => addCount(id)} >+</button> {count} <button onClick={()=>subtractCount(id)} >-</button>
                </div>}
            
            
        </div>
    )
}