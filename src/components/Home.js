import styled from "styled-components"
import TopBar from "./layout/TopBar"
import BtnsHome from "./layout/BtnsHome"
import { Link } from "react-router-dom"

export default function Home(){
    return(
    <>
        <TopBar/>
        <DivMainHome>
            <img src="https://www.segurospromo.com.br/blog/wp-content/uploads/2020/03/paris-a-noite.jpg" className="imgHome" alt="home"/>
            <div className="titleNBtns">
                <h2>Bem vindo, Fulano</h2>
                <div className="btns">
                    <Link to={'/produtos'}>
                        <BtnsHome><ion-icon name="earth-outline"></ion-icon></BtnsHome>
                    </Link>
                    <Link to={'/carrinho'}>
                        <BtnsHome><ion-icon name="cart-outline"></ion-icon></BtnsHome>
                    </Link>
                    <Link to={'/historico'}>
                        <BtnsHome><ion-icon name="receipt-outline"></ion-icon></BtnsHome>
                    </Link>
                    <Link to={'/profile'}>
                        <BtnsHome><ion-icon name="person-outline"></ion-icon></BtnsHome>
                    </Link>
                </div>
            </div>

        </DivMainHome>
    </>
    )
}

const DivMainHome = styled.div`
    .imgHome{
        width: 100vw;
        height: 30vh;
        background-size: cover;
        filter: blur(2.5px);
        -webkit-filter: blur(2.5px);
    }

    h2{
        margin: 27px 0px 27px 0px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 15px;
        text-align: center;
        color: #fff;
    }

    .titleNBtns{
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .btns{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 80vw;
    }
`