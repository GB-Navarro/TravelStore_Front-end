import styled from "styled-components";

export default function BtnProduto(props){
    return (
        <ButtonProd width = {props.width} color={props.color} backcolor={props.backcolor}>{props.children}</ButtonProd>
    )
}

const ButtonProd = styled.button`
    width: ${(props)=>props.width};
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    border: none;
    background-color: ${(props)=>props.backcolor};
    font-size: 50px;
    color: ${(props)=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
        transition: 1s;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
    }
`