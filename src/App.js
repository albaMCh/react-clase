import logo from "./logo.svg";
import "./App.css";
import TaskListComponent from "./components/pure/container/task_list";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContext from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
import Greetingstyled from "./components/pure/greetingStyled";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*}  <img src={logo} className="App-logo" alt="logo" />*/}
      {/* Componente propio Greeting.jsx*/}
      {/*<Gretting name="Martin"></Gretting> */}
      {/* Componente de ejemplo funcional */}
      {/*<Greattingf name="Martin"></Greattingf>*/}
      {/* Componente de Listado de Tareas */}
      {/*} <TaskListComponent></TaskListComponent> */}
      {/* Ejemplos de uso de HOOKs*/}
      {/*<Ejemplo1></Ejemplo1>*/}
      {/*<Ejemplo2></Ejemplo2>*/}
      {/*<MiComponenteConContext></MiComponenteConContext>*/}
      {/*<Ejemplo4 nombre="Martin">
          <h3>Contenido del props.children</h3>
        </Ejemplo4>*/}
      {/*} <Greetingstyledname="martin"></Greetingstyledname>*/}
      {/*</header>*/}

      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
