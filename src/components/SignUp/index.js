import {
    Main,
    Container,
    RowBox,
    Logo,
    ColumnBox,
    Input,
    Button,
    Text,
  } from "./styles";
  
  import { Link, useNavigate } from "react-router-dom";
  import { useState } from "react";
  import axios from "axios";
  
  export default function SignUp() {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
  
    let registrationData = {
      name: name,
      email: email,
      password: password,
      confirmedPassword: confirmedPassword,
    };
  
    let navigate = useNavigate();
  
    return (
      <>
        <Main>
          <Container>
            <RowBox>
              <Logo> Travel Store 🌴 </Logo>
            </RowBox>
            <form onSubmit={userRegister}>
              <ColumnBox>
                <Input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></Input>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></Input>
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></Input>
                <Input
                  type="password"
                  placeholder="Confirme a senha"
                  value={confirmedPassword}
                  onChange={(e) => setConfirmedPassword(e.target.value)}
                  required
                ></Input>
                <Button type="submit"> Cadastrar </Button>
              </ColumnBox>
            </form>
            <RowBox>
              <Link to="/">
                <Text> Já tem uma conta ? Entre agora! </Text>
              </Link>
            </RowBox>
          </Container>
        </Main>
      </>
    );
  
  async function userRegister(event) {
    event.preventDefault();
    let userIsCreated = await sendUserRegisterData();
    if(userIsCreated){
      console.log("O usuário foi criado com sucesso");
      navigate("/");
    }else{
      console.log("Ocorreu um erro ao cadastrar o usuário");
    }
  }
  
  async function sendUserRegisterData(){
      const URL = "https://fullstack-driven-mywallet.herokuapp.com/sign-up";
      let userIsCreated;
      try{
        let response = await axios.post(URL, registrationData);
        if(response.status === 201){
          userIsCreated = true;
          return userIsCreated;
        }else{
          userIsCreated = false;
          return userIsCreated;
        }
      }catch(error){
        console.log("Ocorreu um erro na comunicação com o servidor", error);
      }
    }
  }