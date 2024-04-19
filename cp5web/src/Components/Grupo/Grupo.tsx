import "./Grupo.css"

type Grupo = {
    Img: string,
    Nome: string,
    Rm: string
}

const Grupinho= ({Img, Nome, Rm}: Grupo) =>{
    return(
        <div>
            <div className="tudo">
                <div className="imagem">
                    <img src={Img} alt="" />
                </div>

                <div className="conteudo">
                    <h1 className="nomeRm">{Nome}</h1>
                    <h2 className="nomeRm">{Rm}</h2>
                </div>
            </div>
        </div>
    )
}

export default Grupinho