import React from 'react'; 
import {llistaLLibres} from "../LLibres";

function MostrarLLibres(){
    const catalegLLibres = llistaLLibres.map(function(LLib){
                    return <div key={LLib.id}>
                                <h1>{LLib.title}</h1>
                                <p>{LLib.author}</p>   
                            </div>      
                    })


    return(
        <div>
        {catalegLLibres}
        </div>
    )
}

export default MostrarLLibres;