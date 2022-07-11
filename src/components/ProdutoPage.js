import styled from "styled-components";
import TopBar from "./layout/TopBar";
import BtnProduto from "./layout/BtnProduto";

export default function ProdutoPage(){
    
    //get para lista de produtos buscando pelo id na URL

    const produtosData = [
        {
            id: 123, 
            nome: "Maceio", 
            pais: "Brasil",
            preco: 200,
            avaliacao: "4.4",
            data: "12/12/22",
            img: "https://www.guiadasemana.com.br/contentFiles/image/opt_w320h320/2018/09/FEA/52309_carro-quebrado-alagoas.jpg"
        }]

    return(
        <>
            <TopBar/>
            <DivProduto>
                <img src = {produtosData[0].img} alt='a' className="a"/>
                <div className="info">
                    <div>
                        <ion-icon name="earth-outline"></ion-icon>
                        <h5>{produtosData[0].pais}</h5>
                    </div>
                    <div>
                        <ion-icon name="location-outline"></ion-icon>
                        <h5>{produtosData[0].nome}</h5>
                    </div>
                    <div>
                        <ion-icon name="calendar-outline"></ion-icon>  
                        <h5>{produtosData[0].data}</h5>  
                    </div>
                    <div>
                        <ion-icon name="star-outline"></ion-icon>   
                        <h5>{produtosData[0].avaliacao}</h5>
                    </div>
                    <div>
                        <ion-icon name="pricetags-outline"></ion-icon>
                        <h5>R${produtosData[0].preco}</h5>         
                    </div>                
                </div>
                <div className="btns">
                    <BtnProduto width={'50vw'} color={"#080444"} backcolor={"white"}>Comprar</BtnProduto>
                    <BtnProduto width={'15vw'} backcolor={"green"} color={"white"}><ion-icon name="cart-outline"></ion-icon></BtnProduto>
                </div>
            </DivProduto>
        </>
    )
}

const DivProduto = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 100vw;
        height: 30vh;
        background-size: cover;
    }

    .info{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0px 0px 0px 15px;
        width: 95vw;
        height: 40vh;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 18px;
        border: none;
        color: #080444;
        font-size: 60px;
        margin-top: 20px;
        
        div{
            display: flex;
            align-items: center;
            gap: 10px;
            h5{
                font-size: 35px;
            }
        }
        
    }

    .btns{
        margin-top: 20px;
        display: flex;
        width: 95vw;
        justify-content: space-between;
    }

`