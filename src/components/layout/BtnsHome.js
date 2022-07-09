import styled from "styled-components";

export default function BtnsHome(props){
    return(
        <Btn>{props.children}</Btn>
    )
}

const Btn = styled.button`
    width: 32vw;
    height: 29vh;
    max-height: 150px;
    max-width: 150px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 18px;
    border: none;
    color: #27AE61;
    font-size: 70px;
    margin-bottom: 30px;

    :hover{
        transition: 1s;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
    }
`