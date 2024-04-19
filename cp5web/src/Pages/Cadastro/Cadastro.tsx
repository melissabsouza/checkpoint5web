import React from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import Footer from '../../Components/Footer/Footer';
import Menu from '../../Components/Menu/Menu';

const Cadastro: React.FC = () => {
return (
    <div className="signup-container">
        <Menu/>
        <div className="signup-content">
        <h2>Cadastro</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Usuário:</label>
            <input type="text" id="username" name="username" />
            <br />
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" />
            <br />
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />
            <br />
            <button type="submit">Cadastrar</button>
        </form>
        <div className="signup-links">
            <Link to="../Login">Já possui uma conta? Faça login</Link>
        </div>
        </div>
        <Footer/>
    </div>
    
);
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
const formData = new FormData(event.currentTarget);
const username = formData.get('username') as string;
const email = formData.get('email') as string;
const password = formData.get('password') as string;

console.log('Username:', username);
console.log('Email:', email);
console.log('Password:', password);
}

export default Cadastro