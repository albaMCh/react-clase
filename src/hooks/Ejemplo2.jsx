/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * -useEffect()
 */

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  // Vamos a crear dos contadores distintos
  //cada uno en un estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  //Vamos a crear una referecia con seRef() para asociar una variable
  //con un elemento del DOM del componente (vista HTML)
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }
  function incremmentar2() {
    setContador2(contador2 + 1);
  }
  /**
   * Trabajando con UseEffect
   */
  /**
   * ? caso1: Ejecutar SIEMPRE un sippet de código
   * cada vez que haya un cambio en el estado del componente
   * se ejecuta aquello que este dentro del useEffect()
   */
  //  useEffect(() => {
  //  console.log("CAMBIO EN EL ESTADO DEL COMPONENTE");
  // console.log("Mostrando Referecia a el elemento de DOM");
  //   console.log(miRef);
  //});

  /**
   * ?caso 2: Ejecular  SOLO CUANDO CAMBIE CONTADOR1
   * Cada vez que haya un cambio en el contador1, se ejecutara lo que diga el useEffect()
   * en caso de cambie el contador2, no habra ejecucion
   *
   */
  // useEffect(() => {
  //  console.log("CAMBIO EN EL ESTADO DEL CONTADOR1");
  //    console.log("Mostrando Referecia a el elemento de DOM");
  // console.log(miRef);
  //}, [contador1]);

  /**
   * ?caso 2: Ejecular  SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
   * Cada vez que haya un cambio en el contador1, se ejecutara lo que diga el useEffect()
   * en caso de cambie el contador2, no habra ejecucion
   *
   */
  useEffect(() => {
    console.log("CAMBIO EN EL ESTADO DEL CONTADOR1/ CONTADOR2");
    console.log("Mostrando Referecia a el elemento de DOM");
    console.log(miRef);
  }, [contador1, contador2]);

  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef(), y useEffect() ***</h1>
      <h2>CONTADOR 1: {contador1}</h2>
      <h2>CONTADOR 2: {contador2}</h2>
      {/* Elemento referenciado*/}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      {/* Botones para cambiar los contadores*/}
      <div>
        <button onClick={incrementar1}>Incrementar contador1</button>
        <button onClick={incremmentar2}>Incrementar contador2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
