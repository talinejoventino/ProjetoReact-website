import { FiArrowLeft } from "react-icons/fi"
import { useHistory } from "react-router-dom";

import '../Styles/Components/sidebarprofile.css'


const Sidebarprofile = () => {
    const { goBack } = useHistory()
    return(
        <aside className="app-sidebar">
            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
            </footer>
        </aside>
    )
}

export default Sidebarprofile;