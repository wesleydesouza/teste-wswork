import axios from "../../services/api";
import imgCar from "./img/car.png"
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
//yup
import FormValidation from "../../utils/validation/FormValidation";
//toastify
import { ToastContainer } from "react-toastify";
import Message from "../Message";
//styled
import {ContainerCenter,
        ContainerCard,
        Form} 
        from "./CarListStyle"

const CarList = () => {

    const [cars, setCars] = useState([]);
    const [marks, setMarks] = useState(["VW", "TOYOTA", "FORD", "FIAT"])
    const [model, setModel] = useState("");
    const [mark, setMark] = useState("");
    const [fuel, setFuel] = useState("gasolina");
    const [year, setYear] = useState(0);
    const [door, setDoor] = useState(2);
    const [color, setColor] = useState("branco");
    const [fipe, setFipe] = useState(10000);
    const [error, setError] = useState({ message: ""})

    

    useEffect(() => {
       const loadCars = async() => {
            const response = await axios.get("cars.json");
            setCars(response.data);
        }
        loadCars();
        
    },[])
    
    const newCar = () => {
        
        setMarks([mark ,...marks])
        setCars([...cars,{id: Math.random() * 10,
            marca_id: 1,
            marca_nome: mark,
            nome_modelo: model,
            ano: year,
            combustivel: fuel,
            num_portas: door,
            valor_fipe: fipe,
            cor: color,
            timestamp_cadastro: Date.now()}])
        }
        
        const showCars = (mark) => {
        return (cars.filter(car => car.marca_nome === mark).map(car => 
            <ContainerCard key={car.id}>
                 <h3>{car.marca_nome} {car.nome_modelo}</h3>
                 <img src={imgCar}></img>
                 <p>Tipo de Combustível: {car.combustivel}</p>
                 <p>Ano: {car.ano}</p>
                 <p>Portas: {car.num_portas}</p>
                 <p>Cor: {car.cor}</p>
                 <h3>valor fipe: R$ {car.valor_fipe}</h3>
                 <Link to={`/car/${car.id}`}><button>Detalhes</button></Link>
                 <hr/>
            </ContainerCard>))
    }

    const validate = async (event) => {
        event.preventDefault();

        const data = {model, mark, year, fipe};

        let validation = await FormValidation(data);
            
        if(validation){
            Message("Carro adicionado!", "success");
            newCar();
        }else{
            Message("Preencha os campos corretamente!", "error");
        }
    }

    return(
        <section>
            <ToastContainer/>
            <Form onSubmit={validate}>
                <span>{error.message}</span>
                <div>
                    <label htmlFor="model">Modelo do carro:</label>
                    <input type="text" name="model" placeholder="" onChange={event => setModel(event.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="mark">Marca do carro:</label>
                    <input type="text" name="mark" placeholder="" onChange={event => setMark(event.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="fuel">Combustível do carro:</label>
                    <select name="fuel" onChange={event => setFuel(event.target.value)}>
                        <option value="gasoline" defaultValue>Gasolina</option>
                        <option value="alcool" >Alcool</option>
                        <option value="flex" >Flex</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="year">Ano do carro:</label>
                    <input type="Number" name="year" placeholder="" onChange={event => setYear(event.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="door">Num. de portas:</label>
                    <select name="door" onChange={event => setDoor(event.target.value)}>
                        <option value={2} defaultValue>2</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="color">Cor do carro:</label>
                    <select name="color" onChange={event => setColor(event.target.value)}>
                        <option value="Branca" defaultValue>Branco</option>
                        <option value="Cinza">Cinza</option>
                        <option value="Preto">Preto</option>
                        <option value="Prata">Prata</option>
                        <option value="Azul">Azul</option>
                        <option value="Vermelho">Vermelho</option>
                        <option value="Marrom">Marrom</option>
                        <option value="Verde">Verde</option>
                        <option value="Rosa">Rosa</option>
                        <option value="Cor fantasia">Cor fantasia</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="fipe">Valor de fipe:</label>
                    <input type="Number" name="fipe"  onChange={event => setFipe(event.target.value)} required></input>
                <button type="submit">Criar Carro</button>
                </div>
            </Form>    
            <ContainerCenter>
                {marks.map(mark => showCars(mark))}
            </ContainerCenter>
        </section>
        
    )
}
export default CarList