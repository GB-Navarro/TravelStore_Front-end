import UserContext from "../contexts/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Produtos from "./Produtos";
import ProdutoPage from "./ProdutoPage";
import Carrinho from "./Carrinho";
import Historic from "./Historic";
import Profile from "./Profile";
import Favicon from "react-favicon";
import GlobalStyles from "./globalStyles.js";

export default function App() {
  const contextValue = {};

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Favicon url="" />
        <UserContext.Provider value={contextValue}>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/:id" element={<ProdutoPage />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/historico" element={<Historic />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}