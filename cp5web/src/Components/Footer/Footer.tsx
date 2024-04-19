import './Footer.css'
import Grupinho from "../Grupo/Grupo"
import pochacco from "../../assets/pochacco.png"
import melo from "../../assets/melo.png"
import choco from "../../assets/chococat.png"
import kero from "../../assets/keroppi.png"

const Footer = () =>{
    return(
        <div>
            <div className="principal">
                <Grupinho
                Img={pochacco}
                Nome="Alissa"
                Rm="553954"
                />

                <Grupinho
                Img={melo}
                Nome="Melissa"
                Rm="552535"
                />

                <Grupinho
                Img={choco}
                Nome="Mirella"
                Rm="552777"
                />

                <Grupinho
                Img={kero}
                Nome="Nicolas"
                Rm="554145"
                />
            </div>
        </div>
    )
}
export default Footer