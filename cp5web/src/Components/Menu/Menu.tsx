import "./Menu.css"
import hello from "../../assets/kitty.png"
import { Link } from "react-router-dom";

const Menu = () =>{
    return(
      <div className="menu">
        <div>
           <Link to= "/"><img src={hello} alt="" /></Link>
        </div>
        <div className="botoes">
          <button className="botao"><Link className="bt" to="/login">Entrar</Link></button>
          <button className="botao"> <Link className="bt" to="/cadastro">Cadastrar</Link></button>
        </div>
      </div>
    )
}

export default Menu;