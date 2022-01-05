/**
 * Componente que va a contener un formulario para
 * autentificacion de usuarios-
 */

import React, { useState } from "react";

const LoginForm = () => {
  const initialcredencials = [
    {
      user: "",
      password: "",
    },
  ];

  const [credentials, setCredentials] = useState(initialcredencials);

  return <div></div>;
};

export default LoginForm;
