import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Footer from '../../Components/Footer/Footer';
import Menu from '../../Components/Menu/Menu';
import axios from 'axios';

function LoginPage():any {

    const[email, setEmail] = useState("")
    const[psw, setPsw] = useState("")

    const login:any = axios({
        method:"post",
        url:'https://caiohalbert.bsite.net/api/user/login',
        data:{
            "email": email,
            "password": psw
        }
    
    }).then(response =>
        {
            console.log(response.data);
        }
        );

    return (
        <>
            <Menu/>
            <div className="login-container">
                <div className="login-content">
                <h2>Login</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="username">Usuário:</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" id="username" name="username" />
                        <br />
                        <label htmlFor="password">Senha:</label>
                        <input onChange={e => setPsw(e.target.value)} type="password" id="password" name="password" />
                        <br />
                        <button onClick={login}>Entrar</button>
                        <div className="login-links">
                            <Link to="/">Esqueci minha senha</Link>
                            <span> | </span>
                            <Link to="/cadastro">Cadastrar</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
const formData = new FormData(event.currentTarget);
const username = formData.get('username') as string;
const password = formData.get('password') as string;

console.log('Username:', username);
console.log('Password:', password);
}

export default LoginPage