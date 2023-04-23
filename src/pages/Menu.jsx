import { useContext } from "react"
import { ProductContext } from "../context/productContext"
import { ProductCard } from "../components/ProductCard"



export const Menu = () => {
    const {items} = useContext(ProductContext)
    return(
        <div>
            <h1>Menu</h1>
            <h3>Filters</h3>
            <ul style={{ display: "flex",
        flexDirection: "row",  flexWrap: "wrap",}}>
                {
                    items.map((item) => (
                        <div key = {item.id}><ProductCard {...item}/></div>
                    ))
                }
            </ul>
            
        </div>
    )
}