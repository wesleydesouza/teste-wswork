import { Link } from "react-router-dom";
import {Container} from "./ErrorStyle"
const Error = () => {
    return(
        <Container>
            <div>
                <h1>4<span>0</span>4</h1>
                <p>Página não encontrada!</p>
                <p>Voltar para <Link to="/">Home</Link>.</p>
            </div>
        </Container>
    )
}

export default Error;