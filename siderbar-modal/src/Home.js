import React from 'react'
import {FaBars} from 'react-icons/fa'
import {useGlobalContext} from "./context";

const Home = () => {
    const data = useGlobalContext();
    console.log(data);

    return (
        <main>
            <button className="sidebar-toggle">
                <FaBars/>
            </button>
            <button className="btn">Show Modal</button>
        </main>
    );
}

export default Home
