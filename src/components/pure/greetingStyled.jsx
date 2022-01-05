import React, { useState } from "react";
// definiendo estilos en constantes:
//? Estilo para usuario logueado
const loggedStyle = {
  color: "white",
};
//? Estilo para usuario no logueado
const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};
const Greetingstyled = (props) => {
  // Generamos un estado para el componente
  //y así controlar si el usuario está o no logueado
  const [logged, setLogged] = useState(false);

  const greetingUsuer = () => <p>Hola, {props.name}</p>;
  const pleaseLogin = () => <p>Please login</p>;

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingUsuer() : pleaseLogin()}

      <button
        onClick={() => {
          console.log("Botón pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Greetingstyled;
