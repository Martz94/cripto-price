import styled from "@emotion/styled"

const Contendor = styled.div`
    background-color: #FFD700;
    color: #000000;
    display: flex;
    align-items: start;
    gap: 15px;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
`
const Texto = styled.p`
    font-size: 15px;
    span {
        font-weight: 700;
    }
    
`
const Precio = styled.p`
    font-size: 20px;
    span {
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 150px;
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL} = 
    resultado
    return (
        <>
            <Contendor>
                <div>
                    <Precio>El precio es de:<span>{PRICE}</span></Precio>
                    <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="image crpto" />
                </div>
                <div>
                    <Texto>Precio más alto del dia: <span>{HIGHDAY}</span></Texto>
                    <Texto>Precio más bajo del dia: <span>{LOWDAY}</span></Texto>
                    <Texto>Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                    <Texto>Ultima Actualización: <span>{LASTUPDATE}</span></Texto>
                </div>
            </Contendor>
        </>
    )
}

export default Resultado