import { getByDisplayValue } from '@testing-library/react';
import styled from 'styled-components';
import { useState } from 'react';

const Bg = styled.div`
    position: absolute;
    z-index: 1;
    height: 100%;
    margin: 0;
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;`;

const Botones = styled.a`
    font-size: 40%;
    border: solid 10px;
    z-index: 3;
    color: yellow;
    padding: 0 10px;
    margin: 0 2%;
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer; 
    `;

const Opacity = styled.div`
    z-index: 2;
    position: absolute;
    background-color: black;
    opacity: 80%;
    height: 100%;
    margin: 0;
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;`;

    const Regreso = () => {
        const [state, updateS] = useState(true);

        function display(e){
            updateS(!state);
        }

        if (state){
            
        }
    }

const Age = () => {
    const [state, updateS] = useState(true);

    function display(e){
        updateS(!state);
    }

    if(state) {
        
        return (
            <Bg>
                <Botones onClick={(e)=>{display(e)}}>Sí soy, pa</Botones>
                <Botones>Al chile no</Botones>
                <Opacity></Opacity>
            </Bg>
        );
    }
    else {
        return;
    }
}

export default Age;