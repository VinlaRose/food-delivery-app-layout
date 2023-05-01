import { useContext } from "react"
import { ProductContext } from "../context/productContext"
import { ProductCard } from "../components/ProductCard"



export const Menu = () => {
    const {items, inputBar} = useContext(ProductContext)
    return(
        <div>
            <h1>Menu</h1>
            <div>
                <input placeholder="Search" onChange={inputBar}/>
            </div>
            <ul style={{ display: "flex",
        flexDirection: "row",  flexWrap: "wrap",}}>
                {
                    items.map((item) => (
                        <div key = {item.id}><ProductCard {...item} showAdd/></div>
                    ))
                }
            </ul>
            
        </div>
    )
}