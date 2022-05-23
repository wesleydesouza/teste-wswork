import { useState, useEffect } from "react";
import axios from "../../services/api";
import { Link } from "react-router-dom";
import { ContainerCard, ContainerCenter } from "./HomeStyle";
import imgCar from "../CarList/img/car.png"
const Home = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const loadCars = async() => {
             const response = await axios.get("cars.json");
             setCars(response.data);
         }
         loadCars();

     },[])

    const format = (number) => {
        let string = number.toString().replace(/[^0-9]/g, '')
        let number4Length
        if(string.length === 4){
            number4Length = Math.round(string).toFixed(0)
           return number4Length;
        }
        if( string.length < 4 && string != 170){
            string = Math.round(string).toFixed(3)
            return string    
        }
           
    }

    const showCar = (car) =>{
        return(
            <ContainerCard key={car.id}>
                <h3>{car.marca_nome} {car.nome_modelo}</h3>
                <img src={imgCar}></img>
                <p>Ano: {car.ano}</p>
                <h3>valor fipe: R$ {car.valor_fipe}</h3>
                <Link to={`/car/${car.id}`}><button>Detalhes</button></Link>
                <hr/>
            </ContainerCard>
        )
    }
     return(
        <section>
            <div>
                <h2>Carros mais novos no site:</h2>
                <ContainerCenter>
                    {cars.filter(car =>  car.timestamp_cadastro >= 1639141850 && car.timestamp_cadastro <= 1642211755 ).reverse().map(car => showCar(car))}
                </ContainerCenter>
                <h2>Carros antigos:</h2>
                <ContainerCenter>
                    {cars.filter(car => car.ano < 2005).map(car => showCar(car))}
                </ContainerCenter>
            </div>
            <div>
                <h2>Carros em promoção:</h2>
                <ContainerCenter>
                    {cars.filter(car => format(car.valor_fipe) <= "35.000").map(car => showCar(car))}
                </ContainerCenter>
            </div>
        </section>
    )
}
export default Home;