import styled from "styled-components"
import TopBar from "./layout/TopBar"
import BtnsHome from "./layout/BtnsHome"
import { Link } from "react-router-dom"

export default function Home(){
    return(
    <>
        <TopBar/>
        <DivMainHome>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhp4e_DCXb9j1vUPeRcUOPzJ6Ms1ZRPqIjkuwlW3Q7yT6TAvyJRaHfF140rh7KcE-7gc&usqp=CAU" className="imgHome" alt="home"/>
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
    }

    h2{
        margin: 27px 0px 27px 0px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 15px;
        text-align: center;
        color: #000000;
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