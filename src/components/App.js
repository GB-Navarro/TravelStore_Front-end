import UserContext from "../contexts/UserContext";
import "../assets/css/reset.css"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home'
import Produtos from './Produtos';
import ProdutoPage from './ProdutoPage';
import Carrinho from './Carrinho';
import Historico from './Historico';
import Profile from './Profile';
import Favicon from 'react-favicon';


export default function App(){

    
    const contextValue = {}

    return(
        <BrowserRouter>
        <Favicon url='' />
        <UserContext.Provider value={contextValue}>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/sign-up" element={<SignUp />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/produtos" element={<Produtos />}/>
                <Route path="/produtos/:id" element={<ProdutoPage />}/>
                <Route path="/carrinho" element={<Carrinho />}/>
                <Route path="/historico" element={<Historico />}/>
                <Route path="/profile" element={<Profile />}/>
            </Routes>
        </UserContext.Provider>
    </BrowserRouter>
    )
}