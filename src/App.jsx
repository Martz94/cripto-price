import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario.jsx'
import ImagenCoin2 from './img/coin2.png'
import ImagenCoin3 from './img/coin3.png'
import Resultado from './components/Resultado.jsx'
import Spinner from './components/Spinner.jsx'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  margin-bottom: 20px;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 130px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`



function App() {

  const[ monedas, setMonedas ] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => { 
    if(Object.keys(monedas).length > 0) {
      const contizarCripto = async () => {
        setCargando(true)
        setResultado({})
        const { moneda, criptomoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[criptomoneda][moneda])
        setCargando(false)
      }

      contizarCripto();

    }

  }, [monedas])

  return (
    <>
    <Contenedor>
      <div>
      <Imagen 
      src={ImagenCoin3}
      alt='imagenes cripto'
      ></Imagen>
      </div>
      
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario
        setMonedas={setMonedas}
        ></Formulario>
        {cargando && <Spinner/>}
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>
    </Contenedor>
    </>
  )
}

export default App
