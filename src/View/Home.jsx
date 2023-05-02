import React from "react";
import Cards from '../components/Cards/Cards.jsx';
import Star from '../components/Star/Star.jsx';
const Home = ({characters,onClose}) => {
    return (
        <>
            <Cards characters={characters} onClose={onClose}/>
            <Star />
        </>
    )
}
export default Home;