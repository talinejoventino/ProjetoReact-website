import '../Styles/Pages/profile.css'
import Sidebarprofile from '../Components/Sidebarprofile'
import imgProfile from '../Assets/taline.jpg'
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Profile = () => {
    return (
        <div className='principal'>
            <Sidebarprofile/>
            <title className='title'>
                <h1>Conheça a autora</h1>
            </title>
            <div className='main'> 
                <img  src={imgProfile} alt='Perfil Taline'/>
                <div className='text'>
                    <p>
                    Me chamo Taline Joventino, tenho 18 anos e vivo no litoral interior de Pernambuco. Sou
                    apaixonada por matématica e tecnologia, por isso, estou cursando front-end no Reprograma e faço o 1º período de Ciencia da Computação. Bookstan raiz e sempre que posso estou por aí escrevendo minhas poesias.
                    </p>
                <a  href="https://github.com/talinejoventino" className ="enter-app">
                    < AiFillGithub size={26} color=" #c2c1c0"/>
                </a>
                <a  href="https://www.instagram.com/talinejoventino/" className ="enter-app">
                    < AiFillInstagram size={26} color=" #c2c1c0"/>
                </a>
                <a  href="https://br.linkedin.com/in/taline-joventino-aa18251b2" className ="enter-app">
                    < AiFillLinkedin size={26} color=" #c2c1c0"/>
                </a>
                </div>
            </div> 

        </div>
    )
}

export default Profile;