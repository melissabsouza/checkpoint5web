import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Cadastro.css';
import Footer from '../../Components/Footer/Footer';
import Menu from '../../Components/Menu/Menu';
import axios from 'axios';

function Cadastro() :any {

    const [email, setEmail] = useState("");
    const [uName, setName] = useState("");
    const [psw, setPsw] = useState("")
    const [txt, setTxt] = useState("cadastro");
    
    
    const req = async ()=>{
        try{
        const response = await axios({
            method: "post",
            url: "https://caiohalbert.bsite.net/api/user/newUser",
            headers:{"Content-Type":"application/json"},
            data:{
            "username": uName,
            "email":email,
            "passwordHash":psw,
            "accessLevel":""
            }
        })
        console.log(response);
        setTxt(response.data.email);
        }catch(err){
        console.log(err);
        console.log(txt);
        }
    }
      

return (
    <div className="signup-container">
        <Menu/>
        <div className="signup-content">
        <h2>Cadastro</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Usuário:</label>
            <input onChange={(e) => setName(e.target.value)} type="name" id="username" name="username" />
            <br />
            <label htmlFor="email">E-mail:</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
            <br />
            <label htmlFor="password">Senha:</label>
            <input onChange={(e) => setPsw(e.target.value)} type="password" id="password" name="password" />
            <br />
            <button onClick={req}>Cadastrar</button>
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