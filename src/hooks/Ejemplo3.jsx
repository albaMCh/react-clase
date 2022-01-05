/**
 * Ejemplos Hooks:
 *  -useState()
 * -useContext ()
 */

import React, { useState, useContext } from "react";

/**
 *
 * @returns Componente1
 * Dispone de un contexto que a tener un valor
 * que recibe del pader
 */

const miContexto = React.createContext(null);

const Componente1 = () => {
  // Inicializamos un estado vacio que va a rellenarse con los
  //datos del contexto del padre
  const state = useContext(miContexto);

  return (
    <div>
      <h1>El Token es: {state.token}</h1>
      {/* Pintamos el componente 2*/}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesión es:{state.sesion}</h2>
    </div>
  );
};
export default function MiComponenteConContext() {
  const estadoInicial = {
    token: "1234567",
    sesion: 1,
  };
  //Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSessionData({
      token: "jwt123456789",
      session: sessionData.sesion + 1,
    });
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo qe este aqui dentro puede leer los datos de sessionData */}
      {/* Además, si se actualiza los componentes de aqui, tambien lo actualiza */}
      <h1> *** Ejemplo de useState() y useContext()******</h1>
      <Componente1></Componente1>
      <button onclick={actualizarSesion}>Actualizar Sesión</button>
    </miContexto.Provider>
  );
}
