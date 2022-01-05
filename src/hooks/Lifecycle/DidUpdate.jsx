/** 
 * Ejemplo de uso de metodo componentDidUpdate en componente de clase
 * y uso de hook en componente funcional 
*/
import React, { Component, useEffect } from 'react';

export  class Didupdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado')
    }



    render() {
        return (
            <div>
              <h1>DidUpDate</h1>
                
            </div>
        );
    }
}


export const DidupdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado')

    });
    return (
        <div>
              <h1>DidUpDate</h1>
        </div>
    );
}






