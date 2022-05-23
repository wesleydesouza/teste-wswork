import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ContainerCard } from "./CarStyle";
import imgCar from "../CarList/img/car.png"
import axios from "../../services/api";
const Car = () => {
    const { id } = useParams();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const loadCars = async() => {
            const response = await axios.get("/cars.json");
            setCars(response.data);
        }
        loadCars();

    }, [])
    
        return(
            <h1>{cars.filter(car => car.id == id).map(car => 
                <ContainerCard key={car.id}>
                 <h3>{car.marca_nome} {car.nome_modelo}</h3>
                 <img src={imgCar}></img>
                 <p>Tipo de Combustível: {car.combustivel}</p>
                 <p>Ano: {car.ano}</p>
                 <p>Portas: {car.num_portas}</p>
                 <p>Cor: {car.cor}</p>
                 <h3>valor fipe: R$ {car.valor_fipe}</h3>
                 <Link to={`/list`}><button>Voltar</button></Link>
                 <hr/>
            </ContainerCard>)}</h1>
        )
    
}
export default Car;