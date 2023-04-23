export const ProductCard = (item) => {

    const  {id,
    name,
    description,
    price,
    image,
    is_vegetarian,
    is_spicy,
    delivery_time } = item;

    return(
        <div style={{ border: "1px solid black",
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
        </div>
    )
}