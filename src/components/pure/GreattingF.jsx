import React, { useState } from "react";
import PropTypes from "prop-types";

const Greattingf = (props) => {
  //Breve introducción a useState
  // Const [variable, método para actualizarlo] = useState (valor Inical)
  const [age, setstate] = useState(29);

  const birthday = () => {
    //actalizamos el State
    setstate(age + 1);
  };

  return (
    <div>
      <h1>¡HOLA {props.name} desde componente funcional!</h1>
      <h2>Tu edad es de: {age}</h2>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

Greattingf.propTypes = {
  name: PropTypes.string,
};

export default Greattingf;
