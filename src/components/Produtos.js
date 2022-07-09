import styled from "styled-components"
import TopBar from "./layout/TopBar"
import Produto from "./Produto"

export default function Produtos() {
    return(
    <>
        <TopBar/>
        <ProdutosMainDiv>
            <div className="titleNProduct">
                <ion-icon name="location-outline"></ion-icon>
                <h3>Brasil</h3>
            </div>
            <Produto/>
            <div className="titleNProduct">
                <ion-icon name="location-outline"></ion-icon>
                <h3>Mundo</h3>
            </div>
            <Produto/>
        </ProdutosMainDiv>
    </>
    )
}

const ProdutosMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 37px;
    .titleNProduct{
        align-items: center;
        display: flex;
        color: #27AE61;
        font-size: 40px;
        h3{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 36px;
            line-height: 15px;
            text-align: center;
            color: #000000;
        }
    }

    .cards{
        display: flex;
        margin: 10px 20px;
        display: flex;
        overflow-x: scroll;
        gap: 20px;
    }

`