import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function TopBar(){
    return(
    <TopBarDiv>
        <ion-icon name="menu-outline"></ion-icon>
        <Link to={"/carrinho"} style={{textDecoration:'none', color: '#27AE61'}}>
            <ion-icon name="cart-outline"></ion-icon>
        </Link>
    </TopBarDiv>
    )
}

const TopBarDiv = styled.div`
    display: flex;
    width: 100vw;
    height: 5vh;
    padding: 0px 1vw 0px 1vw;
    color: #27AE61;
    font-size: 40px;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
`