import  styled  from "styled-components"

export default function Produto(){
    
    const produtosData = [
        {
            id: 123, 
            nome: "Maceio", 
            pais: "Brasil",
            preco: 200,
            avaliacao: "4.4",
            img: "https://www.guiadasemana.com.br/contentFiles/image/opt_w320h320/2018/09/FEA/52309_carro-quebrado-alagoas.jpg"
        },
        {
            id: 1234, 
            nome: "Fortaleza", 
            pais: "Brasil",
            preco: 400,
            avaliacao: "4.4",
            img: "http://rumoaomar.org.br/wp-content/uploads/2017/03/2.-Praia-do-Patacho-S%C3%A3o-Miguel-dos-Milagres-AL-1024x768.jpg"
        },
        {
            id: 12345, 
            nome: "Ceara", 
            pais: "Brasil",
            preco: 100,
            avaliacao: "4.5",
            img: "https://a.cdn-hotels.com/gdcs/production108/d1153/9bb4f4ff-afd9-4267-9e81-8fc370241afc.jpg"
        }

    ]
    
    
    return(
        <div className="cards">
            {produtosData.map((p)=>(
                <Card style={{backgroundImage: `url(${p.img})`}}>
                    <div className="cardDesc">
                        <h4>{p.nome}</h4>
                        <h4>R${p.preco}</h4>
                    </div>
                </Card>
            ))}
        </div>
    )
}

const Card = styled.div`
    min-width: 200px;
    min-height: 250px;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    border-radius: 10px;

    .cardDesc{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width:100%;
        height: 50px;
        color: #fff;
        backdrop-filter: blur(10px);
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 500;
        padding: 0px 0px 0px 15px;
        gap: 5px;
    }

    :hover{
        .cardDesc{
            transition: 1s;
            height: 70px;
        }
    }

`
