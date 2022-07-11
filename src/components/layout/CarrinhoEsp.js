import styled from "styled-components";

export default function CarrinhoEsp(props){
    return(
        <CartDiv>
            <div>
                <ion-icon name="airplane-outline"></ion-icon>
                <h5>{props.cidade}</h5>
            </div>
            <div>
                <ion-icon name="cash-outline"></ion-icon>
                <h5>{props.preco}</h5>
            </div>
            <div className="close">
                <ion-icon name="close-outline"></ion-icon>
            </div>
        </CartDiv>
    )
}

const CartDiv = styled.div`
    width: 95vw;
    height: 10vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 18px;
    border: none;
    color: #080444;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 15px;
    div{
        display: flex;
        font-size: 35px;
        align-items: center;
        h5{
            padding-left: 5px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
        }
    }

    .close{
        position: absolute;
        right: 15px;
        cursor: pointer;
    }
`