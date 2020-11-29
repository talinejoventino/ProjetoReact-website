import { FiArrowLeft } from "react-icons/fi"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { BiUserPin } from "react-icons/bi";

import '../Styles/Components/sidebar.css'


const Sidebar = () => {
    const { goBack } = useHistory()
    return(
        <aside className="app-sidebar">
            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
                <Link to='/profile' className ='enter-profile'>
                    <BiUserPin size={26} color="#FFF" />    
                </Link>
            </footer>
        </aside>
    )
}

export default Sidebar;