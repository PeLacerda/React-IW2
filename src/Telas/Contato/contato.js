import React from 'react';
import'./contato.css';
import MeuInput from '../../Componente/input/input'

export default function Contato(){
    return (
        <div>
            <h1>Essa é a Janela de contato</h1>
            <span>
                Bem-Vindo a tela de contato
            </span>
            <br/>
            <MeuInput />
        </div>
    );
}
