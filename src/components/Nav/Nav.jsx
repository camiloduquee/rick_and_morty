import SearchBar from "../Search/SearchBar.jsx";
import style from './Nav.module.css';

function Nav (props) {

    return(
        <div className={style.navbar}>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <div className={style.search}><SearchBar onSearch={(characterID) => window.alert(characterID)}/></div>
            </ul>
        </div>
    );
}
export default Nav; 

