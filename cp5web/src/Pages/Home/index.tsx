import Footer from "../../Components/Footer/Footer"
import Menu from "../../Components/Menu/Menu"
import "./style.css"

const Home = () =>{
    return(
        <>
            <Menu/>
            <div className="body">
                <h1>Home</h1>
            </div>
            <Footer/>
        </>
    )
}

export default Home