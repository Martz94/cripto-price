import {useEffect, useState} from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas.js"
import Error from "./Error.jsx";

const InputSubmit = styled.input`
    background-color: #22a9c4;
    border: none;
    width: 100%;
    padding: 10px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #05aaf7b7;
        cursor: pointer;
    }
`


const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos)

    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const response = await fetch(url)
            const result = await response.json()

            const arrayCriptos = result.Data.map( cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })

            setCriptos(arrayCriptos)

        }
        consultAPI();
    }, [])

    const handleSumit = e => {
        e.preventDefault()

        if([moneda, criptomoneda].includes('')){
            setError(true)

            return
        }

        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return (
        <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form
            onSubmit={handleSumit}
        >
            <SelectMonedas/>
            <SelectCriptomoneda/>
            <InputSubmit 
            type="submit" 
            value="Cotizar" />
        </form>
        </>
    )
}

export default Formulario