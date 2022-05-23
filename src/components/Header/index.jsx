import { Link } from "react-router-dom";
import {HeaderContainer} 
    from "./HeaderStyle"
const Header = () => {
    return(
        <HeaderContainer>
            <h1>React<span>Car</span></h1>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/list"><li>Veículos</li></Link>
            </ul>
        </HeaderContainer>
    )
} 

export default Header;