import React from "react";
import Cards from '../Cards/Cards.jsx';
import Star from "../Star/Star.jsx";
const Home = (props) => {
    return(
        <div>
            <Cards characters={props.characters} onClose={props.onClose} />
            <Star />
        </div>
    )
}
export default Home;