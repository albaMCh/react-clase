import { findRenderedDOMComponentWithClass } from "react-dom/cjs/react-dom-test-utils.production.min";

/**
 * Ejemplo de componente de tipo clase que dispone de los 
 * métodos de ciclo de vida
 */
import React, {Component} from "react";
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
    
    
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WILLMOUNT: anes del montaje del componente')


    }
     componentDidMount() {
         console.log('DIDMOUNT: Justo al del montaje, antes de renderizarlo ')

     }
     componentWillReceiveProps(nextProps){
         console.log('WillReceiveProps: Si va a recibir nuevas props')
     }
     shouldComponentUpdate(nextProps, nextState) {
         /** controla si el componente debe o no actualizarse */
        // return true

     }
     componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse') 

     }
     componentDidUpdate(prevProps, prevState) {
        console.log('DidUpDate: Justo despues de actualizarse')

     }

     componentWillUnmount(){
        console.log('WillUNmount: Justo antes de desaparecer')

     }

     render() {
         return (
             <div>
                 
             </div>
         )
     }
     


    
}
