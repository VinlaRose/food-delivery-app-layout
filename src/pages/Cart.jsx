

import { useContext } from "react"
import { ProductContext } from "../context/productContext"
import { ProductCard } from "../components/ProductCard"



export const Cart = () => {
    const {cart, totalPrice, totalDeliverTime, couponHandler, couponApplied, undoCoupon} = useContext(ProductContext)
    
    return(
        <div>
            <h1>Cart</h1>
            <h2>Total Price : INR {totalPrice}</h2>
            <h2>Delivery Time: {totalDeliverTime} mins</h2>
            <button disabled={couponApplied} onClick={couponHandler}>{couponApplied ? "Coupon Already Applied" : "Add Coupon"}</button>
            {couponApplied && <button onClick={undoCoupon}>undo coupon</button>}
            
            <ul style={{ display: "flex",
        flexDirection: "row",  flexWrap: "wrap",}}>
                {
                    cart.map((item) => (
                        <div key = {item.id}><ProductCard {...item} showRemove showAdd={false} addMore/></div>
                    ))
                }
            </ul>
            
        </div>
    )
}