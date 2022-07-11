import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function TopBar(){
    return(
    <TopBarDiv>
        <ion-icon name="menu-outline"></ion-icon>
        <Link to={"/carrinho"} style={{textDecoration:'none', color: '#27AE61'}}>
            <span><ion-icon name="cart-outline"></ion-icon></span>
        </Link>
    </TopBarDiv>
    )
}

const TopBarDiv = styled.div`
    display: flex;
    width: 100vw;
    height: 5vh;
    padding: 5vh 2vw 5vh 2vw;
    color: #FFFFFF;
    font-size: 40px;
    justify-content: space-between;
    align-items: center;
    span{
        display:flex;
        align-items: center;
        color: #FFFFFF;
    }
`