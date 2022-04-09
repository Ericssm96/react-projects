import React from "react";

class Formulario extends React.Component {

    render(){
        return (
        <form>
            <input type="text" placeholder="Título" />
            <textarea placeholder="Escreva sua nota..."/>
            <button>Criar nota</button>
        </form>
        )
    }
}

export default Formulario