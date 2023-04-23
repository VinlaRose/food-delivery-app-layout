import { Link } from "react-router-dom" 

export const Home = () => {
    return(
        <div>
            <h1>Welcome to Neog Food delivery app</h1>
            <button> <Link to = "/menu">Menu</Link></button>
        </div>
    )
}