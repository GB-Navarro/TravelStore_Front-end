import styled from "styled-components";

import TobBar from "./../layout/TopBar"

export default function Profile() {
    return(
        <>
            <TobBar></TobBar>
            <Container>
                <User>
                    <span>
                        <ion-icon name="people-outline"></ion-icon>
                    </span>
                    <Box>
                        <p> Gabriel </p>
                    </Box>  
                </User>
                <Main>
                    <Travels>
                        <Travel>
                            <City>
                                <span>
                                    <ion-icon name="airplane-outline"></ion-icon>
                                </span>
                                <div>
                                    <p>Paris - França</p>
                                </div>
                               
                            </City>
                            <Value>
                                <span>
                                    <ion-icon name="cash-outline"></ion-icon>
                                </span>
                                <div>
                                <p>2500 $</p>
                                </div>
                                
                            </Value>
                        </Travel>
                        <Travel>
                            <City>
                                <span>
                                    <ion-icon name="airplane-outline"></ion-icon>
                                </span>
                                <div>
                                    <p>Paris - França</p>
                                </div>
                               
                            </City>
                            <Value>
                                <span>
                                    <ion-icon name="cash-outline"></ion-icon>
                                </span>
                                <div>
                                <p>2500 $</p>
                                </div>
                                
                            </Value>
                        </Travel>
                        <Travel>
                            <City>
                                <span>
                                    <ion-icon name="airplane-outline"></ion-icon>
                                </span>
                                <div>
                                    <p>Paris - França</p>
                                </div>
                               
                            </City>
                            <Value>
                                <span>
                                    <ion-icon name="cash-outline"></ion-icon>
                                </span>
                                <div>
                                <p>2500 $</p>
                                </div>
                                
                            </Value>
                        </Travel>
                        <Travel>
                            <City>
                                <span>
                                    <ion-icon name="airplane-outline"></ion-icon>
                                </span>
                                <div>
                                    <p>Paris - França</p>
                                </div>
                               
                            </City>
                            <Value>
                                <span>
                                    <ion-icon name="cash-outline"></ion-icon>
                                </span>
                                <div>
                                <p>2500 $</p>
                                </div>
                                
                            </Value>
                        </Travel>
                    </Travels>
                    <Aside>
                        <div>
                            <ion-icon name="map-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmarks-outline"></ion-icon>
                        </div>
                    </Aside>
                </Main>
            </Container>
        </>
    )
}

const User = styled.div`
    display:flex;
    margin-top: 5vh;
    span{
        font-size:52px;
    }
    p{
        font-size: 22px;
        margin-left: 12px;
    }
`

const Main = styled.main`
    display:flex;
`

const Travels = styled.section`
    margin-top: 7vh;
    width: 60vw;
`
const Aside = styled.aside`
    margin: 7vh 0vw 0vh 15vw;
    width: 40vw;
    display:flex;
    flex-direction: column;
    justify-content: center;
    div{
        font-size: 72px;
        background-color: #FFFFFF;
        margin-bottom: 5vh;
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 2vh 0vw 2vh 0vw;
        box-shadow: 3px 3px #D3D3D3;
        border-radius: 5px;
    }
`

const Travel = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 3px 3px #D3D3D3;
    margin-bottom: 3vh;
`

const City = styled.div`
    display:flex;
    padding:3vw 0vw 0vw 3vw;
    span{
        font-size:32px;
        margin-right: 3vw;
    }
    div{
        display:flex;
        align-items: center;
    }
`

const Value = styled.div`
    display:flex;
    padding:0vw 0vw 3vw 3vw;
    span{
        font-size:32px;
        margin-right: 3vw;
    }
    div{
        display:flex;
        align-items: center;
    }
`

const Box = styled.div`
    display:flex;
    align-items: center;
`

const Container = styled.div`
    margin: 0vh 5vw 0vh 5vw;
`