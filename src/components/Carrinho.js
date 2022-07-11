import styled from "styled-components"
import TopBar from "./layout/TopBar"
import CarrinhoEsp from "./layout/CarrinhoEsp"

export default function Carrinho() {

    //aqui faz um get para a tabela com os produtos do carrinho e renderiza com map normalmente
    
    return(
        <>
            <TopBar/>
            <CarrinhoDiv>
                <CarrinhoEsp/>
            </CarrinhoDiv>
        </>
    )
}

const CarrinhoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`